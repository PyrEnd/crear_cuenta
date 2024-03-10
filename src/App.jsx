import React, { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Registro from './componentes/Registro'

const App = ()=> {
  const [alert, setAlert] = useState({msg:"", color: ""})

  return (
    <>
      <Registro alert={alert} setAlert={setAlert} />
    </>
  )
}

export default App
