import { createContext, useReducer} from "react";
import UserReducer from "./UserReducer";

const UserContext = createContext();

export const UserProvider =({children})=>{
    const initialstate = {
        users:	[],
        user : null,
    }
    const [state , dispatch] = useReducer( UserReducer  , initialstate)
    

    return(
        <UserContext.Provider value={{...state , dispatch}}>
            {children}
        </UserContext.Provider>
    )
}


export default UserContext;