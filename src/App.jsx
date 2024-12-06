import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link, Outlet} from "react-router-dom";


export default function App() {
    return (
    <>
        <nav>
        <h1>Bienvenue sur Netflux</h1>
            <Link to="/home">Accueil</Link>{" - "}
            <Link to="/about">À propos</Link>
        </nav>
        <Outlet/>
    </>
    );
}


