import axios from "axios"
import { useState } from "react"
import { Link, useNavigate} from "react-router-dom"
import styled from "styled-components"
import Input from "./Input"
import Button from "./Button"
import BigLogo from "./BigLogo"



export default function Login (props) {

    // const [email, setEmail]= useState("")

    // const [password, setPassword] = useState("")
    
    const [form, setForm] = useState({ email: "", password: "" }); 
    const navigate = useNavigate()
    const {setToken, setName} = props
 

    function handleForm(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
        } 

    function login (e) {

        e.preventDefault()
        const url = ("http://localhost:5000/sign-in")

        // const body = {email, password}

        const promise = axios.post(url, form)
        
        promise.then((res) => { 
        setToken(res.data.token) 
        setName(res.data.name)
        navigate("/entrada")
    });

    
        promise.catch((err) => alert(err.response.data.message))

        
    }

    return (

       
        <Container>
            <BigLogo/>
            <form onSubmit={login}>
                <Input 
                type="email"
                name="email"
                placeholder="e-mail"
                value={form.email}
                onChange={handleForm}
                required/>


                <Input 
                type="password"
                name="password"
                placeholder="senha"
                value={form.password}
                onChange={handleForm}
                required/>

                <Button type="submit">Entrar</Button>
    
            </form>

                <StyledLink to="/sign-up">Primeira vez? Cadastre-se2</StyledLink>

        </Container>


    )

}


const Container = styled.div`
  min-height: 667px;
  width: 375px;
  padding: 31px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #8c11be;

`

const StyledLink = styled(Link)`
  
  color: #FFFFFF;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: center;
`  