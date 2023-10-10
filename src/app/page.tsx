import React from 'react'
import { FaFlag } from 'react-icons/fa'
import { GiSpaceSuit } from 'react-icons/gi'
import sobre from '@/pages/sobre'
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";
import Link from 'next/Link'


export default function Home() {
  return (
    <div className='bg-zinc-900 m-5 h-full md:h-screen'>
      <div className='flex justify-center mt-5'>
        <h1 className='sm:text-2xl font-sans-Roboto font-extrabold text-zinc-100 text-2xl'>Bem vindo(a) ao meu Portfolio 👋</h1>
      </div>
      <div className='flex m-5'>
        <h1 className='sm:text-xl font-sans-Roboto font-bold text-zinc-100 text-2xl'>Quem sou eu?</h1>
      </div>
      <div className='flex justify-center m-5 mb-2'>
        <h1 className='sm:text-lg font-sans-Roboto font-medium text-zinc-100 text-xl'>Olá! Me chamo Thomas Mikael Guterres e Sou um desenvolvedor full-stack apaixonado pela criação de soluções robustas e eficientes. Com um amplo conjunto de habilidades que abrange TypeScript, Rust, React e Rails, tenho a capacidade de enfrentar desafios complexos em qualquer parte do stack.</h1>
      </div>
      <div className="flex m-5">
        <h1 className='sm:text-xl font-sans-Roboto font-bold text-zinc-100 text-2xl'>Alguns Projetos</h1>
      </div>
      <div>
        <li className="text-white hover:text-blue-300 hover:underline_cursor:pointer"><Link href="https://atacadaodosoculos.com/">Atacadão dos Óculos</Link></li>
        <li className="text-white hover:text-blue-300 hover:underline_cursor:pointer"><Link href="https://carlogpt.vercel.app/">ChatBot</Link></li>
        <li className="text-white hover:text-blue-300 hover:underline_cursor:pointer"> <Link href="https://twitterclone-epaoszleo-guterresthomas.vercel.app"> Twitter Register page clone</Link></li>
      </div>
      <div className="flex flex-col m-5">
        <h1 className='sm:text-xl font-sans-Roboto font-bold text-zinc-100 text-2xl'>Repositórios no github</h1>
        <p className="text-white hover:text-blue-300 hover:underline_cursor:pointer"><Link href="https://github.com/GuterresThomas?tab=repositories">Repositórios</Link></p>
      </div>
      <div className="flex flex-col m-5">
        <h1 className='sm:text-xl font-sans-Roboto font-bold text-zinc-100 text-2xl'>Redes sociais</h1>
        <p className="text-white hover:text-blue-300 hover:underline_cursor:pointer"><Link href="https://github.com/GuterresThomas">Github</Link></p>
        <p className="text-white hover:text-blue-300 hover:underline_cursor:pointer"><Link href="https://wa.me/5555997004539">WhatsApp</Link></p>
        <p className="text-white hover:text-blue-300 hover:underline_cursor:pointer"><Link href="https://instagram.com/thomas_guterres?igshid=NGExMmI2YTkyZg==">Instagram</Link></p>
        <p className="text-white hover:text-blue-300 hover:underline_cursor:pointer"><Link href="https://www.linkedin.com/in/thomas-guterres-978a6327b/">Linkedin</Link></p>
      </div>
    </div>
  )
}
