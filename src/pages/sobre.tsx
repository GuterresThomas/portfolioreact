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
                    <p className="text-zinc-100 text-3xl font-sans-Roboto font-semibold hover:font-bold">Thomas Mikael Guterres</p>
                    <p className="text-zinc-100 text-3xl font-sans-Roboto font-semibold hover:font-bold">24y</p>
                    <p className="text-zinc-100 text-3xl font-sans-Roboto font-semibold hover:font-bold">Web Developer/Front end</p>
                    <p className="text-zinc-100 text-3xl font-sans-Roboto font-semibold hover:font-bold">BR</p>
                </div>
                <div className="flex flex-col text-center">
                <p className="text-zinc-100 text-4xl font-sans-Roboto font-semibold hover:font-bold mt-5">Sobre mim:</p>
                <p className="text-zinc-100 text-2xl font-sans-Roboto font-semibold hover:font-bold m-2">Um aficionado por tecnologia e suas possibilidades, sempre focando em um design e uma usabilidade que sejam intuitivas e que chamem a atenção do usuário. </p>
                </div>
                <div className="flex flex-col mt-5 text-center">
                <p className="text-zinc-100 text-3xl font-sans-Roboto font-semibold hover:font-bold">Skills:</p>
                <div><Skills /></div>
                </div>
        </div>
    )
}

export default Sobre 