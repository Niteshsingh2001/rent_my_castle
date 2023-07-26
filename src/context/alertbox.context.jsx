import React, { createContext, useState } from 'react'
import { useEffect } from 'react'

export const ALERT_TYPE_CLASS = {
    default: "border-l-primary",
    warning: "border-l-yellow-400",
    error: "border-l-red-600",
}

export const AlertBoxContext = createContext({
    message: null,
    type: null,
    setMessage: () => { },
    setType: () => { }
})

export function AlertBoxContextProvider({ children }) {

    const [message, setMessage] = useState(null)
    const [type, setType] = useState(ALERT_TYPE_CLASS.default)
    const value = { message, setMessage, type, setType }

    return (
        <AlertBoxContext.Provider value={value}>{children}</AlertBoxContext.Provider>
    )
}
