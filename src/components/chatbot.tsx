import React from "react";
import '../app/globals.css'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";




const ChatBot = () => {
    return (
        <div className="flex justify-center border-2 border-zinc-800 md:w-[600px] w-[420px]">
                <div>
                    <Avatar className="mt-6 hover:scale-150">
                        <AvatarFallback>AI</AvatarFallback>
                        <AvatarImage src="data:image/png;base64,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"/>
                    </Avatar>
                </div>
                <Card className="border-none w-[500px] space-y-4 space-x-4 h-[480px]">
                    <CardHeader>
                        <CardTitle className="text-zinc-100 text-4xl font-sans-Roboto font-semibold">ChatBot</CardTitle>
                        <CardDescription className="text-zinc-100 text-2xl font-sans-Roboto font-semibold">ChatBot usando api da openai</CardDescription>
                    </CardHeader>
                    <ScrollArea className="border-2 border-zinc-800">
                        <CardContent className="text-zinc-100 text-2xl font-sans-Roboto font-semibold h-[200px]">
                            <p>Um chatbot criado usando a SDK da Vercel, API da OpenAI, TypeScript, Tailwind, React e Next é um sistema de inteligência artificial que responde automaticamente às perguntas dos usuários em uma interface de chat. Ele é desenvolvido usando TypeScript, uma linguagem de programação, e utiliza o React e o Next como estruturas de desenvolvimento front-end, além do Tailwind para estilização. A SDK da Vercel e a API da OpenAI são usadas para integrar a inteligência artificial do chatbot, permitindo que ele compreenda e responda às perguntas dos usuários.</p>
                        </CardContent>
                    </ScrollArea>
                    <CardFooter>
                        <Link href="https://carlogpt.vercel.app/"><Button className="border-2 p-8 rounded-full bg-zinc-600 border-zinc-700 text-zinc-100 text-2xl">Link</Button></Link>
                    </CardFooter>
                </Card>
            </div>
    )
}

export default ChatBot