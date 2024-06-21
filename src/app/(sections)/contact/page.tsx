"use client";
import { SOCIALS, TEXTS } from "@/common/assets/page";
import Magnetic from "@/common/magnetic/page";
import Transition from "@/common/transition/page";
import SecFooter from "@/components/SecFooter/page";
import Menu from "@/components/menu/page";
import Navbar from "@/components/navbar/page";
import Link from "next/link";
import { GoArrowDownRight } from "react-icons/go";

export default function Contact() {
    return (
        <Transition backgroundColor="#222222">
            <section className="w-full h-full bg-[#F1F6FF] px-2 font-MADETOMMY_Regular">
                <Menu />
                <Navbar />
                <div className="flex items-center justify-between uppercase border-b border-[#222222] text-lg md:pt-0 pt-12">
                    <h1 className="py-2"># Contact</h1>
                    <h1 className="py-2">Get in touch</h1>
                </div>
                <div className="w-full h-full md:py-[10vw]">
                    <div className="2xl:text-9xl xl:text-8xl lg:text-7xl text-6xl uppercase md:ml-20 md:mt-0 mt-10">
                        <h1>Contact</h1>
                    </div>
                </div>
                <div className="relative lg:left-[10%]">
                    <div className="flex lg:flex-row flex-col w-full h-full pb-20">
                        <GoArrowDownRight className="2xl:block hidden text-7xl" />
                        <div className="lg:w-1/3 w-full h-full">
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
                        <div className="lg:w-1/2 w-full h-full md:mt-0 mt-20">
                            <div className="2xl:text-7xl xl:text-6xl lg:text-5xl text-4xl">
                                <h1>{TEXTS.contact1}</h1>
                                <h1>{TEXTS.contact2}</h1>
                            </div>
                            <form className="w-full h-full mt-20" action="">
                                <div className="border-t border-b border-[#222222] py-7">
                                    <label htmlFor="name" className="text-xl text-[#222222]">01<span className="pl-10">What&apos;s your name?</span></label>
                                    <input type="text" id="name" name="name" className="bg-[#F1F6FF] py-1 px-2 mt-2 mb-4 w-full text-lg" placeholder="John Doe *" />
                                </div>

                                <div className="border-b border-[#222222] py-7">
                                    <label htmlFor="email" className="text-xl text-[#222222]">02<span className="pl-10">What&apos;s your email?</span></label>
                                    <input type="email" id="email" name="email" className="bg-[#F1F6FF] py-1 px-2 mt-2 mb-4 w-full text-lg" placeholder="john@doe.com *" />
                                </div>

                                <div className="border-b border-[#222222] py-7">
                                    <label htmlFor="email" className="text-xl text-[#222222]">03<span className="pl-10">What&apos;s the name of your organization?</span></label>
                                    <input type="email" id="email" name="email" className="bg-[#F1F6FF] py-1 px-2 mt-2 mb-4 w-full text-lg" placeholder="John & Doe &reg;" />
                                </div>

                                <div className="border-b border-[#222222] py-7">
                                    <label htmlFor="message" className="text-xl text-[#222222]">04<span className="pl-10">Your message</span></label>
                                    <textarea id="message" name="message" rows={5} className="bg-[#F1F6FF] py-1 px-2 mt-2 mb-4 w-full text-lg" placeholder="Hello John, can you help me with ... *"></textarea>
                                </div>

                                <Magnetic>
                                    <button className="w-14 h-14 p-[7rem] bg-[#5045E9] rounded-full text-white mt-10 btn drop-shadow-2xl text-xl">Send it!</button>
                                </Magnetic>
                            </form>
                        </div>
                    </div>
                </div>
                <div>
                    <SecFooter />
                </div>
            </section>
        </Transition>
    )
}