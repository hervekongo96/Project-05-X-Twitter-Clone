import { createContext, useState, useEffect } from "react";
import { getCurrentUser } from "./Api/apiRequest";

const UserContext = createContext();

const UserProvider = ({children}) => {
    const [currentuser, setCurrentuser] = useState({})

    useEffect(() => {
        const fectCurrentUser = async () => {
            try {
                const user = await getCurrentUser();
                const loggedUserId = user.loggedInUserId;
                const allUsers = user.users;
                const userConnect = allUsers.find(item => item.id === loggedUserId)
                setCurrentuser(userConnect)
            } catch (error) {
                console.log(error);
            }
        }
        fectCurrentUser();
    },[])
    return(
        <UserContext.Provider value={currentuser}>
            {children}
        </UserContext.Provider>
    )
}

export {UserContext, UserProvider}

