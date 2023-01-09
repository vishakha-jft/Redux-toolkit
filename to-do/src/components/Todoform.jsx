import React from 'react'
import { useState } from 'react';
import { useTodoContex } from '../providers/Todoprovider'

const Todoform = () => {
    const { getnoofitems,addtodo } = useTodoContex();
    const [todoitem,settodoitem] = useState("");
    const submit = (e) =>{
      e.preventDefault();
      if ( !todoitem ) { return }
      addtodo(todoitem)
      settodoitem("")
    }
  return (
    <form onSubmit={submit}>
        <h3> Number of todo items: {getnoofitems()}</h3>
        <input type="text" value={todoitem} onChange={(e) => settodoitem(e.target.value)}/>
        <button type='submit'> Submit </button>
    </form>
  )
}

export default Todoform
