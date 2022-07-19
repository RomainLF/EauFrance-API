import axios from 'axios';
import { createContext, useState, useEffect } from 'react';

const ctxProvider = createContext();
export default ctxProvider;

export function CtxProvider({ children }) {
  const [station, setStation] = useState([]);
  const [choice, setChoice] = useState('vide');
  const [result, setResult] = useState([]);
  const [periode, setPeriode] = useState(10);

  useEffect(() => {
    axios
      .get(
        'https://hubeau.eaufrance.fr/api/v1/temperature/station?size=10&exact_count=true&format=json',
        {}
      )
      .then(function (res) {
        const list = [];
        res.data.data.forEach((el) => {
          list.push(
            new Object({
              code_station: el.code_station,
              libelle_station: el.libelle_station,
            })
          );
        });
        setStation(list);
        console.log(list);
      });
  }, []);

  useEffect(() => {
    axios
      .get(
        `https://hubeau.eaufrance.fr/api/v1/temperature/chronique?code_station=${choice}&size=${periode}&sort=desc&pretty`,
        {}
      )
      .then(function (res) {
        const temp = [];
        res.data.data.forEach((el) => {
          temp.push(el.resultat);
        });
        setResult(temp);
        console.log(temp);
      });
  }, [choice, periode]);

  return (
    <ctxProvider.Provider
      value={{
        station,
        setStation,
        choice,
        setChoice,
        result,
        setResult,
        periode,
        setPeriode,
      }}
    >
      {children}
    </ctxProvider.Provider>
  );
}
