import SHome from './style';
import { useContext } from 'react';
import ctxProvider from '../../services/Ctx';

export default function Home() {
  const { stations } = useContext(ctxProvider);

  return (
    <SHome>
      {stations.map((station) => {
        return <div>{station}</div>;
      })}
    </SHome>
  );
}
