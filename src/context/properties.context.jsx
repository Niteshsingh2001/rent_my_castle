import React, { createContext, useEffect, useState } from 'react'
import { getDocuments } from '../utils/appwrite/appwrite.utils'

export const PropertiesContext = createContext({
    propertyList: null,
    setPropertyList: () => { }
})



export function PropertiesContextProvider({ children }) {

    const [propertyList, setPropertyList] = useState(null)
    const value = { propertyList, setPropertyList }

    // useEffect(() => {
    //     const getData = async () => {
    //         try {
    //             const properties = await getDocuments();
    //             setPropertyList(properties)
    //         }
    //         catch (error) {
    //             console.log(error);
    //         }
    //     }
    //     getData()
    // }, [])

    return (
        <PropertiesContext.Provider value={value}>{children}</PropertiesContext.Provider>
    )
}
