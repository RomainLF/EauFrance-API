import SChart from './style';
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import { useContext } from 'react';
import ctxProvider from '../../services/Ctx';

export default function Charte() {
  const { result } = useContext(ctxProvider);

  const data = {
    labels: result.map((data) => data),
    datasets: [
      {
        label: 'Température',
        data: result,
        backgroundColor: '#2086b6',
      },
    ],
  };

  return (
    <SChart>
      <div className='mainGraph'>
        <Bar data={data} />
      </div>
    </SChart>
  );
}
