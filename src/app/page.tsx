import NavMenu from '@/components/navMenu'
import React from 'react'
import { FaFlag } from 'react-icons/fa'
import { GiSpaceSuit } from 'react-icons/gi'


export default function Home() {
  return (
    <div className='bg-zinc-900 h-full md:h-screen'>
      <NavMenu />
      <div className='flex justify-center mt-5'>
        <h1 className='text-8xl font-sans-Roboto font-extrabold text-zinc-100'>Bem vindo(a) ao meu Portfolio</h1>
      </div>
      <div className='flex justify-center text-center m-5 mt-10 mb-2'>
        <h1 className='text-6xl font-sans-Roboto font-extrabold text-zinc-100'>Explore meu portfólio para descobrir os projetos nos quais trabalhei, desde sites corporativos elegantes a aplicativos web dinâmicos. Minha abordagem é baseada em um código limpo e otimizado, focado em fornecer soluções eficientes e de alta qualidade.</h1>
      </div>
      <div className='bottom-0'>
            <img src='/wave-haikei (3).svg' />
      </div>
    </div>
  )
}
