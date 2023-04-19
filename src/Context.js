import {createContext, useState } from "react";

export const myCont = createContext (null);

const Context = ({children}) => {

  const [state, setState] = useState("15th");

 return (
  <myCont.Provider value={{state, setState}}>
    {children}
  </myCont.Provider>
 )
}

export default Context;