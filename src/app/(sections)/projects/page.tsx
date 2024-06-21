"use client";
import { TEXTS } from "@/common/assets/page";
import CustomCursor from "@/common/customCursor/page";
import Transition from "@/common/transition/page";
import Footer from "@/components/footer/page";
import Menu from "@/components/menu/page";
import Navbar from "@/components/navbar/page";
import { useContextPage } from "@/context-api/page";
import Image from "next/image";
import Link from "next/link";

export default function Projects() {
    const { textEnter, textLeave } = useContextPage();

    const projects = [
        { title: "Circle Bet", src: "projects/mobile/circle-bet.png", color: "#283352", year: "2023", task: "Design & Development", link: "/projects/circle-bet" },
        { title: "Heart Disease Prediction with Chatbot", src: "projects/mobile/heart-disease-prediction-with-chatbot.png", color: "#D8D3CD", year: "2023", task: "Design & Development", link: "/projects/heart-disease-prediction-with-chatbot" },
        { title: "Music Scales (M#)", src: "projects/mobile/music-scales.png", color: "#48494B", year: "2022", task: "Design & Development", link: "projects/music-scales" }
    ];

    return (
        <Transition backgroundColor="#222222">
            <section className="w-full h-full bg-[#F1F6FF] px-2 font-MADETOMMY_Regular">
                <Menu />
                <Navbar />
                <div className="flex items-center justify-between uppercase border-b border-[#222222] text-lg md:pt-0 pt-12">
                    <h1 className="py-2"># Projects</h1>
                    <h1 className="py-2">Recent Works</h1>
                </div>
                <div className="w-full h-full md:py-10">
                    <div className="2xl:text-9xl xl:text-8xl lg:text-7xl text-6xl uppercase text-center md:mt-0 mt-10">
                        <h1>All Projects</h1>
                    </div>
                </div>
                <div className="md:mb-20 mb-5 mt-10">
                    <h1 className="2xl:text-7xl xl:text-6xl lg:text-5xl text-4xl md:text-center text-[#B9BEC6]">{TEXTS.project}</h1>
                </div>
                <div className="flex justify-center w-full pb-10">
                    <div className="pt-14 w-full flex items-center justify-center">
                        <div className="h-full w-full grid grid-cols-1 xl:grid-cols-2 sm:gap-10 gap-0">
                            {projects.map((project, index) => {
                                const { src, color, title, year, task, link } = project
                                return (
                                    <Link href={link} className="w-full sm:mb-32 mb-16 cursor-pointer group" key={index} onMouseEnter={textEnter} onMouseLeave={textLeave}>
                                        <div className="sm:p-16 p-0 w-fit h-fit rounded-md" style={{ backgroundColor: color }}>
                                            <Image priority src={`/images/${src}`} width={1200} height={0} alt={"???"} className="md:group-hover:scale-[1.04] transition-transform duration-500 rounded-lg" />
                                        </div>
                                        <div className="pt-8 pb-4 uppercase text-3xl border-b-[1px] border-[#CACACA] tracking-wide">
                                            <p>{title}</p>
                                        </div>
                                        <div className="flex justify-between text-xl font-Utendo tracking-wide pt-4">
                                            <p>{task}</p>
                                            <p>{year}</p>
                                        </div>
                                    </Link>
                                )
                            })}
                        </div>
                    </div>
                </div>
                <div>
                    <Footer />
                </div>
                <CustomCursor />
            </section>
        </Transition>
    )
}