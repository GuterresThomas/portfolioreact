import NavMenu from "@/components/navMenu";
import React from "react";
import '../app/globals.css'
import { FaGit, FaGithub, FaInstagram, FaLinkedin, FaMailBulk, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";


const Contato = () => {
    return (
        <div className='bg-zinc-900 h-full md:h-screen'>
            <NavMenu />
            <div className="flex justify-center">
                <h1 className="text-zinc-100 text-4xl font-sans-Roboto font-semibold mt-5">Se você gostou do que viu e quer entrar em contato saiba como aqui embaixo:</h1>
            </div>
            <div className="sm:flex sm:justify-center sm:space-x-8 mt-8 flex justify-center space-x-8">
                <Link href="https://wa.me/5555997004539"><FaWhatsapp size={50} color="#fff" className="hover:scale-125" /></Link>
                <Link href="https://github.com/GuterresThomas"><FaGithub size={50} color="#fff" className="hover:scale-125" /></Link>
                <Link href="https://instagram.com/thomas_guterres?igshid=NGExMmI2YTkyZg=="><FaInstagram size={50} color="#fff" className="hover:scale-125" /></Link>
                <Link href="https://www.linkedin.com/in/thomas-guterres-978a6327b/"><FaLinkedin size={50} color="#fff" className="hover:scale-125" /></Link>
            </div>
            <div className='bottom-0 fixed'>
                <img src='/wave-haikei (3).svg' />
             </div>
        </div>
    )
}



export default Contato