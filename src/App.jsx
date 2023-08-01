import { useState } from 'react'
import Menu from './components/Menu'
import Inicio from './components/Inicio'
import SobreMi from './components/Sobremi'
import Proyectos from './components/Proyectos'
import Contacto from './components/Contactos'
import Footer from './components/Footer'

function App() {

  return (
    <>
        <div>
          <Menu />
          <Inicio />
          <SobreMi />
          <Proyectos />
          <Contacto />
          <Footer />
        </div>
    </>
  )
}

export default App
