/* eslint-disable tailwindcss/no-custom-classname */
import 'leaflet/dist/leaflet.css';
import './leaflet.css';
import 'swiper/css';
import 'swiper/css/effect-cards';

import L from 'leaflet';
import { useEffect, useState } from 'react';

type Journey = {
  date: string;
  lat: number;
  lng: number;
  images: string[];
};

const matches: Record<string, { default: Journey }> = import.meta.glob(
  '../../journey/**.json',
  { eager: true }
);
const journeys = Object.values(matches).flatMap((x) => x.default);

const generateSwiperHTML = (date: string, images: string[]) => {
  return `
    <div class="swiper-wrapper">
      <div class="swiper-title">${date}</div>
      <swiper-container effect="cards" grab-cursor="true" autoplay-delay="2500" autoplay-disable-on-interaction="true">
        ${images.map(
          (x) => `
          <swiper-slide>
            <img
              style="width: 100%; height: 100%; object-fit: cover;"
              src="${x}" 
            />
          </swiper-slide>
          `
        )}
      </swiper-container>
      <div class="arrow"></div>
    </div>
  `;
};

const Leaflet = () => {
  const [selectedJourney, setSelectedJourney] = useState<Journey | undefined>(
    undefined
  );

  useEffect(() => {
    const defaultZoom = 7;
    const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    const map = L.map('leaflet', {
      attributionControl: false,
      minZoom: 5,
      maxZoom: 14,
    }).setView([4.2105, 101.9758], defaultZoom);

    L.tileLayer(tileUrl).addTo(map);

    const root = document.documentElement;
    root.style.setProperty('--map-zoom-level', defaultZoom.toString());
    map.on('zoomend', function onZoomEnd() {
      root.style.setProperty('--map-zoom-level', map.getZoom().toString());
    });

    const markers: L.Marker<any>[] = [];
    journeys.forEach((journey) => {
      const customIcon = L.divIcon({
        html: generateSwiperHTML(
          journey.date,
          journey.images.map((x: string) => `/assets/journey/${x}`)
        ),
        iconSize: [32, 32],
        iconAnchor: [16, 32],
      });

      const marker = L.marker([journey.lat, journey.lng], {
        icon: customIcon,
        riseOnHover: true,
        riseOffset: 1,
        zIndexOffset: 1,
      });

      marker.on('add', () => {
        const container = marker
          .getElement()
          ?.querySelector('swiper-container');
        if (container) {
          container.addEventListener('click', () => {
            markers.forEach((x) => x.setZIndexOffset(1));
            marker.setZIndexOffset(2);
            map.flyTo([journey.lat, journey.lng], 14);
          });
        }
      });

      marker.addEventListener('click', () => {
        markers.forEach((x) => x.setZIndexOffset(1));
        marker.setZIndexOffset(2);
        map.flyTo([journey.lat, journey.lng], 14);
      });

      marker.addEventListener('dblclick', () => {
        setSelectedJourney(journey);
      });

      marker.addTo(map);
      markers.push(marker);
    });
  }, []);

  return (
    <div id="leaflet" style={{ height: 600, width: '100%' }}>
      {selectedJourney && (
        <div id="overlay" onClick={() => setSelectedJourney(undefined)}>
          <div className="swiper-overlay-title">{selectedJourney.date}</div>
          <swiper-container
            effect="cards"
            grab-cursor="true"
            style={{ width: '100%', height: 600 }}
          >
            {selectedJourney.images.map((x) => (
              <swiper-slide>
                <img
                  src={`/assets/journey/${x}`}
                  style={{
                    objectFit: 'contain',
                    width: '100%',
                    height: '100%',
                  }}
                />
              </swiper-slide>
            ))}
          </swiper-container>
        </div>
      )}
    </div>
  );
};

export default Leaflet;
