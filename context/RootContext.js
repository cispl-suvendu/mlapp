"use client" 

const { useContext, createContext, useState } = require("react");

export const RootContext = createContext()

export const RootContextProvider = ({ children }) => {
    const [searchKey, setSearchKey] = useState("")
    const [serviceSerachKey, setServiceSearchKey] = useState("")
    const [serviceByVendorKey, setServiceByVendorKey] = useState("")
    const [serviceByCostKey, setServiceByCostKey] = useState("")
    return (
        <RootContext.Provider value={{ searchKey, setSearchKey, serviceSerachKey, setServiceSearchKey, serviceByVendorKey, setServiceByVendorKey, serviceByCostKey, setServiceByCostKey }}>
            {children}
        </RootContext.Provider>
    )
}

export const useRootContext = () => {
    return useContext(RootContext)
}