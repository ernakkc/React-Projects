import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Product from './Product'

function App() {

  return (
    <>
      <Product name="Ayakkabı" price="1500 TL" />
      <br />
      <br />
      <Product name="Bilgisayar" price="7500 TL" />
    </>
  ) 
}

export default App
