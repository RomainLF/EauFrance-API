import axios from 'axios';
import { createContext, useState, useEffect } from 'react';

const ctxProvider = createContext();
export default ctxProvider;

export function CtxProvider({ children }) {
  const [stations, setStations] = useState([]);
  const [codeStations, setCodeStations] = useState([]);

  useEffect(() => {
    axios
      .get(
        'https://hubeau.eaufrance.fr/api/v1/temperature/station?size=10&exact_count=true&format=json',
        {}
      )
      .then(function (response) {
        console.log('First call');
        const listName = [];
        const listCode = [];
        response.data.data.forEach((el) => {
          listName.push(el.libelle_station);
          listCode.push(el.code_station);
        });
        setStations(listName);
        setCodeStations(listCode);
        console.log(listName, listCode);
      });
  }, []);

  return (
    <ctxProvider.Provider
      value={{
        setStations,
        stations,
        setCodeStations,
        codeStations,
      }}
    >
      {children}
    </ctxProvider.Provider>
  );
}
