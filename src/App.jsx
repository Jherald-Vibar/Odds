import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'

const App = () => {
  return (
    <main className='overflow-hidden px-3'>
      <Navbar/>
      <Hero/>
      <Services/>
    </main>
  )
}

export default App