import React, { useContext } from 'react';
import fiberSensorContext from '../context/fiberSensorContext';
import '../css/Table.css';
import location from '../images/location.png';
import mapIcon from '../images/map-icon.png';

function Table() {
  const { data, handleShowTable, updateLocation } = useContext(fiberSensorContext)

  const handleGeoLocation = (geoLocation) => {
    handleShowTable();
    updateLocation({ lat: geoLocation.latitude, lng: geoLocation.longitude })
  }

  return (
    <table className="tabela">
      <thead>
        <tr>
          <td className="location-td">
            <img src={location} alt="location blue icon" />
            Localização
          </td>
          <td>Posição</td>
          <td>Potência</td>
          <td>Status</td>
          <td>Ir para o mapa</td>
        </tr>
      </thead>
      <tbody>
        {data.map((elem) => (
          <tr key={elem.id}>
            <td>{elem.bairro}, {elem.rua}</td>
            <td>{parseInt(elem.distancia)}</td>
            <td>{elem.perda.toFixed(2)} Db</td>
            <td>{elem.status}</td>
            <td
              onClick={() => handleGeoLocation(elem.geoLocation)}
            >
              <img src={ mapIcon } alt="location blue icon" />
            </td>
          </tr>
        ))}

      </tbody>
    </table>

  );
}

export default Table;