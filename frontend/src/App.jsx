import { useState } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Signup from './pages/signup.jsx'
import Signin from './pages/signin.jsx'
import Home from './pages/Home'

function App() {

  return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Signup/>}></Route>
            <Route path='/signin' element={<Signin/>}></Route>
            <Route path='/Home' element={<Home />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
  )
}

export default App
