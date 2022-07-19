import SHome from './style';
import { useContext } from 'react';
import ctxProvider from '../../services/Ctx';
import Card from '../../components/Card';

export default function Home() {
  const { station, result } = useContext(ctxProvider);

  return (
    <SHome>
      {station.map((d) => {
        return (
          <Card
            code_station={d.code_station}
            libelle_station={d.libelle_station}
          />
        );
      })}
    </SHome>
  );
}
