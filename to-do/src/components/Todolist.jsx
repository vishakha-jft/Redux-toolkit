import React from 'react'
import { useTodoContex } from '../providers/Todoprovider'

const Todolist = () => {
    const { todolist,removeitem } =useTodoContex();
  return (
    <div>
        <ul>
            {
                todolist.map((todo,index) => {
                    return <li key={index}>{todo}  <button onClick={() => removeitem(index)}>Remove</button></li>
                })
            }
        </ul>      
    </div>
  )
}

export default Todolist
