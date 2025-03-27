import { createContext, useState } from "react";

const Dashboard_context_api = createContext()

const Context_provider_api = ({ children }) => {
    const [orders, set_order] = useState([    


        
    ])
    return (
        <Dashboard_context_api.Provider value={{ orders, set_order }}>
            {children}
        </Dashboard_context_api.Provider>
    )
}


