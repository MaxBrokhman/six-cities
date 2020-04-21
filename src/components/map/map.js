import React, {useEffect} from 'react';
import leaflet from 'leaflet';

const CITY = [52.38333, 4.9];
const icon = leaflet.icon({
  iconUrl: `img/pin.svg`,
  iconSize: [30, 30]
});
const ZOOM = 12;
// const offerCords = [52.3709553943508, 4.89309666406198];

const useMap = (offers) => {
  useEffect(() => {
    const map = leaflet.map(`map`, {
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
    offers.forEach(({coords}) => {
      leaflet
      .marker(coords, {icon})
      .addTo(map);
    });
  }, []);
};
// eslint-disable-next-line
export const Map = ({offers}) => {
  useMap(offers);
  return (
    <section className="cities__map map" id="map"></section>
  );
};
