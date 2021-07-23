import React from "react";
import styles from '../css/FinalView.css';
<<<<<<< HEAD


const finalView = () => {
  return (
    
     <div id="finalView">
  
    <h1 id="title">¡FELICITACIONES!</h1>
  <h3 id="subtitle">TU RESERVA ESTÁ CONFIRMADA</h3>
  <h4></h4>
  <h5 id="cancel">Si necesitas cancelar pincha <b>AQUÍ</b></h5>
=======
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
>>>>>>> 52c6265a7d1d72ad40322424bf557f73e1cb57ba
  </div>
   
  );
};
export default FinalView;
