import GlobalStyle from "./GlobalStyle"
import { useState } from "react"
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Login from "./Login"
import SignUp from "./SignUp"
import Home from "./Home"
import Transacoes from "./Transacoes"





export default function App() {

  const [token, setToken] = useState("")
  const [form, setForm] = useState({ email: "", password: "" }); 
  const [name, setName] = useState("")




  return (
    <BrowserRouter>
    <GlobalStyle/>

    <Routes>

      <Route path="/" element={<Login form={form} setForm={setForm} setName={setName} setToken={setToken}/>}/>
      <Route path="sign-up" element={<SignUp/>}/>
      <Route path="/entrada" element={<Home/>}/>
      <Route path="/nova-entrada" element={<Transacoes/>}/>
      <Route path="/nova-saida" element={<Transacoes/>}/>
      

    </Routes>
    </BrowserRouter>
  )
}

