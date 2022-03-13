import React, { useContext, useEffect, useState } from 'react';
import '../css/Map.css';
import GoogleMapReact from 'google-map-react';
import MyGreatPlace from './MyGreatPlace';
import fiberSensorContext from '../context/fiberSensorContext';

function SimpleMap() {
  const { location } = useContext(fiberSensorContext)
  const [cordinates, setCordinates] = useState(location);

  useEffect(() => {
    setCordinates(location);
  }, [location])

  return (
    <div className='geo-location'>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_KEY }}
        center={cordinates.center}
        zoom={cordinates.zoom}
      >
        <MyGreatPlace lat={cordinates.center.lat} lng={cordinates.center.lng} text={''} />
      </GoogleMapReact>
      kk
    </div>
  );
}

export default SimpleMap;