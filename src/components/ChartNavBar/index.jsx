import SchartNavBar from './style';
import { useContext } from 'react';
import ctxProvider from '../../services/Ctx';

export default function chartNavBar() {
  const { periode, setPeriode } = useContext(ctxProvider);

  return (
    <SchartNavBar>
      <button
        onClick={(e) => {
          setPeriode(e.target.value);
          {
            console.log(periode);
          }
        }}
        value={24}
      >
        24 Heures
      </button>
      <button
        onClick={(e) => {
          setPeriode(e.target.value);
          {
            console.log(periode);
          }
        }}
        value={720}
      >
        1 Mois
      </button>
      <button
        onClick={(e) => {
          setPeriode(e.target.value);
          {
            console.log(periode);
          }
        }}
        value={2160}
      >
        3 Mois
      </button>
    </SchartNavBar>
  );
}
