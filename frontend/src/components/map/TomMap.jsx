import React, { useEffect } from 'react';
import { useMap } from 'providers/MapProvider';

const TomMap = () => {
  const mapService = useMap();

  useEffect(() => {
    mapService.initMap();
  }, []);

  return <div id='freshbnb-map'></div>;
};

export default TomMap;
