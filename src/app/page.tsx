import NavMenu from '@/components/navMenu'
import React from 'react'
import { GiSpaceSuit } from 'react-icons/gi'


export default function Home() {
  return (
    <div className='bg-zinc-900 h-full md:h-screen'>
      <NavMenu />
      <div className='flex justify-center mt-5'>
        <h1 className='text-8xl font-sans-Roboto font-extrabold text-zinc-100'>Bem vindo(a) ao meu Portfolio</h1>
      </div>
      <div className='flex justify-center text-center m-5 mt-10 mb-10'>
        <h1 className='text-6xl font-sans-Roboto font-extrabold text-zinc-100'>Fico feliz em te ver aqui, clique em algum dos links acima para conhecer mais sobre mim e sobre meu trabalho.</h1>
      </div>
      <div className='justify-center flex animate-bounce hover:animate-none'>
        <GiSpaceSuit size={150} color='#fff'/>
      </div>
    </div>
  )
}
