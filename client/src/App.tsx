import React from "react";
import {Route, Routes} from "react-router-dom";
import { Main, Login } from "./containers/index";


export const App: React.FC = () => {
    return (
        <div className="w-screen min-h-screen h-auto flex flex-col items-center justify-center">
            <Routes>
                <Route path="/*" element={<Main />}/>
                <Route path="/Login" element={<Login />}/>
            </Routes>
        </div>
    );
};



