import {useEffect} from 'react';
import leaflet from 'leaflet';

import {TOffer} from '../../reducer/types';

let map;
const markers = leaflet.layerGroup();

export const useMap = (offers: Array<TOffer>, activeCard: TOffer): void => {
  const cityLocation = [
    offers[0].city.location.latitude,
    offers[0].city.location.longitude,
  ];
  const cityZoom = offers[0].city.location.zoom;
  useEffect(() => {
    map = leaflet.map(`map`, {
      center: cityLocation,
      zoom: cityZoom,
      zoomControl: false,
      marker: true,
    });
    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(map);
    return (): void => {
      map.remove();
    };
  }, []);
  useEffect(() => {
    if (map) {
      markers.clearLayers();
      map.setView(cityLocation, cityZoom);
      offers.forEach(({location, id}) => {
        const iconUrl = activeCard && id === activeCard.id
          ? `img/pin-active.svg`
          : `img/pin.svg`;
        const icon = leaflet.icon({
          iconUrl,
          iconSize: [30, 30]
        });
        markers.addLayer(leaflet.marker([location.latitude, location.longitude], {icon}));
      });
      markers.addTo(map);
    }
  }, [
    offers,
    activeCard,
  ]);
};
