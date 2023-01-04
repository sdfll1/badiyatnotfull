import { useState, createContext } from "react"
const Context = createContext()
function Provider({children}) {
    const [data, setData] = useState([])
  return (
    <Context.Provider value={{data, setData}}>
        {children}
    </Context.Provider>
  )
}

export {Context, Provider}