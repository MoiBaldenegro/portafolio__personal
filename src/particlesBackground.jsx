import React,  { useCallback } from "react";
import Particles from "react-tsparticles";
import  { loadFull }   from "tsparticles";
import particlesConfig from "./config/particles-config"
import style from "./components/particles.module.css"


export default function ParticlesBackground(){ 
    const particlesInit = useCallback(function(engine){
        loadFull(engine)

            }, []);

    return(
        <Particles
        className={style.tsparticles}
        options={particlesConfig}
        init={particlesInit}
        />
    )
};