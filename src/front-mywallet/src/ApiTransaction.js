import axios from "axios";

const BASE_URL = "http://localhost:5000/entrada";


function config(token){
    return{
        headers:{
            Authorization: `Bearer ${token}`
        }
    }
}

function getTransactions(token){
const promisse = axios.get(BASE_URL,config(token))
return promisse
}

const api = {getTransactions}

export default api

