"use client"
import React from 'react'

import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";

const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const menuItems = [
        "Movies",
        "Tv Show",
        "Peoples",
        "More",
    ];
    return (
        <>
            <div>
                <Navbar
                    isBordered
                    isMenuOpen={isMenuOpen}
                    onMenuOpenChange={setIsMenuOpen}
                    className='bg-cyan-950 h-20'
                >
                    <NavbarContent className="sm:hidden" justify="start">
                        <NavbarMenuToggle className='text-white' aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
                    </NavbarContent>

                    <NavbarContent className="sm:hidden pr-3" justify="center">
                        <NavbarBrand>
                            <Link href='/'>
                            <img className='h-20 w-20' src='https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg' alt='not found'></img>
                            </Link>
                        </NavbarBrand>
                    </NavbarContent>
                    <NavbarContent className="hidden sm:flex gap-4" justify="center">
                        <NavbarBrand>
                            <Link href='/'><img className='h-36 w-36' src='https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg' alt='not found'></img></Link>
                        </NavbarBrand>
                        <NavbarItem >
                            <Link color="foreground" className='text-white' href="#">
                                <Dropdown>
                                    <DropdownTrigger>
                                        <Button
                                            variant="bordered"
                                            className='text-white border-none'
                                        >
                                            Movies
                                        </Button>
                                    </DropdownTrigger>
                                    <DropdownMenu aria-label="Static Actions">
                                        <DropdownItem key="new"><Link className='text-slate-900' href='/Popularmov'>Popular</Link ></DropdownItem>
                                        <DropdownItem key="copy"><Link className='text-slate-900' href='/Nowplayingmov'>Now Playing</Link ></DropdownItem>
                                        <DropdownItem key="edit"><Link className='text-slate-900' href='/Upcoming'>Upcoming</Link ></DropdownItem>
                                        <DropdownItem key="delete"  >
                                        <Link className='text-slate-900' href='/Toprated'>Top-rated</Link >
                                        </DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                            </Link>
                        </NavbarItem>
                        <NavbarItem isActive>
                            <Link href="#" aria-current="page" className='text-white'>
                            <Dropdown>
                                    <DropdownTrigger>
                                        <Button
                                            variant="bordered"
                                            className='text-white border-none'
                                        >
                                            Tv Show
                                        </Button>
                                    </DropdownTrigger>
                                    <DropdownMenu aria-label="Static Actions">
                                        <DropdownItem key="new"><Link className='text-slate-900' href='/Tvpopular'>Popular</Link ></DropdownItem>
                                        <DropdownItem key="copy"><Link className='text-slate-900' href='/Tvairing'>Airing-Today</Link ></DropdownItem>
                                        <DropdownItem key="edit"><Link className='text-slate-900' href='/Tvontv'>On Tv</Link ></DropdownItem>
                                        <DropdownItem key="delete"  >
                                        <Link className='text-slate-900' href='/Popularmov'><Link className='text-slate-900' href='/Tvtoprated'>Top Rated</Link ></Link >
                                        </DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                            </Link>
                        </NavbarItem>
                        <NavbarItem>
                            <Link color="foreground" href="#" className='text-white'>
                                More
                            </Link>
                        </NavbarItem>
                    </NavbarContent>
                    <NavbarMenu className='text-white'>
                        {menuItems.map((item, index) => (
                            <NavbarMenuItem key={`${item}-${index}`}>
                                <Link
                                    className="w-full text-black mt-2"
                                    // color={
                                    //     index === 2 ? "warning" : index === menuItems.length - 1 ? "danger" : "foreground"
                                    // }
                                    href={`/`}
                                    size="lg"
                                >
                                    {item}
                                </Link>
                            </NavbarMenuItem>
                        ))}
                    </NavbarMenu>
                </Navbar>

            </div>
        </>
    )
}
export default Header