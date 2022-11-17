import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import Header from "../components/Header"
import Login from "../pages/Login"
import Sign from "../pages/sign-up"


function Rotas() {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/sign-up" element={<Sign/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;
