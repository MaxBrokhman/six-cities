import {useEffect} from 'react';
import leaflet from 'leaflet';

const CITY = [52.38333, 4.9];
const icon = leaflet.icon({
  iconUrl: `img/pin.svg`,
  iconSize: [30, 30]
});
const ZOOM = 12;

let map;
const markers = leaflet.layerGroup();

export const useMap = (offers) => {
  useEffect(() => {
    map = leaflet.map(`map`, {
      center: CITY,
      zoom: ZOOM,
      zoomControl: false,
      marker: true
    });
    map.setView(CITY, ZOOM);
    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(map);
  }, []);
  useEffect(() => {
    if (map) {
      markers.clearLayers();
      offers.forEach(({coords}) => {
        markers.addLayer(leaflet.marker(coords, {icon}));
      });
      markers.addTo(map);
    }
  }, [offers]);
};
