import NavMenu from "@/components/navMenu";
import React from "react";
import '../app/globals.css'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import Projects from "@/components/projects";



const Projetos = () => {
    return (
        <div className='bg-zinc-900 h-full md:h-screen'>
            <NavMenu />
            <div className="flex justify-center mb-5">
                <h1 className="text-zinc-100 text-4xl font-sans-Roboto font-semibold mt-5">Confira abaixo alguns de meus projetos:</h1>
            </div>
            <Projects />
        </div>
        
    )
}

export default Projetos