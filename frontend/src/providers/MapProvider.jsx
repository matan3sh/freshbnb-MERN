import React, { useRef } from 'react';
import axios from 'axios';
import tt from '@tomtom-international/web-sdk-maps';

const { createContext, useContext } = React;
const MapContext = createContext(null);

export const MapProvider = ({ children, apiKey }) => {
  const cache = useRef({});

  const normalizeLocation = (location) => {
    return location.replace(/\s/g, '').toLowerCase();
  };

  const cacheLocation = (location, position) => {
    const locationKey = normalizeLocation(location);
    return (cache.current[locationKey] = position);
  };

  const getCachedLocation = (location) => {
    const locationKey = normalizeLocation(location);
    return cache.current[locationKey];
  };

  const initMap = () => {
    const map = tt.map({
      key: apiKey,
      container: 'freshbnb-map',
      style: 'tomtom://vector/1/basic-main',
      zoom: 15,
    });
    map.addControl(new tt.NavigationControl());
    return map;
  };

  const setCenter = (map, position) => {
    map.setCenter(new tt.LngLat(position.lon, position.lat));
  };

  const addMarker = (map, position) => {
    const markerDiv = document.createElement('div');
    markerDiv.className = 'freshbnb-marker';
    new tt.Marker({ element: markerDiv })
      .setLngLat([position.lon, position.lat])
      .addTo(map);
  };

  const addPopupMessage = (map, message) => {
    new tt.Popup({
      className: 'freshbnb-popup',
      closeButton: false,
      closeOnClick: false,
    })
      .setLngLat(new tt.LngLat(0, 0))
      .setHTML(`<p>${message}</p>`)
      .addTo(map);
  };

  const getGeoPosition = (location) => {
    const cachedPosition = getCachedLocation(location);
    return cachedPosition
      ? Promise.resolve(cachedPosition)
      : requestGeoLocation(location);
  };

  const requestGeoLocation = (location) => {
    const requestUrl = `https://api.tomtom.com/search/2/geocode/${location}.JSON?key=${apiKey}`;
    return axios
      .get(requestUrl)
      .then((res) => res.data)
      .then((tomResponse) => {
        const results = tomResponse.results;
        if (results && results.length > 0) {
          const { position } = results[0];
          cacheLocation(location, position);
          return position;
        } else return Promise.reject('Location not Found');
      })
      .catch(() => Promise.reject('Location not Found'));
  };

  const mapApi = {
    initMap,
    getGeoPosition,
    setCenter,
    addMarker,
    addPopupMessage,
  };

  return <MapContext.Provider value={mapApi}>{children}</MapContext.Provider>;
};

export const useMap = () => useContext(MapContext);
