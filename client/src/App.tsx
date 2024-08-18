import React, { useEffect, useState } from "react";
import {Route, Routes} from "react-router-dom";
import { Main, Login } from "./containers/index";
import { getAuth, User } from "firebase/auth";
import { app } from "./config/firebase.config";
import { validateUserJwt } from "./api";
import { useDispatch } from "react-redux";
import { setUserDetails } from "./context/actions/userActions";
import { UserActionTypes } from "./context/reducers/userTypes";
import { Dispatch } from "redux";
import { motion } from "framer-motion";
import { fadeInOut } from "./Animations";
import { MainLoader } from "./components";
import Alert from "./components/Alert";



export const App: React.FC = () => {

    const firebaseAuth = getAuth(app);
    const [isLoading, setIsLoading] = useState(false)

    const dispatch: Dispatch<UserActionTypes> = useDispatch();

    
    useEffect(() => {
        setIsLoading(true);
        firebaseAuth.onAuthStateChanged(async (cred) => {
            try {
                if (cred) {
                    const token = await cred.getIdToken();
                    console.log('Obtained token:', token);
                    if (typeof token === 'string' && token.trim() !== '') {
                        const data = await validateUserJwt(token);
                        console.log('Validation data:', data.decodedValue);
                        dispatch(setUserDetails(data.decodedValue))
                    } else {
                        console.error('Invalid token:', token);
                    }
                } else {
                    console.error('No credentials found.');
                }
            } catch (error) {
                console.error('Error during authentication:', error);
            } finally {
                setIsLoading(false);
            }
        });
    }, [firebaseAuth, dispatch]);
    
    
    return (
        <div className="w-screen min-h-screen h-auto flex flex-col items-center justify-center">
            {isLoading && (
                <motion.div {...fadeInOut} className="fixed z-50 inset-0 bg-lightOverlay backdrop-blur-md flex items-center justify-center w-full">
                    <MainLoader />
                </motion.div>
            )}
            <Routes>
                <Route path="/*" element={<Main />}/>
                <Route path="/Login" element={<Login />}/>
            </Routes>

            <Alert type={"SUCCESSS"} message={"This is an alert"}/>
        </div>
    );
};



