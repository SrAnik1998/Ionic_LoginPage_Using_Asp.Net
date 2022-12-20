import React, { createContext, useContext, useState, useEffect } from 'react'


export const stateContext = createContext();

const getFreshContext = () => {
    if (localStorage.getItem('context2') === null)
        localStorage.setItem('context2', JSON.stringify({
            participantId: 0,
            timeTaken: 0,
            selectedOptions: []
        }))
    return JSON.parse(localStorage.getItem('context2'))
}

export default function useStateContext() {
    const [ context2, setContext ] = useState(stateContext)
    return {
        context2,
        setContext: obj => { 
            setContext({ ...context2, ...obj }) },
        resetContext: ()=>{
            localStorage.removeItem('context2')
            setContext(getFreshContext())
        }
    };
}

export function useContextProvider({ children }) {
    const [context2, setContext] = useState(getFreshContext())

    useEffect(() => {
        localStorage.setItem('context2', JSON.stringify(context2))
    }, [context2])

    return (
        <stateContext.Provider value={{ context2, setContext }}>
            {children}
        </stateContext.Provider>
    )
}