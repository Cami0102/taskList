import React, {useState, useEffect} from 'react'
import './App.css'
import Header from './componentes/Header.js';
import FormularioTareas from './componentes/FormularioTareas.js';
import ListaTareas from './componentes/ListaTareas';


const App = () => {
  //Obtenemos las tareas guardadas de localstorage
  const tareasGuardadas = 
  localStorage.getItem('tareas') 
  ? 
  JSON.parse(localStorage.getItem('tareas')) 
  : 
  [];

  //Establecemos el estado de las tareas
  const [tareas, cambiarTareas] = useState(tareasGuardadas);

  //Guardando el estado dentro de localstorage
useEffect(() => {
  localStorage.setItem('tareas', JSON.stringify(tareas));
}, [tareas]);

//Acceder a localstorage y comprobar si tiene valor null
let configMostrarCompletadas = '';
if(localStorage.getItem('mostrarCompletadas') === null){
  configMostrarCompletadas = true;
} else {
  configMostrarCompletadas = localStorage.getItem('mostrarCompletadas') === true;
}

  //Mostrar copmletadas
const [mostrarCompletadas, cambiarMostrarCompletadas] = useState(!configMostrarCompletadas);

useEffect(() => {
  localStorage.setItem('mostrarCompletadas ', mostrarCompletadas.toString());
}, [mostrarCompletadas]);
    
  return (
    <div className='contenedor'>
      <Header mostrarCompletadas={mostrarCompletadas} cambiarMostrarCompletadas={cambiarMostrarCompletadas} />
      <FormularioTareas tareas={tareas} cambiarTareas={cambiarTareas} />
      <ListaTareas 
        tareas={tareas} 
        cambiarTareas={cambiarTareas} 
        mostrarCompletadas={mostrarCompletadas}
      />
    </div> 
  );  
}

export default App;
