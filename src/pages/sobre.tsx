import NavMenu from "@/components/navMenu";
import Skills from "@/components/skills";
import React from "react";
import '../app/globals.css'
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";
import { FaHome, FaReact } from 'react-icons/fa';



const Sobre = () => {
    return (
        <div className='bg-zinc-900 h-full md:h-screen'>
            <NavMenu />
                <div className="flex justify-center mt-11">
                    <Avatar className="h-[200px] w-[200px] hover:scale-150">
                        <AvatarFallback>TG</AvatarFallback>
                        <AvatarImage src="https://avatars.githubusercontent.com/u/131294494?v=4"/>
                    </Avatar>
                </div>
                <div className="flex flex-col mt-5 text-center">
                    <p className="text-zinc-100 text-3xl font-sans-Roboto font-semibold">Thomas Mikael Guterres</p>
                    <p className="text-zinc-100 text-3xl font-sans-Roboto font-semibold">24y</p>
                    <p className="text-zinc-100 text-3xl font-sans-Roboto font-semibold">Web Developer/Front end</p>
                    <p className="text-zinc-100 text-3xl font-sans-Roboto font-semibold">BR</p>
                </div>
                <div className="flex flex-col text-center">
                <p className="text-zinc-100 text-4xl font-sans-Roboto font-semibold mt-5">Sobre mim:</p>
                <p className="text-zinc-100 text-2xl font-sans-Roboto font-semibold  m-2">Se você está procurando um desenvolvedor frontend apaixonado, dedicado e criativo, estou aqui para ajudar. Vamos colaborar e transformar sua visão em realidade.
                estou sempre em busca de aprendizado contínuo e acompanho de perto as tendências e tecnologias mais recentes no mundo do desenvolvimento frontend. Estou pronto para enfrentar novos desafios e trabalhar em equipe para levar suas ideias ao próximo nível.
Entre em contato comigo para discutirmos como posso contribuir para o seu projeto.

Vamos construir algo incrível juntos!</p>
                </div>
                <div className="flex flex-col mt-5 text-center">
                <p className="text-zinc-100 text-3xl font-sans-Roboto font-semibold">Skills:</p>
                <div><Skills /></div>
                </div>
            <div className='bottom-0'>
                <img src='/wave-haikei (3).svg' />
            </div>
        </div>
    )
}

export default Sobre 