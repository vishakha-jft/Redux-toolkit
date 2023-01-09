import React from 'react'
import { useContext } from 'react';
import { useState } from 'react';
import { createContext } from 'react'

const Todocontex = createContext();

const Todoprovider = ({children}) => {
    const [todolist , settodolist ] = useState(["Learn react context api"]);
    const getnoofitems = () => todolist.length
    const addtodo = (newitem) => {
      settodolist([...todolist,newitem])
    }
    const removeitem = (itemindex) => {
      const newlist = todolist.filter((_,index) => index !== itemindex);
      settodolist(newlist)
    }
    const contextvalue = {
        todolist,
        getnoofitems,
        addtodo,
        removeitem,
    };
  return <Todocontex.Provider value={contextvalue}>{ children }</Todocontex.Provider>
}
export const useTodoContex = () => useContext(Todocontex);//creating the custom Hook usetodocontext out of usecontex..

export default Todoprovider;
