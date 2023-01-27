import React, { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';


export const FirstContext = createContext();

export default function FirstContextProvider({children}){

      const [task, setTask] = useState("");
      const [importance, setImportance] = useState("LowImp");
      
      const [arrTasks, setArrTasks] = useState([
         {id:uuidv4(), name:"Sport",done : false, imp: "LowImp"},
         {id:uuidv4(), name:"coder en React",done : false, imp: "HighImp"},
         {id:uuidv4(), name:"Film",done : false, imp: "LowImp"}
      ])
      let names = [];
      arrTasks.map((el)=>{return names.push(el.name)});
      
      const ajouter = (task)=>{
         if (task.trim() === "") {
            return alert("Saisissez une tache")
         };
         console.log(names);
         console.log(task);
         
         if (task.toString() in names){
            return alert("laa")
         }
            let newArr = [...arrTasks];
            let newTask = {};
            newTask.id = uuidv4();
            newTask.name = task;
            newTask.done = false;
            newTask.imp = importance;
            newArr.push(newTask);
            setArrTasks(newArr);
            setTask("");
      }
      
      const supprimer = (idx)=>{
         let newArr = arrTasks.filter((el)=>{
            return el.id != idx;
         })
         setArrTasks(newArr);
      }

      const change = (id)=>{
         let arr = arrTasks.map((e)=>{
            if (e.id === id){
               e.done = !e.done;
            }
            return e
         });
         setArrTasks(arr);
      }
      
      return(
         <FirstContext.Provider value={{task, setTask, arrTasks, setArrTasks, importance, setImportance, ajouter, supprimer, change }}>
            {children}
            </ FirstContext.Provider>

      )
   }