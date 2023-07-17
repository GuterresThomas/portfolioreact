import React from "react";
import '../app/globals.css'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";




const Atacado = () => {
    return (
        <div className="flex justify-center border-2 border-zinc-800 w-[600px]">
                <div>
                    <Avatar className="mt-6 hover:scale-150">
                        <AvatarFallback>OT</AvatarFallback>
                        <AvatarImage src="https://assets.bitdegree.org/online-learning-platforms/storage/media/2018/12/node-js-interview-questions-logo-2-266x300.png"/>
                    </Avatar>
                </div>
                <Card className="border-none w-[500px] space-y-4 space-x-4 h-[480px]">
                    <CardHeader>
                        <CardTitle className="text-zinc-100 text-4xl font-sans-Roboto font-semibold">Atacadão do Óculos</CardTitle>
                        <CardDescription className="text-zinc-100 text-2xl font-sans-Roboto font-semibold">Site para Ótica</CardDescription>
                    </CardHeader>
                    <ScrollArea className="border-2 border-zinc-800">
                        <CardContent className="text-zinc-100 text-2xl font-sans-Roboto font-semibold h-[200px]">
                            <p>Desenvolvido com Node.js, Handlebars e Nodemailer, é uma plataforma completa que oferece uma experiência informativa e interativa. Com um design elegante e responsivo, o site apresenta informações detalhadas sobre os serviços da ótica, os tipos de óculos disponíveis e os profissionais capacitados. O Node.js permite um desempenho rápido e eficiente, garantindo uma navegação suave. Utilizando o Handlebars, as páginas são criadas de forma dinâmica, facilitando a personalização e a exibição de conteúdo relevante. Além disso, o Nodemailer integra-se perfeitamente, permitindo que os usuários entrem em contato com a ótica por meio de um formulário de contato conveniente. Em suma, o site oferece uma experiência informativa e envolvente aos visitantes, tornando-se um recurso valioso para quem busca serviços óticos de qualidade.</p>
                        </CardContent>
                    </ScrollArea>
                    <CardFooter>
                        <Link href="https://otica.onrender.com/"><Button className="border-2 p-8 rounded-full bg-zinc-600 border-zinc-700 text-zinc-100 text-2xl">Link</Button></Link>
                    </CardFooter>
                </Card>
            </div>
    )
}

export default Atacado