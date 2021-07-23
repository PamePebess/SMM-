import React from "react";
import styles from '../css/FinalView.css';
import {useLocalStorage} from '../useLocalStorage'


const FinalView = () => {

  const journal = localStorage.getItem('journalState')
  const date = localStorage.getItem('dataSelect')
  const people = localStorage.getItem('peopleState')

  return (
  <div id = 'finalViewContainer'>
  <div id = 'infoContainer'>
    <h1 id = 'title'>¡FELICITACIONES!</h1>
    <h3 id = 'subtitle'>TU RESERVA ESTÁ CONFIRMADA</h3>
        <ul id = 'data'>
        <li>Jornada : {journal}</li>
        <li>con Fecha : {date}</li>
        <li >cantidad de personas : {people}</li>
        </ul>
    <h5 id = 'cancel'>Si necesitas cancelar pincha <a href = '/start' id = 'here'><b>AQUÍ</b></a></h5>
  </div>
  </div>
  );
};
export default FinalView;
