import React from 'react';
import {
  AcUnitIcon,
  WhatshotIcon,
  WifiTetheringIcon,
  WorkIcon,
  PoolIcon,
  SportsEsportsIcon,
  FitnessCenterIcon,
  BeachAccessIcon,
  AirportShuttleIcon,
} from 'components/icons';
const RentalDetailAssets = () => {
  return (
    <div className='rentalDetail__assets'>
      <div>
        <AcUnitIcon /> <span>Cooling</span>
      </div>
      <div>
        <WhatshotIcon /> <span>Heating</span>
      </div>
      <div>
        <WifiTetheringIcon /> <span>Free Wifi</span>
      </div>
      <div>
        <WorkIcon /> <span>Working Area</span>
      </div>
      <div>
        <PoolIcon /> <span>Pool</span>
      </div>
      <div>
        <SportsEsportsIcon /> <span>Play Room</span>
      </div>
      <div>
        <FitnessCenterIcon /> <span>Fitness Center</span>
      </div>
      <div>
        <BeachAccessIcon /> <span>Private Beach</span>
      </div>
      <div>
        <AirportShuttleIcon /> <span>Airport Shuttle</span>
      </div>
    </div>
  );
};

export default RentalDetailAssets;
