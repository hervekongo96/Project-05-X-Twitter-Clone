import { createContext, useState, useEffect } from "react";
import { getCurrentUser } from "./Api/apiRequest";

const UserContext = createContext();

const UserProvider = ({children}) => {
    const [currentuser, setCurrentuser] = useState({
        profil: '',
        name: '',
        subname: '',
        domaine: ''
    })

    useEffect(() => {
        const fectCurrentUser = async () => {
            try {
                const user = await getCurrentUser();
                setCurrentuser(user)
            } catch (error) {
                console.log(error);
            }
        }
        fectCurrentUser();
    },[])
    console.log("context:",currentuser);
    return(
        <UserContext.Provider value={currentuser}>
            {children}
        </UserContext.Provider>
    )
}

export {UserContext, UserProvider}

