import React from "react";
import '../app/globals.css'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";




const LandingPage = () => {
    return (
        <div className="flex justify-center border-2 border-zinc-800 md:w-[600px] w-[420px]">
                <div>
                    <Avatar className="mt-6 hover:scale-150">
                        <AvatarFallback>LP</AvatarFallback>
                        <AvatarImage src="data:image/png;base64,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"/>
                    </Avatar>
                </div>
                <Card className="border-none w-[500px] space-y-4 space-x-4 h-[480px]">
                    <CardHeader>
                        <CardTitle className="text-zinc-100 text-4xl font-sans-Roboto font-semibold">Landing Page</CardTitle>
                        <CardDescription className="text-zinc-100 text-2xl font-sans-Roboto font-semibold">Landing Page para curso de maquiagem</CardDescription>
                    </CardHeader>
                    <ScrollArea className="border-2 border-zinc-800">
                        <CardContent className="text-zinc-100 text-2xl font-sans-Roboto font-semibold h-[200px]">
                            <p>é um site criado com JavaScript, HTML e CSS que oferece uma experiência cativante aos visitantes interessados ​​em produtos e dicas de maquiagem. Com um design visualmente atraente e responsivo, a página apresenta uma combinação harmoniosa de cores, imagens sedutoras e fontes elegantes. Através do JavaScript, os elementos interativos são adicionados para tornar a experiência do usuário mais dinâmica, como slides de imagens, carrosséis e efeitos de transição suaves. O HTML é usado para estruturar o conteúdo, proporcionando uma navegação intuitiva e organizada. O CSS é aplicado para estilizar a página, tornando-a esteticamente agradável e profissional. Em resumo, essa landing page de maquiagem usando JavaScript, HTML e CSS é um convite irresistível para os amantes de maquiagem, oferecendo informações relevantes e envolventes de uma maneira visualmente atraente.</p>
                        </CardContent>
                    </ScrollArea>
                    <CardFooter>
                        <Link href="https://tainagrendene.com.br/AutoMakeByTaina/"><Button className="border-2 p-8 rounded-full bg-zinc-600 border-zinc-700 text-zinc-100 text-2xl">Link</Button></Link>
                    </CardFooter>
                </Card>
            </div>
    )
}

export default LandingPage