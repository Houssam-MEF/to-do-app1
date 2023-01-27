import { React, useContext, useRef } from 'react';
import   Task  from './Task';
import { FirstContext } from "../Context/FirstContext";
import './task.css';



const AllTasks = () => {

   const {task, setTask, arrTasks, setArrTasks, importance, setImportance, ajouter, supprimer, change } = useContext(FirstContext);
   const radio = useRef();
   const rad = (e)=>{
      if (e.target.checked){
         setImportance(e.target.value);
      }
   }

   return (
   <div id="div">
   <h1>To Do App</h1>
   <input className='txt' type="text" value={task} onChange={(e)=>{setTask(e.target.value)}} placeholder='Saisissez une tâche'/>
   <input className='btn' type="button" value="Ajouter" onClick={()=>ajouter(task)}/>
   <div id='imp'>
   <label>Importance :</label>
   <br />
      <input type="radio" value="HighImp" name='imp' onClick={(e)=>rad(e)} />Elevé
      <input type="radio" value="LowImp" name='imp' onClick={(e)=>rad(e)}/>Basse
   </div>
   <hr />
   <ol>
      <h3>Plus Important :</h3>
      {
         arrTasks.map((el)=>{
            if (el.imp == "HighImp"){
               return(
                  <div>
            <li key={el.id} >
                     <Task txt = {el} delf = {()=>supprimer(el.id)} chg={()=>change(el.id)} />
            </li>
               </div>
            )
         }
         }
         )
      }
      <h3>Moins Important :</h3>
      {
         arrTasks.map((el)=>{
            if (el.imp == "LowImp"){
               return(
                  <div>
            <li key={el.id} >
                     <Task txt = {el} delf = {()=>supprimer(el.id)} chg={()=>change(el.id)} />
            </li>
               </div>
            )
         }
         }
         )
      }
   </ol>
   </div>
   )
}

export default AllTasks;