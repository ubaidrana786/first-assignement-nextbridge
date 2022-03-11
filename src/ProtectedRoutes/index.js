import React from "react";
import {Route,Redirect} from "react-router-dom";


const ProtecedRoutes = ({children, ...restprops})=>{
const token = window.localStorage.getItem("Token")
    return (
        <Route {...restprops} render={()=>{
            if(token && token !== null){
                return children;
            }else{
               return <Redirect to="/login"/>
            }
        }} />

  
    )

}

export default ProtecedRoutes;