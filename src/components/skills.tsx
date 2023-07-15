import React from "react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";
import { FaCss3, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si"
import { BiLogoJavascript } from "react-icons/bi"

const Skills = () => {
    return (
        <div className="flex justify-center space-x-3 mt-5">
            <HoverCard>
                <HoverCardTrigger><span><FaReact size={100} color="#fff"/></span> </HoverCardTrigger>
                    <HoverCardContent className="border-hidden w-auto">
                        <p className="text-2xl text-zinc-100 bg-zinc-900">O React é uma biblioteca JavaScript de código aberto que permite a criação de interfaces de usuário de forma eficiente e reativa</p>
                    </HoverCardContent>
            </HoverCard>
            <HoverCard>
                <HoverCardTrigger><span><SiTailwindcss size={100} color="#fff"/></span> </HoverCardTrigger>
                    <HoverCardContent className="border-hidden w-auto">
                        <p className="text-2xl text-zinc-100 bg-zinc-900">O Tailwind é uma biblioteca de classes utilitárias CSS que facilita a criação e estilização de interfaces de usuário de forma rápida e eficiente. </p>
                    </HoverCardContent>
            </HoverCard>
            <HoverCard>
                <HoverCardTrigger><span><BiLogoJavascript size={100} color="#fff"/></span> </HoverCardTrigger>
                    <HoverCardContent className="border-hidden w-auto">
                        <p className="text-2xl text-zinc-100 bg-zinc-900">JavaScript é uma linguagem de programação popular e amplamente utilizada para desenvolvimento web. Que adiciona dinamismo e funcionalidades.</p>
                    </HoverCardContent>
            </HoverCard>
            <HoverCard>
                <HoverCardTrigger><span><FaCss3 size={100} color="#fff"/></span> </HoverCardTrigger>
                    <HoverCardContent className="border-hidden w-auto">
                        <p className="text-2xl text-zinc-100 bg-zinc-900">O React é uma biblioteca JavaScript de código aberto que permite a criação de interfaces de usuário de forma eficiente e reativa</p>
                    </HoverCardContent>
            </HoverCard>
            <HoverCard>
                <HoverCardTrigger><span><FaHtml5 size={100} color="#fff"/></span> </HoverCardTrigger>
                    <HoverCardContent className="border-hidden w-auto">
                        <p className="text-2xl text-zinc-100 bg-zinc-900">O React é uma biblioteca JavaScript de código aberto que permite a criação de interfaces de usuário de forma eficiente e reativa</p>
                    </HoverCardContent>
            </HoverCard>
            <HoverCard>
                <HoverCardTrigger><span><FaNodeJs size={100} color="#fff"/></span> </HoverCardTrigger>
                    <HoverCardContent className="border-hidden w-auto">
                        <p className="text-2xl text-zinc-100 bg-zinc-900">O React é uma biblioteca JavaScript de código aberto que permite a criação de interfaces de usuário de forma eficiente e reativa</p>
                    </HoverCardContent>
            </HoverCard>
        </div>
    )
}

export default Skills