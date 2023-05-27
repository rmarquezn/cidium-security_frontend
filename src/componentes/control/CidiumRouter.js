import { WelcomeScreen } from "../inicio/WelcomeScreen"
import { LoginScreen } from "../login/LoginScreen"
import { SigninScreen } from "../login/SigninScreen"
import { PostScreen } from "../posts/PostScreen"
import { PostVisualization } from "../posts/PostVisualization"
import { Navbar } from "./Navbar"
import { Route, Routes, Navigate } from "react-router-dom"



export const CidiumRouter = () => {

    return (

        <>
        <Navbar/>

        <div>
            <Routes>
                <Route exact path="/inicio" element = {<WelcomeScreen/>}/>
                <Route exact path="/login" element = {<LoginScreen />}/>
                <Route exact path="/posts" element = {<PostScreen/>}/>
                <Route exact path="/sign" element = {<SigninScreen/>}/>
                <Route exact path="/edit" element = {<PostVisualization/>}/>
                

                <Route path ="*" element = {<Navigate to="/inicio" replace />}/>
            </Routes>
        </div>

        </>
    )
}
