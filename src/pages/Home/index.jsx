import SHome from './style';
import { useContext } from 'react';
import ctxProvider from '../../services/Ctx';
import Card from '../../components/Card';
import Chart from '../../components/Chart';
import ChartNavBar from '../../components/ChartNavBar';

export default function Home() {
  const { station } = useContext(ctxProvider);

  return (
    <SHome>
      <section className='list'>
        {station.map((d) => {
          return (
            <Card
              code_station={d.code_station}
              libelle_station={d.libelle_station}
            />
          );
        })}
      </section>
      <section className='chart'>
        <Chart />
        <ChartNavBar />
      </section>
    </SHome>
  );
}
