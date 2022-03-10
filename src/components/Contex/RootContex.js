import React from "react";

export const RootContex = React.createContext();

 const Contex = (props)=>{
     const state = {
         name :"Ubaid",
     }
     return (
        <RootContex.Provider value={state}>
            {props.children}
        </RootContex.Provider>
     )
 }

 export default Contex;