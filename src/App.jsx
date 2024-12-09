import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link, Outlet} from "react-router-dom";
import { useEffect } from 'react';
import imageData from './images.json';


export default function App() {
    
    useEffect(() => {
        if (!localStorage.getItem('images')) {
            localStorage.setItem('images', JSON.stringify(imageData));
        }
    }, []);
    return (
    <>
        <nav>
        <h1 className='home'>Bienvenue sur Netflux</h1>
            <Link to="/home" className='accueil'>Accueil</Link>{" - "}
            <Link to="/about" className='accueil'>À propos</Link>
        </nav>
        <Outlet/>
    </>
    );
}


