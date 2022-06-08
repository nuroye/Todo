import React from 'react'
import {RiDeleteBin2Fill} from "react-icons/ri"

export default function TodoItems(props) {
    const {todo, removeTodo} = props
  return (
    <div className='todo-row'>
     {todo.text}
    <div className='iconsContainer'>
     <RiDeleteBin2Fill className='icon' onClick={() => removeTodo(todo.id)}/>
     </div>
    </div>
  )
}
