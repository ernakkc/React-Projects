import { useState } from 'react'
import { useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'


const BASE_URL = 'http://localhost:3005';


function App() {
  
  const getAllUsers = async() => {
    const response = await axios.get(`${BASE_URL}/users`);
    console.log(response.data);
  }

  const getUserById = async(id) => {
    const response = await axios.get(`${BASE_URL}/users/${id}`);
    console.log(response.data);
  }

  const createUser = async(newUser) => {
    const response = await axios.post(`${BASE_URL}/users`, newUser);
    console.log(response.data);
  }

  const newUser =  {
    "id": "4",
    "name": "Elanur Kurt",
    "email": "elanurkurt@gmal.com"
  }

  const updateUser = async(id, updatedUser) => {
    const response = await axios.put(`${BASE_URL}/users/${id}`, updatedUser);
    console.log(response.data);
  }

  const updatedUser = {
    "id": "4",
    "name": "Elanur Kurt",
    "email": "abbbbowww@gmal.com"
  }

  const deleteUser = async(id) => {
    const response = await axios.delete(`${BASE_URL}/users/${id}`);
    console.log(response.data);
  }


  useEffect(() => {
    getAllUsers();
    // createUser(newUser);
    // updateUser(4, updatedUser);
    // deleteUser(1);    

  }, []);

  return (
    <>
    </>
  )
}

export default App
