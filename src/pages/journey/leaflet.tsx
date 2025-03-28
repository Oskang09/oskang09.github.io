import 'leaflet/dist/leaflet.css';
import './leaflet.css';
import 'swiper/css';
import 'swiper/css/effect-cards';

import L from 'leaflet';
import { useEffect } from 'react';

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
      <swiper-container effect="cards" grab-cursor="true">
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
  useEffect(() => {
    const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    const map = L.map('leaflet', { attributionControl: false }).setView(
      [4.2105, 101.9758],
      7
    );
    L.tileLayer(tileUrl).addTo(map);

    journeys.forEach((journey) => {
      const customIcon = L.divIcon({
        html: generateSwiperHTML(
          journey.date,
          journey.images.map((x: string) => `/assets/journey/${x}`)
        ),
        iconSize: [32, 32],
        iconAnchor: [16, 32],
      });
      L.marker([journey.lat, journey.lng], { icon: customIcon }).addTo(map);
    });
  }, []);

  return <div id="leaflet" style={{ height: 600, width: '100%' }} />;
};

export default Leaflet;
