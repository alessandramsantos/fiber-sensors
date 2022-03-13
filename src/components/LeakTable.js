import React, { useContext } from 'react';
import '../css/LeakTable.css';
import updown from '../images/updown.png'
import fiberSensorContext from '../context/fiberSensorContext';
import Table from './Table';


function LeakTable() {
  
  const {
    time,
    date,
    updateDate,
    automaticUpDate,
    nextUpdateDay,
    handleShowTable,
    divHeight,
    showTable,
    data,
    nextUpdate,
  } = useContext(fiberSensorContext);

  const thirtyMinutes = 30 * 60000;

  setTimeout(() => {
    updateDate();
    automaticUpDate();
  }, thirtyMinutes);

  return (
    <div className="leak-table" style={{ "height": `${divHeight}px` }}>
      <div onClick={ handleShowTable }>
        <img src={ updown } alt="" width="120px" />
      </div>
      <p> {data.length} Rupturas Encontradas</p>
      {showTable && <Table />}
      <span className="last-update">Ultima atualização: { date } { time }</span>
      <i className="next-update">Proxima atualização automática: { nextUpdateDay } - { nextUpdate }</i>
      <button
        onClick={updateDate}
      >Atualizar mapa</button>
    </div>
  );
}

export default LeakTable;