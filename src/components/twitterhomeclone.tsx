import React from "react";
import '../app/globals.css'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";




const TwitterHome = () => {
    return (
        <div className="flex justify-center border-2 border-zinc-800 md:w-[600px] w-[420px]">
                <div>
                    <Avatar className="mt-6 hover:scale-150">
                        <AvatarFallback>TH</AvatarFallback>
                        <AvatarImage src="data:image/jpeg;base64,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"/>
                    </Avatar>
                </div>
                <Card className="border-none w-[500px] space-y-4 space-x-4 h-[480px]">
                    <CardHeader>
                        <CardTitle className="text-zinc-100 text-4xl font-sans-Roboto font-semibold">Sign up Page twitter</CardTitle>
                        <CardDescription className="text-zinc-100 text-2xl font-sans-Roboto font-semibold">Estudo de tailwindcss usando a sign up page</CardDescription>
                    </CardHeader>
                    <ScrollArea className="border-2 border-zinc-800">
                        <CardContent className="text-zinc-100 text-2xl font-sans-Roboto font-semibold h-[200px]">
                            <p>A página criada usando React, Next.js, TypeScript e Tailwind CSS tem como objetivo realizar uma cópia fiel da estética da página original para fins de estudo dessas tecnologias. Com o uso do React, é possível desenvolver componentes reutilizáveis e criar uma interface interativa e responsiva. O Next.js oferece recursos avançados de renderização do lado do servidor, otimização de desempenho e roteamento facilitado. O TypeScript adiciona tipagem estática ao código, melhorando a segurança e a legibilidade. O Tailwind CSS permite estilizar a página de forma eficiente, utilizando classes predefinidas que agilizam o processo de design. Em resumo, essa página replica com precisão a estética da página original, aproveitando as vantagens do React, Next.js, TypeScript e Tailwind CSS, fornecendo uma oportunidade valiosa para o estudo e a prática dessas tecnologias modernas de desenvolvimento web.</p>
                        </CardContent>
                    </ScrollArea>
                    <CardFooter>
                        <Link href="https://twitterclone-epaoszleo-guterresthomas.vercel.app"><Button className="border-2 p-8 rounded-full bg-zinc-600 border-zinc-700 text-zinc-100 text-2xl">Link</Button></Link>
                    </CardFooter>
                </Card>
            </div>
    )
}

export default TwitterHome