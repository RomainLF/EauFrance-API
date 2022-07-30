import SCard from './style';
import { useContext, useState } from 'react';
import ctxProvider from '../../services/Ctx';

export default function Card(props) {
  const {
    setChoice,
    choice,
    station,
    setStation,
    clicked,
    setClicked,
    secondChoice,
    setSecondChoice,
  } = useContext(ctxProvider);

  const changeActive = (e) => {
    setStation(
      station.map((d) => {
        ///
        if (
          d.code_station === props.code_station &&
          props.selected === '' &&
          clicked === 'toto'
        ) {
          console.log('1');
          return { ...d, selected: '' };
        }
        ///
        if (
          d.code_station === props.code_station &&
          props.selected === 'active'
        ) {
          setChoice(0);
          setClicked('');
          console.log('2');
          return { ...d, selected: '' };
        }
        if (
          d.code_station === props.code_station &&
          props.selected === 'active' &&
          clicked === 'toto'
        ) {
          setChoice(0);
          setClicked('');
          console.log('3');
          return { ...d, selected: '' };
        }
        if (
          d.code_station === props.code_station &&
          props.selected === '' &&
          clicked === 'active'
        ) {
          setSecondChoice(e.target.value);
          setClicked('toto');
          console.log('4');
          return { ...d, selected: 'toto' };
        }
        if (
          d.code_station === props.code_station &&
          props.selected === 'toto' &&
          clicked === 'toto'
        ) {
          setSecondChoice(0);
          setClicked('active');
          console.log('5');
          return { ...d, selected: '' };
        }
        if (d.code_station === props.code_station) {
          setChoice(e.target.value);
          setClicked('active');
          console.log('6');
          return { ...d, selected: 'active' };
        }
        return d;
      })
    );
  };

  return (
    <SCard>
      <div className='cor'>{props.libelle_station}</div>
      <button
        className={props.selected}
        onClick={(e) => {
          changeActive(e);
          {
            console.log(choice, secondChoice, clicked);
          }
        }}
        value={props.code_station}
      >
        Selectionner
      </button>
    </SCard>
  );
}
