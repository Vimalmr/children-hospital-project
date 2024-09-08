import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('/api/profile')
            .then(({ data }) => {
                setUser(data);
                setLoading(false); // Data has been loaded
            })
            .catch(err => {
                setError(err);
                setLoading(false); // Data loading failed
            });
    }, []);

    return (
        <UserContext.Provider value={{ user, setUser, loading, error }}>
            {children}
        </UserContext.Provider>
    );
}
