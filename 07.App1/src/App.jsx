import { useState } from 'react'
import './App.css'
import Header from './Header'
import { sales } from './data.jsx'
import Components from './Components.jsx'

function App() {
  

  return (
    <div className='Sales-Main'>
      <Header />
      {
        sales.map((sales) => {
          return <Components key={sales.id} sale={sales} />
        })
      }
    </div>
)}

export default App
