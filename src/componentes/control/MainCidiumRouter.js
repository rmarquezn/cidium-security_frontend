import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom"
import { LoginScreen } from '../login/LoginScreen';
import { CidiumRouter } from './CidiumRouter';
import { SigninScreen } from '../login/SigninScreen';

export const MainCidiumRouter = () => {
    return (
        <Router>
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
        </Router>
    )

}