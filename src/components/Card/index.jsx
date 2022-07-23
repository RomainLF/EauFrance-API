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

  /*const changeActive = () => {
    setStation(
      station.map((d) => {
        if (
          d.code_station === props.code_station &&
          props.selected === '' &&
          clicked >= 1
        ) {
          return { ...d, selected: 'toto' };
        }
        if (
          clicked <= 1 &&
          d.code_station === props.code_station &&
          props.selected === ''
        ) {
          return { ...d, selected: 'active' };
        }
        if (d.code_station === props.code_station) {
          return { ...d, selected: '' };
        }
        return d;
      })
    );
  };*/

  /*const handleChange = (e) => {
    if (props.selected === 'active') {
      setClicked((clicked) => clicked - 1);
    }
    if (props.selected === 'toto') {
      setClicked((clicked) => clicked - 1);
    }
    if (clicked < 1) {
      setChoice(e.target.value), setClicked((clicked) => clicked + 1);
    } else
      setSecondChoice(e.target.value), setClicked((clicked) => clicked - 1);
  };*/

  const changeActive = (e) => {
    setStation(
      station.map((d) => {
        if (
          d.code_station === props.code_station &&
          props.selected === 'active'
        ) {
          setChoice(0);
          setClicked('');
          return { ...d, selected: '' };
        }
        if (
          d.code_station === props.code_station &&
          props.selected === 'active' && //clicked = toto   props.selected === 'active'
          clicked === 'toto'
        ) {
          setChoice(0);
          setClicked('');
          return { ...d, selected: '' };
        }
        if (
          d.code_station === props.code_station &&
          props.selected === '' &&
          clicked === 'active'
        ) {
          setSecondChoice(e.target.value);
          setClicked('toto');
          return { ...d, selected: 'toto' };
        }
        if (
          d.code_station === props.code_station &&
          props.selected === 'toto' &&
          clicked === 'toto'
        ) {
          setSecondChoice(0);
          setClicked('');
          return { ...d, selected: '' };
        }
        if (d.code_station === props.code_station) {
          setChoice(e.target.value);
          setClicked('active');
          return { ...d, selected: 'active' };
        }
        return d;
      })
    );
  };

  return (
    <SCard>
      <div>{props.code_station}</div>
      <div>{props.libelle_station}</div>
      <button
        className={props.selected}
        onClick={(e) => {
          changeActive(e);
          {
            console.log(choice, secondChoice, clicked);
          }
        }}
        value={props.code_station}
      ></button>
    </SCard>
  );
}
