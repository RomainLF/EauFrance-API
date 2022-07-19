import SChart from './style';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import { useContext } from 'react';
import ctxProvider from '../../services/Ctx';

export default function Charte() {
  const { result, secondResult } = useContext(ctxProvider);

  const data = {
    labels: result.map((data) => data),
    datasets: [
      {
        label: 'Température',
        data: result,
        backgroundColor: '#2086b6',
      },
      {
        label: 'Température 2',
        data: secondResult,
        backgroundColor: '#d59e1d',
      },
    ],
  };

  return (
    <SChart>
      <div className='mainGraph'>
        <Line data={data} />
      </div>
    </SChart>
  );
}
