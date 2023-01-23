import React, { useEffect } from "react"

export const AuthContext = React.createContext({});

export const AuthProvider = (props) =>{


    
    const [usuario, setUsuario] =React.useState({
        username:'',
        token:''
    })

    const [tipo,setTipo] = React.useState("")

useEffect(()=>{

    const userStorage = localStorage.getItem('user');
    if(userStorage){
        setUser(JSON.parse(userStorage))
    } },[])

return(
    <AuthContext.Provider value = {{usuario,setUsuario,tipo,setTipo}}>
        {props.children}
    </AuthContext.Provider>
)

}


export const useAuth = () => React.useContext(AuthContext)