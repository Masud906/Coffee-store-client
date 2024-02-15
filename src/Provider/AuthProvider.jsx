import { createContext, useState } from "react";
import { applyActionCode, createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from "../firebase/firebase.config";

const auth = getAuth(app);


export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
const [user, setUser] = useState(null)
const [loading, setLoading] = useState(true);

const creatUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
}

const userInfo = {
    user,
    loading,
    creatUser
}

    return (
        <AuthContext.Provider value={userInfo}>
          {children}  
        </AuthContext.Provider>
    );
};

export default AuthProvider;