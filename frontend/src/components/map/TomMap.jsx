import React, { useEffect, useCallback, useRef } from 'react';
import { useMap } from 'providers/MapProvider';

const TomMap = ({ location }) => {
  const map = useRef(null);
  const mapService = useMap();

  const getGeoLocation = useCallback((location) => {
    mapService
      .requestGeoLocation(location)
      .then((position) => {
        mapService.setCenter(map.current, position);
        mapService.addMarker(map.current, position);
      })
      .catch((err) => console.log(err));
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    getGeoLocation(location);
  }, [location, getGeoLocation]);

  useEffect(() => {
    map.current = mapService.initMap();
    // eslint-disable-next-line
  }, []);

  return <div id='freshbnb-map'></div>;
};

export default TomMap;
