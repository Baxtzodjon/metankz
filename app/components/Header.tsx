"use client"

import Image from "next/image";
import Link from "next/link";
import { navContacts, navLinks } from "../data/headerLinks";
import { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { motion, AnimatePresence } from "motion/react";
import { usePathname } from "next/navigation";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isAnimatingOut, setIsAnimatingOut] = useState(false);
    const pathname = usePathname();

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

    useEffect(() => {
        setMenuOpen(false);
        setIsAnimatingOut(false);
    }, [pathname]);

    return (
        <motion.header
            initial={{ y: -60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full"
        >
            <div className="container flex items-center justify-between pt-[23px] pb-[21px]">

                <div className="flex items-center lg:gap-8 xl:gap-[60px]">

                    <Link href={"/"}>

                        <Image src={"/icons/createx_logo.svg"} alt="Createx Logo" width={130} height={22} className="max-w-full lg:w-[100px] lg:h-[17px] xl:w-[130px] xl:h-[22px]" />

                    </Link>

                    <nav className="hidden lg:flex items-center gap-10">

                        {navLinks.map(({ href, label }) => {
                            const isActive = pathname === (href);

                            return (
                                <Link
                                    key={href}
                                    href={href}
                                    onClick={handleLinkClick}
                                    className={`text-base font-bold transition-default hover:text-primary ${isActive ? "text-primary" : "text-gray"}`}
                                >
                                    {label}
                                </Link>
                            );
                        })}

                    </nav>

                </div>

                <div className="hidden lg:flex items-center lg:gap-3 xl:gap-9">

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

            <AnimatePresence>

                {(menuOpen || isAnimatingOut) && (
                    <>
                        <motion.div
                            key="overlay"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="fixed inset-0 lg:hidden bg-[rgba(0,0,0,.6)] z-40"
                            onClick={toggleMenu}
                        />

                        <motion.div
                            key="menu"
                            initial={{ x: "-100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "-100%" }}
                            transition={{ duration: 0.3 }}
                            className="fixed top-0 left-0 h-full w-[80%] max-w-[300px] lg:hidden bg-white z-50 shadow-lg p-5 sm:p-[50px] flex flex-col gap-10 overflow-y-auto"
                        >

                            <nav className="flex flex-col gap-8">
                                {navLinks.map(({ href, label }) => {
                                    const isActive = pathname === (href);

                                    return (
                                        <Link
                                            key={href}
                                            href={href}
                                            onClick={handleLinkClick}
                                            className={`text-base font-bold transition-default hover:text-primary ${isActive ? "text-primary" : "text-gray"}`}
                                        >
                                            {label}
                                        </Link>
                                    );
                                })}
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

                        </motion.div>

                        {/* <div className={`fixed top-0 left-0 h-full w-[80%] lg:hidden bg-white z-50 shadow-lg p-5 sm:p-[50px] flex flex-col gap-10 ${isAnimatingOut ? 'animate-slide-out-left' : 'animate-slide-in-left'}`}></div> */}
                    </>
                )}

            </AnimatePresence>

        </motion.header>
    );
};

export default Header;