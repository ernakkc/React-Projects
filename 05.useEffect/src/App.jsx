import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'

function App() {
  
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")

  useEffect(() => {  
    console.log("Her renderda çalışır")
  })

  useEffect(() => {
    console.log("İlk renderda çalışır")
  }, [])

  useEffect(() => {
    console.log("İlk renderda ve firstName değiştiğinde çalışır")
  }, [firstName])

  useEffect(() => {
    console.log("İlk renderda ve lastName değiştiğinde çalışır")
  }, [lastName])
  

  return (
    <>
      <div>
        <button onClick={() => setFirstName("Eren")}>Adı Değiştir</button>
      </div>
      <div>
        <button onClick={()=> setLastName("Akkoç")}>Soyadı Değiştir</button>
      </div>
    </>
  )
}

export default App
