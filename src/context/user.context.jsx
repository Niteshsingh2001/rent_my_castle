import { useState, createContext } from "react";

export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => { }
});


export function UserContextProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null);
    const value = { currentUser, setCurrentUser };

    return (
        <UserContext.Provider value={value}>{children}</UserContext.Provider>
    );
}