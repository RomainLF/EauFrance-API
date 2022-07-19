import SCard from './style';
import { useContext } from 'react';
import ctxProvider from '../../services/Ctx';

export default function Card(props) {
  const { setChoice, choice } = useContext(ctxProvider);

  return (
    <SCard>
      <div>{props.code_station}</div>
      <div>{props.libelle_station}</div>
      <button
        onClick={(e) => {
          setChoice(e.target.value);
          {
            console.log(choice);
          }
        }}
        value={props.code_station}
      ></button>
    </SCard>
  );
}
