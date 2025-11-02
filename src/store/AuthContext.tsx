import {createContext, ReactNode, useContext, useEffect, useState} from "react";
import {UserType} from "@/types/api/Auth";
interface Props{
    children: ReactNode;
}

interface AuthContextType {
    isLogin: boolean;
    Login: (jwt: string, user: UserType) => void;
}

const AuthContext = createContext<AuthContextType>({isLogin: false, Login: () => {}});

export const useUser = ()=> useContext(AuthContext);

export function AuthContextProvider({ children }: Props) {

    const [isLogin, setIsLogin] = useState<boolean>(false);

    useEffect(() => {
        if (window.localStorage.getItem("token")){
            setIsLogin(true);
        }
    }, []);

    const LoginHandler = (jwt: string, user: UserType) => {
        window.localStorage.setItem("token", jwt);
        window.localStorage.setItem("user", JSON.stringify(user));
        setIsLogin(true);
    }

    return (
        <AuthContext.Provider value={{isLogin: isLogin, Login: LoginHandler}}>
            {children}
        </AuthContext.Provider>
    )
}
