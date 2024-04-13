/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";
import { tokenCheck } from "../HelperToken";

const AppContext = createContext();

function AgriProvider({ children }) {
    const [user, setUser] = useState();

    useEffect(() => {
        const userInfo = tokenCheck();
        setUser(userInfo);
    }, []);

    return (
        <AppContext.Provider
            value={{
                user,
                setUser
            }}
        >{children}</AppContext.Provider>
    )
}

export const CinemaState = () => {
    return useContext(AppContext);
}
export default AgriProvider;