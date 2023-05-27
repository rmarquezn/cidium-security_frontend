import React, { useState } from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom"
import { LoginScreen } from '../login/LoginScreen';
import { CidiumRouter } from './CidiumRouter';
import { SigninScreen } from '../login/SigninScreen';
import { UserContext } from '../context/UserContext';

export const MainCidiumRouter = () => {
    const [user, setUser] = useState({});

    return (
        <Router>
        <UserContext.Provider value={
            {
                user,
                setUser
            }
        }>
            <div>
                <Routes>
                    <Route exact path="/login" element={<LoginScreen />} />
                    <Route exact path="/sign" element={<SigninScreen/>}/>
                    <Route
                        path="*"
                        element={<CidiumRouter />}
                     />
                </Routes>
            </div>
            </UserContext.Provider>

        </Router>
    )

}