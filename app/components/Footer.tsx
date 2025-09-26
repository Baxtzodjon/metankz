"use client"

import Image from "next/image";
import Link from "next/link";
import { FaRegHeart } from "react-icons/fa";
import { socialLinks } from "../data/socialLinks";
import { footerLinks } from "../data/footerLinks";
import { contactInfo } from "../data/contactInfo";

const Footer = () => {

    return (
        <footer className="w-full h-full bg-ebony">

            <div className="container py-20 flex flex-col gap-[49px]">

                <div className="flex items-start lg:items-center justify-between flex-col md:flex-row md:gap-[30px]">

                    <div className="flex flex-col gap-6 mb-8">

                        <div className="flex items-center flex-wrap gap-7 sm:gap-10 lg:gap-[60px]">

                            <Link href="/"><Image src="/icons/createx_white_logo.svg" alt="Createx Logo" width={130} height={22} className="max-w-full lg:w-[100px] lg:h-[17px] xl:w-[130px] xl:h-[22px]" /></Link>

                            <div className="flex items-center gap-4">

                                {socialLinks.map(({ href, icon: Icon, label }) => (
                                    <a key={href} href={href} target="_blank" aria-label={label}>

                                        <Icon className="w-6 h-6 text-white opacity-60 transition-default hover:text-white hover:opacity-100" />

                                    </a>
                                ))}

                            </div>

                        </div>

                        <p className="w-full max-w-[493px] text-white text-sm font-normal opacity-60">Createx Construction Bureau has been successfully operating in the USA construction market since 2000. We are proud to offer you quality construction and exemplary service. Our mission is to set the highest standards for construction sphere.</p>

                    </div>

                    <form className="flex flex-col gap-6">

                        <h4 className="text-white text-2xl font-bold">Let’s stay in touch</h4>

                        <div className="flex flex-col gap-4">

                            <div className="flex items-center gap-0">

                                <input type="email" placeholder="Your email address" className="max-w-full w-full sm:w-[364px] md:w-full lg:w-[364px] h-11 bg-[#FFFFFF1F] border border-solid border-[#FFFFFF33] rounded-l pl-4 outline-none focus:outline-2 focus:outline-solid focus:outline-primary focus:outline-offset-2 text-black text-sm font-normal" />

                                <button className="px-[19px] py-[11px] bg-primary rounded-tr-[4px] rounded-br-[4px] text-white text-sm font-bold uppercase transition-default hover:bg-active">subscribe</button>

                            </div>

                            <p className="text-white text-xs font-normal leading-[150%] opacity-60">*Subscribe to our newsletter to receive communications and early updates from Createx <br className="hidden sm:block" /> Construction Bureau.</p>

                        </div>

                    </form>

                </div>

                <div className="flex items-start lg:items-center gap-10 md:gap-8 lg:gap-[125px] flex-col sm:flex-row">

                    <div className="flex flex-col gap-[13px]">

                        <h6 className="text-white text-base font-bold uppercase">Head Office</h6>

                        <div className="flex flex-col gap-1">

                            {/* <span className="flex items-center gap-1">

                                <span className="text-white text-base font-normal">Address:</span>

                                <address className="text-white text-base font-normal not-italic opacity-60">8502 Preston Rd. Inglewood, New York</address>

                            </span>

                            <span className="flex items-center gap-1">

                                <span className="text-white text-base font-normal">Call:</span>

                                <a href="tel:4055550128" className="text-white text-base font-normal opacity-60">(405) 555-0128</a>

                            </span>

                            <span className="flex items-center gap-1">

                                <span className="text-white text-base font-normal">Email:</span>

                                <a href="mailto:hello@createx.com?subject=Platform question&body=Hello, I have a question..." className="text-white text-base font-normal opacity-60">hello@createx.com</a>

                            </span> */}

                            {contactInfo.map(({ type, label, value, href }) => (
                                <span key={type} className="flex gap-1">
                                    <span className="text-white text-base font-normal">{label}</span>

                                    {type === "address" ? (
                                        <address className="sm:max-w-[120px] md:max-w-none text-white text-base font-normal not-italic opacity-60">
                                            {value}
                                        </address>
                                    ) : (
                                        <a
                                            href={href}
                                            className="text-white text-base font-normal opacity-60 transition-default hover:text-white hover:opacity-100"
                                        >
                                            {value}
                                        </a>
                                    )}
                                </span>
                            ))}

                        </div>

                    </div>

                    {/* <div className="flex flex-col gap-[13px]">

                        <h6 className="text-white text-base font-bold uppercase">Who we are</h6>

                        <div className="flex flex-col gap-1">

                            <Link href={"/about"} className="text-white text-base font-normal opacity-60">About Us</Link>

                            <Link href={"/available-positions"} className="text-white text-base font-normal opacity-60">Available Positions</Link>

                            <Link href={"/contacts"} className="text-white text-base font-normal opacity-60">Contacts</Link>

                        </div>

                    </div>

                    <div className="flex flex-col gap-[13px]">

                        <h6 className="text-white text-base font-bold uppercase">Our Experience</h6>

                        <div className="flex flex-col gap-1">

                            <Link href={"/services"} className="text-white text-base font-normal opacity-60">Services</Link>

                            <Link href={"/work"} className="text-white text-base font-normal opacity-60">Work</Link>

                            <Link href={"/news"} className="text-white text-base font-normal opacity-60">News</Link>

                        </div>

                    </div> */}

                    <div className="flex items-center gap-8 lg:gap-[125px]">

                        {footerLinks.map(({ title, links }) => (
                            <div key={title} className="flex flex-col gap-[13px]">

                                <h6 className="text-white text-base font-bold uppercase">{title}</h6>

                                <div className="flex flex-col gap-1">

                                    {links.map(({ href, label }) => (

                                        <Link key={href} href={href} className="text-white text-base font-normal opacity-60 transition-default hover:text-white hover:opacity-100">
                                            {label}
                                        </Link>

                                    ))}

                                </div>

                            </div>
                        ))}

                    </div>

                </div>

                <small className="text-white text-xs font-normal flex gap-1 mt-[11px]">©&nbsp;All rights reserved. Made with <FaRegHeart className="w-4 h-4 text-primary" /><span>by Baxtzod</span></small>

            </div>

        </footer>
    );
};

export default Footer;