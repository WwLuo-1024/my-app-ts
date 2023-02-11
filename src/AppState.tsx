import React, {PropsWithChildren, useContext, useState} from "react";

interface AppStateValue{
    userName : string;
    shoppingCart: {items: {id: number, name: string}[]}
}

const defaultContextValue : AppStateValue = {
    userName: "wwluo",
    shoppingCart: { items: [] }
  };
  
  
  export const appContext = React.createContext(defaultContextValue)
  
  export const AppStateProvider: React.FC<PropsWithChildren<{}>> = (props) =>{
    const [state, setState] = useState(defaultContextValue)
    return (
    <appContext.Provider value={state}>
        {props.children}
    </appContext.Provider>
    );
  }