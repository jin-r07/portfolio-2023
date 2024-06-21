"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { IMG, SOCIALS, TEXTS } from "@/common/assets/page";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { RiMenu4Line } from "react-icons/ri";
import { IoIosClose } from "react-icons/io";
import { useContextPage } from "@/context-api/page";
import { usePathname, useRouter } from "next/navigation";

export default function Menu() {
    const { handleLinkClick } = useContextPage();

    const router = useRouter();

    const pathName = usePathname();

    const container = useRef<HTMLDivElement>(null);

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    const links = [
        { name: "HOME", path: "/home" },
        { name: "PROJECTS", path: "/projects" },
        { name: "ABOUT", path: "/about" },
        { name: "CONTACT", path: "/contact" }
    ];

    const tl = useRef<gsap.core.Timeline | null>(null);

    useGSAP(() => {
        gsap.set("#menu-link-item-holder", { y: 75 });
        gsap.set("#menu-info", { y: 20 });

        tl.current = gsap.timeline({ paused: true })
            .to("#menu-overlay", {
                duration: 1.25,
                clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%",
                ease: "power4.inOut"
            })
            .to("#menu-link-item-holder", {
                y: 0,
                duration: 1,
                stagger: 0.1,
                opacity: 1,
                ease: "power4.inOut",
                delay: -0.75
            })
            .to("#menu-info", {
                y: 0,
                duration: 1,
                stagger: 0.1,
                opacity: 1,
                ease: "power4.inOut",
                delay: -0.75
            })
    }, { scope: container });

    useGSAP(() => {
        if (tl.current) {
            if (isMenuOpen) {
                tl.current.play();
            } else {
                tl.current.reverse();
            }
        }
    }, [isMenuOpen]);

    const isActive = (path: string) => {
        return pathName.startsWith(path);
    };

    return (
        <nav className="md:hidden flex fixed top-0 left-0 z-[3] w-full px-2" ref={container}>
            <div className="w-full flex items-center justify-between z-[3] bg-[#F1F6FF] border-b border-[#222222]">
                <div className="relative w-12 h-12 cursor-pointer" onClick={() => { router.push("/home"); handleLinkClick("/home"); }}>
                    <Image src={IMG.logo_black} alt={IMG.alt} sizes="12vw" fill priority />
                </div>
                <div className="cursor-pointer uppercase flex items-center text-xl group" onClick={toggleMenu}>
                    <p className="pr-1">Menu</p><RiMenu4Line className="group-hover:rotate-90 transition-all duration-500" />
                </div>
            </div>
            <div className="fixed top-0 left-0 w-full h-screen pt-1 pl-2 flex flex-col items-center justify-between z-[4] bg-[#222222] clip-menu text-[#F1F6FF]" id="menu-overlay">
                <div className="flex items-center justify-between w-full z-[1]">
                    <div className="relative w-12 h-12 cursor-pointer" onClick={() => { router.push("/home"); handleLinkClick("/home"); }}>
                        <Image src={IMG.logo} alt={IMG.alt} sizes="12vw" fill priority />
                    </div>
                    <div className="uppercase flex items-center text-xl cursor-pointer group" onClick={toggleMenu}>
                        <p>Close</p><IoIosClose className="text-4xl group-hover:rotate-90 transition-all duration-500" />
                    </div>
                </div>
                <div className="absolute -bottom-4 -left-4 cursor-pointer z-[1] hover:rotate-90 transition-all duration-500" onClick={toggleMenu}>
                    <IoIosClose className="text-8xl" />
                </div>
                <div className="absolute top-0 left-4 flex flex-col items-center justify-center w-full h-full">
                    <div className="w-full h-fit">
                        {links.map((link, index) => (
                            <div className="w-fit h-fit pb-7 opacity-0" key={index} id="menu-link-item-holder" onClick={() => { toggleMenu(); handleLinkClick(link.path); }}>
                                <Link href={link.path} className={`text-5xl tracking-wide relative link ${isActive(link.path) ? "border-b border-[#F1F6FF]": ""}`}>
                                    <span>{link.name}</span>
                                </Link>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-between w-full mt-4 opacity-0" id="menu-info">
                        <div className="flex flex-col text-xl">
                            <Link href={SOCIALS.linkedIn} target="_blank" className="w-fit relative link"><span>LinkedIn</span></Link>
                            <Link href={SOCIALS.github} target="_blank" className="w-fit relative link">Github</Link>
                            <Link href={SOCIALS.instagram} target="_blank" className="w-fit relative link">Instagram</Link>
                            <Link href={SOCIALS.twitter} target="_blank" className="w-fit relative link">Twitter</Link>
                            <Link href={SOCIALS.email} className="w-fit relative link pt-5">{TEXTS.contact_email}</Link>
                            <p>{TEXTS.location}</p>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}