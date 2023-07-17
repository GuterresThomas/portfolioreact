"use client"
import React from "react"
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '@/components/ui/navigation-menu'
import Link from "next/link"
import { FaHome } from "react-icons/fa"

const NavMenu = () => {
    return (
    <div className="sm:justify-center sm:flex flex justify-center f">
        <Link href="/"><FaHome  size={50} color="#fff" /></Link>
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem><Link href="/sobre"><span className="cursor-pointer text-3xl font-sans-Roboto font-semibold text-zinc-100 hover:font-bold ml-4">Sobre</span></Link>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem><Link href="/contato"><span className="cursor-pointer text-3xl font-sans-Roboto font-semibold text-zinc-100 hover:font-bold ml-4">Contato</span></Link>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <Link href="/projetos"><span className="text-3xl font-sans-Roboto font-semibold text-zinc-100 hover:font-bold ml-4">Projetos</span></Link>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>

    </div>
    )
}

export default NavMenu