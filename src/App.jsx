import React from 'react'
import {BrowserRouter, Routes,Route} from "react-router-dom";
import Login from './pages/Login';
import Register from './pages/Register';
import VerifyEmail from './pages/VerifyEmail';
import Form from './pages/Form';

const App = () => {
  return (
<BrowserRouter>
<Routes>
  <Route path="/" element={<Login/>} />
  <Route path="/Register" element={<Register/>} />
  <Route path="/VerifyEmail" element={<VerifyEmail/>} />
  <Route path="/Form" element={<Form/>} />
</Routes>
</BrowserRouter>
  )
}

export default App;
