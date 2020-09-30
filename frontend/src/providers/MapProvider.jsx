import React from 'react';
import axios from 'axios';
import tt from '@tomtom-international/web-sdk-maps';

const { createContext, useContext } = React;
const MapContext = createContext(null);

export const MapProvider = ({ children, apiKey }) => {
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

  const requestGeoLocation = (location) => {
    const fullAdress = `${location.city},${location.street}`;
    const requestUrl = `https://api.tomtom.com/search/2/geocode/${fullAdress}.JSON?key=${apiKey}`;
    return axios
      .get(requestUrl)
      .then((res) => res.data)
      .then((tomResponse) => {
        const results = tomResponse.results;
        if (results && results.length > 0) {
          const { position } = results[0];
          return position;
        } else {
          return Promise.reject('Location not Found');
        }
      });
  };

  const mapApi = {
    initMap,
    requestGeoLocation,
    setCenter,
    addMarker,
  };

  return <MapContext.Provider value={mapApi}>{children}</MapContext.Provider>;
};

export const useMap = () => useContext(MapContext);
