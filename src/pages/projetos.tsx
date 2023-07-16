import NavMenu from "@/components/navMenu";
import React from "react";
import '../app/globals.css'


const Projetos = () => {
    return (
        <div className='bg-zinc-900 h-full md:h-screen'>
            <NavMenu />
            <div className="flex justify-center">
                <h1 className="text-zinc-100 text-4xl font-sans-Roboto font-semibold mt-5">Confira abaixo alguns de meus projetos:</h1>
            </div>
            <div className='bottom-0'>
                <img src='/wave-haikei (3).svg' />
            </div>
        </div>
        
    )
}

export default Projetos