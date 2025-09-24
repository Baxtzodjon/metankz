"use client"

import Image from "next/image";
import Link from "next/link";
import { navContacts, navLinks } from "../data/headerLinks";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleLinkClick = () => {
        setMenuOpen(false);
    };

    return (
        <header className="w-full">

            <div className="container flex items-center justify-between pt-[23px] pb-[21px]">

                <div className="flex items-center gap-[60px]">

                    <Link href={"/"}>

                        <Image src={"/icons/createx_logo.svg"} alt="Createx Logo" width={130} height={22} />

                    </Link>

                    <nav className="hidden lg:flex items-center gap-10">

                        {navLinks.map(({ href, label }) => (
                            <Link
                                key={href}
                                href={href}
                                onClick={handleLinkClick}
                                className="text-gray text-base font-bold transition-default hover:text-primary"
                            >
                                {label}
                            </Link>
                        ))}

                    </nav>

                </div>

                <div className="hidden lg:flex items-center gap-9">

                    {navContacts.map(({ href, label, telEmail, icon, altText }) => (
                        <a key={href} href={href} className="flex items-center gap-3">

                            <Image src={icon as string} alt={altText ?? label} width={40} height={40} />

                            <div className="flex flex-col">

                                <span className="text-gray text-sm font-bold">{label}</span>

                                <span className="text-ebony text-lg font-normal transition-default hover:text-primary">{telEmail}</span>

                            </div>

                        </a>
                    ))}

                </div>

                <button onClick={toggleMenu} className="block lg:hidden text-4xl">
                    {menuOpen ? <IoMdClose /> : <RxHamburgerMenu />}
                </button>

            </div>

            {menuOpen && (
                <>
                    <div
                        className="fixed inset-0 bg-[rgba(0,0,0,.6)] bg-opacity-40 z-40"
                        onClick={toggleMenu}
                    />

                    <div className="fixed top-0 left-0 h-full w-[80%] max-w-sm bg-white z-50 shadow-lg p-6 flex flex-col gap-6 animate-slide-in-left">

                        <button onClick={toggleMenu} className="text-3xl self-end">✕</button>

                        <nav className="flex flex-col gap-4 mt-2">
                            {navLinks.map(({ href, label }) => (
                                <Link
                                    key={href}
                                    href={href}
                                    onClick={handleLinkClick}
                                    className="text-ebony text-lg font-bold"
                                >
                                    {label}
                                </Link>
                            ))}
                        </nav>

                        <div className="flex flex-col gap-4 mt-6 border-t pt-6">
                            {navContacts.map(({ href, label, telEmail, icon, altText }) => (

                                <a key={href} href={href} className="flex items-center gap-3">

                                    <Image src={icon as string} alt={altText ?? label} width={30} height={30} />

                                    <div className="flex flex-col">

                                        <span className="text-gray text-sm font-bold">{label}</span>

                                        <span className="text-ebony text-base font-normal">{telEmail}</span>

                                    </div>

                                </a>
                            ))}
                        </div>

                    </div>
                </>
            )}

        </header>
    );
};

export default Header;