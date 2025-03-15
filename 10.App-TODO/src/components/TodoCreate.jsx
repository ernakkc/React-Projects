import React from 'react'
import '../App.css'

function TodoCreate() {
  return (
    <div className='todo-create'>
      <input type="text" placeholder="Todo Giriniz." />
      <button>Todo Ekle</button>
    </div>
  )
}

export default TodoCreate
