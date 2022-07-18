import axios from 'axios';
import { createContext, useState, useEffect } from 'react';

const ctxProvider = createContext();
export default ctxProvider;

export function CtxProvider({ children }) {
  const [stations, setStations] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://hubeau.eaufrance.fr/api/v1/temperature/station?size=10&exact_count=true&format=json`
      )
      .then(({ data }) => {
        setStations(data);
      });
  }, []);

  return (
    <ctxProvider.Provider
      value={{
        setStations,
        stations,
      }}
    >
      {children}
    </ctxProvider.Provider>
  );
}
