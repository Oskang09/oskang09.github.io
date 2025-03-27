import 'leaflet/dist/leaflet.css';
import './leaflet.css';
import 'swiper/css';
import 'swiper/css/effect-cards';

import L from 'leaflet';
import { useEffect } from 'react';

const matches = import.meta.glob('../../journey/**.json', { eager: true });
const journeys = Object.values(matches);

const generateSwiperHTML = (images: string[]) => {
  return `
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
  `;
};

// image path: assets/journey/{image_path}

const Leaflet = () => {
  useEffect(() => {
    const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    const map = L.map('leaflet', { attributionControl: false }).setView(
      [4.2105, 101.9758],
      10
    );
    L.tileLayer(tileUrl).addTo(map);

    // loop journeys and render
    console.log(journeys);

    const customIcon = L.divIcon({
      html: generateSwiperHTML(['']),
      iconSize: [32, 32],
      iconAnchor: [16, 32],
    });

    L.marker([5.2105, 101.9758], { icon: customIcon }).addTo(map);
    L.marker([4.2105, 101.9758], { icon: customIcon }).addTo(map);
    L.marker([3.2105, 101.9758], { icon: customIcon }).addTo(map);
    L.marker([4.2105, 100.9758], { icon: customIcon }).addTo(map);
    L.marker([4.2105, 102.9758], { icon: customIcon }).addTo(map);
  }, []);

  return <div id="leaflet" style={{ height: 600, width: '100%' }} />;
};

export default Leaflet;
