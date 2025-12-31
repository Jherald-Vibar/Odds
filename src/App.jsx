import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './components/Hero'

const App = () => {
  return (
    <main className='overflow-hidden px-3'>
      <Navbar/>
      <Hero/>
    </main>
  )
}

export default App