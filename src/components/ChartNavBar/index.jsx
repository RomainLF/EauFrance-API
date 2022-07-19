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
        value={10}
      >
        J
      </button>
      <button
        onClick={(e) => {
          setPeriode(e.target.value);
          {
            console.log(periode);
          }
        }}
        value={24}
      >
        M
      </button>
      <button
        onClick={(e) => {
          setPeriode(e.target.value);
          {
            console.log(periode);
          }
        }}
        value={100}
      >
        A
      </button>
    </SchartNavBar>
  );
}
