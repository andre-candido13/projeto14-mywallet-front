import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useNavigate} from "react-router-dom"
import styled from "styled-components"
import { useAuth } from "./auth"
import api from "./ApiTransaction"
import  Transacoes  from "./Transacoes"


export default function Home () {


    const {usuario, setTipo}= useAuth()
    const [transacoes, setTransacoes] = useState([])
    
    const navigate = useNavigate()


    useEffect (listaTransacao, [])

    
    function listaTransacao () {

        api.getTransactions(usuario.token)
        .then(res=>{    
            setTransacoes(res.data)
        })
        .catch(err =>{console.log(err.message)})
    }

 function deposito () {
    setTipo("deposito")
    navigate("/nova-entrada")
 }

 function debito () {
    setTipo("debito")
    navigate("/nova-saida")

 }

 return(
    <Container>
    <ul>
    <li>
    Olá, {usuario.username}
    <ion-icon name="log-out-outline"></ion-icon>
    </li>
    </ul>


<ContainerTransacoes>

{transacoes.length <=0 

?<p>Não há registros de entrada ou saída</p>

:transacoes.map(trans=>( <Transacoes type={trans.tipo} valor={trans.valor} descricao={trans.descricao} date={trans.date}/> )) 
}

</ContainerTransacoes>

<StyleSessao>
   
    <Button onClick={deposito}>
   
    <ion-icon name="add-circle-outline"></ion-icon>
    <p>Nova entrada</p>
   
    </Button>
    
    <Button onClick={debito}>
    <Link to="/nova-saida">
    <ion-icon name="remove-circle-outline"></ion-icon>
    <p>Nova saída</p>
    </Link>
    </Button>

</StyleSessao>
</Container>
)}


const Container = styled.main`
display:flex;
flex-direction:column;
align-items:center;
li{ display:flex;
justify-content:flex-start
}
`
const ContainerTransacoes = styled.section`
width: 32.6rem;
height:44.6rem;
background-color:var(--white);
margin: 2.2rem 0 1.3rem 0;
p{
    text-align:center;
}
`
const StyleSessao =styled.section`
display:flex;
justify-content:center;
`

const Button = styled.button`
    width: 15.5rem;
    height:14.4rem;
    background-color:var(--light-purple);
    color:var(--white);
    :nth-child(1){
    margin-right:1.5rem;
}
ion-icon{
    width: 2.5rem;
    height:2.5rem;
    padding: 0 0.8rem 3.1rem 0;
    margin: -2.5rem 0 0 -10.8rem;
    color:var(--white);
}
    p{  
        width:6rem;
        height:4rem;
        padding-left:0.9rem;
        font-family: 'Raleway';
        font-size: 1.7rem;
        font-weight: 700;
        line-height: 2rem;
        letter-spacing: 0em;
        text-align: left;
        color:var(--white);
    }
    a{
        text-decoration:none;
    }
    `

