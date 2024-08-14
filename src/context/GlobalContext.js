import { createContext,useState } from "react";

const GlobalContext = createContext()

const GlobalContextProvider = (props) => {
    const [token, setToken] = useState(localStorage.getItem('token'))

    return <GlobalContext.Provider value={{  token, setToken }}>
        {props.children}
    </GlobalContext.Provider>
}

export { GlobalContext, GlobalContextProvider }