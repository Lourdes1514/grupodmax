import React from 'react';
import './index.css'
import Logo from "./logoIcono.png";
import LogoTitle from "./logoTitulo.png";
import Background from "./homeImage.png";

const Home = () =>{
    return(
        <div className="Home">
            <div className="MenuPrincipal">
                <div className="logo">
                    <img src={Logo} alt="logo principal"/>
                </div>
                <div className="title">
                    <img src={LogoTitle} alt="logo titulo"/>
                </div>
                <div className="buttons">
                    <div className="log-in">
                        <button>Iniciar Sesión</button>
                    </div>
                    <div className="sign-in">
                        <button>Registrarse</button>
                    </div>
                </div>
            </div>
            <div className="Background">
                <img src={Background} alt=""/>
            </div>
        </div>
    )
} 

export default Home