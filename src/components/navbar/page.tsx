"use client";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { IoLogoLinkedin } from "react-icons/io5";
import { BsGithub } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { IMG, TEXTS, SOCIALS } from "@/common/assets/page";
import { useContextPage } from "@/context-api/page";

export default function Navbar() {
    const router = useRouter();

    const pathName = usePathname();

    const { handleLinkClick } = useContextPage();

    const [nepaliTime, setNepaliTime] = useState(getNepaliTime());

    useEffect(() => {
        const interval = setInterval(() => {
            setNepaliTime(getNepaliTime());
        }, 60000); // Update time every minute (60000 milliseconds)

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, []);

    function getNepaliTime() {
        const currentTime = new Date();
        const utcTime = currentTime.getTime() + (currentTime.getTimezoneOffset() * 60 * 1000);
        const nepaliTime = new Date(utcTime + (5.75 * 60 * 60 * 1000));
        let hours = nepaliTime.getHours();
        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12;
        let minutes: any = nepaliTime.getMinutes();
        minutes = minutes < 10 ? '0' + minutes : minutes;
        const timeString = hours + ':' + minutes + ' ' + ampm;
        return timeString;
    }

    const links = [
        { name: "PROJECTS", path: "/projects" },
        { name: "ABOUT", path: "/about" },
        { name: "CONTACT", path: "/contact" }
    ];

    const isActive = (path: string) => {
        return pathName.startsWith(path);
    };

    return (
        <nav className="sticky top-0 bg-[#F1F6FF] border-b border-[#222222] md:flex hidden items-center justify-between py-1 pr-2 z-10 font-MADETOMMY_Regular">
            <div className="cursor-pointer relative w-12 h-12 ml-2 group" onClick={() => { router.push("/home"); handleLinkClick("/home"); }}>
                <Image src={IMG.logo_black} alt={IMG.alt} sizes="12vw" className="group-hover:scale-125 duration-300" fill priority />
            </div>
            <div className="2xl:flex hidden items-center uppercase text-lg">
                <p>Local Time: {nepaliTime} (GMT+5:45)</p>
                <p className="flex flex-row ml-10">
                    Current Status:
                    {TEXTS.status === "yes" ? (
                        <>
                            <span className="ml-2 w-2 h-2 bg-[#06C258] rounded-full blink-animation"></span>
                            <span className="ml-1">Available</span>
                        </>
                    ) : (
                        <>
                            <span className="ml-2 w-2 h-2 bg-[#FF0000] rounded-full blink-animation"></span>
                            <span className="ml-1">Unavailable</span>
                        </>
                    )}
                </p>
            </div>
            <div className="flex items-center text-lg">
                {links.map(link => {
                    return (
                        <Link key={link.path} href={link.path} className="ml-10 pseudo-text-effect group" data-after={link.name} onClick={() => { handleLinkClick(link.path); }}>
                            <span>{link.name}</span>
                            <span className={`relative -top-2 ml-1 w-1 h-1 ${isActive(link.path) ? "bg-[#222222]" : "bg-[#F1F6FF]"} group-hover:bg-[#222222] rounded-full`}></span>
                        </Link>
                    )
                })}
                <div className="flex items-center gap-5 ml-5 pl-5 border-l border-[#222222] text-2xl">
                    <Link href={SOCIALS.linkedIn} target="_blank"><IoLogoLinkedin className="hover:scale-125 duration-300" /></Link>
                    <Link href={SOCIALS.github} target="_blank"><BsGithub className="hover:scale-125 duration-300" /></Link>
                    <Link href={SOCIALS.instagram} target="_blank"><RiInstagramFill className="hover:scale-125 duration-300" /></Link>
                    <Link href={SOCIALS.twitter} target="_blank"><FaXTwitter className="hover:scale-125 duration-300" /></Link>
                </div>
            </div>
        </nav>
    )
}