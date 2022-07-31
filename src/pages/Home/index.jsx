import SHome from './style';
import { useContext } from 'react';
import ctxProvider from '../../services/Ctx';
import Card from '../../components/Card';
import Chart from '../../components/Chart';
import ChartNavBar from '../../components/ChartNavBar';
import Animation from '../../components/Animation';

export default function Home() {
  const { station } = useContext(ctxProvider);

  return (
    <SHome>
      <section className='background'>
        <section className='list'>
          <div className='title'>Liste des Stations</div>
          {station.map((d) => {
            return (
              <Card
                key={d.code_station}
                code_station={d.code_station}
                libelle_station={d.libelle_station}
                selected={d.selected}
              />
            );
          })}
        </section>
        <section className='chart'>
          <Chart />
          <ChartNavBar />
          <Animation />
        </section>
      </section>
      <div className='littleCircle'> </div>
      <div className='hiddenCircle'> </div>
    </SHome>
  );
}
