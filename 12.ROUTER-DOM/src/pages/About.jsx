import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function About() {
  return (
    <div>
      <h1>About</h1>
      <div>
        <Link to='employee'>Employee About</Link>
        <Link to='company' >Company About</Link>
      </div>



        <Outlet />
    </div>
  )
}

export default About
