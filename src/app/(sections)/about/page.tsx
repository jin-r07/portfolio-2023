"use client";
import { SOCIALS, TEXTS } from "@/common/assets/page";
import Transition from "@/common/transition/page";
import Footer from "@/components/footer/page";
import Menu from "@/components/menu/page";
import Navbar from "@/components/navbar/page";
import Link from "next/link";
import { GoArrowDownRight } from "react-icons/go";

export default function About() {
    return (
        <Transition backgroundColor="#222222">
            <section className="w-full h-full bg-[#F1F6FF] px-2 font-MADETOMMY_Regular">
                <Menu />
                <Navbar />
                <div className="flex items-center justify-between uppercase border-b border-[#222222] text-lg md:pt-0 pt-12">
                    <h1 className="py-2"># About</h1>
                    <h1 className="py-2">Description about myself</h1>
                </div>
                <div className="w-full h-full flex md:flex-row flex-col md:items-center justify-between md:p-[10vw]">
                    <div className="md:w-1/2 w-full 2xl:text-9xl xl:text-8xl lg:text-7xl text-6xl uppercase md:ml-20 md:my-0 my-10">
                        <h1>About Me</h1>
                    </div>
                    <div className="md:w-1/2 w-full 2xl:text-6xl xl:text-5xl lg:text-4xl text-3xl text-[#B9BEC6] md:ml-20 md:mb-0 mb-10">
                        <h1>{TEXTS.about1}</h1>
                    </div>
                </div>
                <div className="flex lg:flex-row flex-col w-full h-full lg:pl-32 pb-20">
                    <div className="lg:w-2/3 w-full h-full flex flex-col">
                        <div className="pb-10">
                            <h1 className="2xl:text-5xl lg:text-4xl text-3xl py-10">{TEXTS.name}</h1>
                            <p className="text-xl">{TEXTS.about2}</p>
                        </div>
                        <div className="flex">
                            <GoArrowDownRight className="2xl:block hidden text-7xl" />
                            <div>
                                <h1 className="text-xl text-[#B9BEC6] pt-10 uppercase">Location</h1>
                                <p className="text-xl pt-5">{TEXTS.location}</p>
                                <h1 className="text-xl text-[#B9BEC6] pt-10 uppercase pb-5">Contact Details</h1>
                                <Link href={SOCIALS.email} className="text-xl w-fit relative link-dark"><span>{TEXTS.contact_email}</span></Link>
                                <p className="text-xl pt-2">{TEXTS.contact_number}</p>
                                <h1 className="text-xl text-[#B9BEC6] pt-10 uppercase">Socials</h1>
                                <div className="flex flex-col text-xl py-5">
                                    <Link href={SOCIALS.linkedIn} target="_blank" className="w-fit relative link-dark"><span>LinkedIn</span></Link>
                                    <Link href={SOCIALS.github} target="_blank" className="w-fit relative link-dark">Github</Link>
                                    <Link href={SOCIALS.instagram} target="_blank" className="w-fit relative link-dark">Instagram</Link>
                                    <Link href={SOCIALS.twitter} target="_blank" className="w-fit relative link-dark">Twitter</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-full lg:pl-20">
                        <div className="bg-[#5045E9] flex items-center justify-center w-full h-screen">
                            <p className="text-2xl text-white">Image placeholder</p>
                            {/* <Image src={IMG.img} alt={IMG.alt} fill priority/> */}
                        </div>
                    </div>
                </div>
                <div>
                    <Footer />
                </div>
            </section>
        </Transition>
    )
}