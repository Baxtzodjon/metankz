"use client"

import Image from "next/image";
import Link from "next/link";
import { navContacts, navLinks } from "../data/headerLinks";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isAnimatingOut, setIsAnimatingOut] = useState(false);

    const toggleMenu = () => {
        if (menuOpen) {
            setIsAnimatingOut(true);

            setTimeout(() => {
                setMenuOpen(false);
                setIsAnimatingOut(false);
            }, 300);
        } else {
            setMenuOpen(true);
        }
    };

    const handleLinkClick = () => {
        setMenuOpen(false);
    };

    return (
        <header className="w-full">

            <div className="container flex items-center justify-between pt-[23px] pb-[21px]">

                <div className="flex items-center lg:gap-8 xl:gap-[60px]">

                    <Link href={"/"}>

                        <Image src={"/icons/createx_logo.svg"} alt="Createx Logo" width={130} height={22} className="max-w-full lg:w-[100px] lg:h-[17px] xl:w-[130px] xl:h-[22px]" />

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
                        <a key={href} href={href} className="flex items-center gap-[13px]">

                            <Image src={icon as string} alt={altText ?? label} width={40} height={40} />

                            <div className="flex flex-col">

                                <span className="text-gray text-sm font-bold">{label}</span>

                                <span className="text-ebony lg:text-base xl:text-lg font-normal transition-default hover:text-primary">{telEmail}</span>

                            </div>

                        </a>
                    ))}

                </div>

                <button onClick={toggleMenu} className="block lg:hidden text-4xl">
                    {menuOpen ? <IoMdClose /> : <RxHamburgerMenu />}
                </button>

            </div>

            {(menuOpen || isAnimatingOut) && (
                <>
                    <div
                        className="fixed inset-0 lg:hidden bg-[rgba(0,0,0,.6)] z-40"
                        onClick={toggleMenu}
                    />

                    <div className={`fixed top-0 left-0 h-full w-[80%] lg:hidden bg-white z-50 shadow-lg p-5 sm:p-[50px] flex flex-col gap-10 ${isAnimatingOut ? 'animate-slide-out-left' : 'animate-slide-in-left'}`}>

                        <nav className="flex flex-col gap-8">
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

                        <div className="flex flex-col">
                            {navContacts.map(({ href, label, telEmail, icon, altText }) => (

                                <a key={href} href={href} className="flex items-center gap-[13px]">

                                    <Image src={icon as string} alt={altText ?? label} width={40} height={40} />

                                    <div className="flex flex-col gap-[1px]">

                                        <span className="text-gray text-sm font-bold">{label}</span>

                                        <span className="text-ebony text-base font-normal transition-default hover:text-primary">{telEmail}</span>

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