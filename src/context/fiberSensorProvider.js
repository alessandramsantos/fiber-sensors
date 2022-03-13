import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';
import fiberSensorContext from './fiberSensorContext';
import data from '../services/sensores';

function FiberSensorProvider({ children }) {

  const [time, setTime] = useState('');
  const [date, setDate] = useState('')
  const [nextUpdate, setNextUpdate] = useState('')
  const [nextUpdateDay, setNextUpdateDay] = useState('')
  const [showTable, setShowTable] = useState(false)
  const [divHeight, setDivHeight] = useState(220)
  const [location, setLocation] = useState({
    center: {
      lat: -25.460027300623434,
      lng: -49.280195171466154,
    },
    zoom: 11
  });

  const automaticUpDate = () => {
    const minutes = time.slice(-2)
    const hour = parseInt(time.slice(0, 2))
    const day = parseInt(date.slice(0, 2))
    const monthAndYear = date.slice(-5)
    console.log(hour)
    if (minutes > 30) {
      setNextUpdate(`${hour + 1} : 00`)
    } else {
      setNextUpdate(`${hour} : 30`)
    }

    if (hour == 23 && minutes > 30) {
      setNextUpdateDay(`${day + 1}${monthAndYear}`)
    } else {
      setNextUpdateDay(date)
    }
  }

  const updateDate = () => {
    const today = new Date();
    setTime(`${today.getHours()} : ${today.getMinutes()}`);
    setDate(`${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear().toString().substr(-2)}`);
  };

  useEffect(() => {
    automaticUpDate()
    updateDate()
  }, [updateDate, automaticUpDate]);

  const handleShowTable = () => {
    setShowTable(!showTable)
    if (!showTable) {
      setDivHeight(600)

    } else {
      setDivHeight(215)
    }
  }

  const updateLocation = (cordinates) => {
    setLocation({
      center: {
        lat: cordinates.lat,
        lng: cordinates.lng,
      },
      zoom: 15,
    });
  }

  const contextValue = {
    time,
    date,
    updateDate,
    automaticUpDate,
    nextUpdate,
    nextUpdateDay,
    data,
    handleShowTable,
    showTable,
    divHeight,
    location,
    updateLocation,
  };

  return (
    <fiberSensorContext.Provider value={contextValue}>
      {children}
    </fiberSensorContext.Provider>
  );
}

FiberSensorProvider.propTypes = {
  children: propTypes.node.isRequired,
};

export default FiberSensorProvider;