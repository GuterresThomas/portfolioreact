"use client"
import React from "react"
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '@/components/ui/navigation-menu'
import Link from "next/link"
import { GoHome } from "react-icons/go"
import { CgProfile } from "react-icons/cg"
import { AiOutlineMessage } from "react-icons/ai"
import { CgSoftwareUpload } from "react-icons/cg"

const NavMenu = () => {
    return (
    <div className="sm:justify-center sm:flex flex justify-center f">
        <Link href="/"><GoHome  size={50} color="#fff" className="hover:scale-125" /></Link>
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem><Link href="/sobre"><CgProfile size={50} color="#fff" className="ml-4 hover:scale-125" /></Link>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem><Link href="/contato"><AiOutlineMessage size={50} color="#fff" className="ml-4 hover:scale-125"/></Link>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <Link href="/projetos"><CgSoftwareUpload size={50} color="#fff" className="ml-4 hover:scale-125" /></Link>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>

    </div>
    )
}

export default NavMenu