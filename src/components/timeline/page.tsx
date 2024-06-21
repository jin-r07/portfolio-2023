"use client";
import { useEffect, useState } from "react";
// @ts-ignore
import { Timeline, Event } from "react-timeline-scribble";
import { PiDownloadSimpleBold } from "react-icons/pi";
import Magnetic from "@/common/magnetic/page";
import { SOCIALS } from "@/common/assets/page";
import Link from "next/link";

export default function TimelineOverview() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 1024);
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const downloadPDF = async () => {
        const url = "https://www.johnhangrai.com.np/John Hang Rai.pdf"; /** URL of the PDF file **/
        const a = document.createElement("a"); /** Create a link element **/
        a.href = url; /** Set the href attribute to the URL of the PDF file **/
        a.download = 'John Hang Rai - CV.pdf'; /** Set the download attribute to specify the filename **/
        document.body.appendChild(a); /** Append the link to the document body **/
        a.click();
        document.body.removeChild(a); /** Remove the link from the document body after the download **/
    }

    return (
        <div className="md:pl-0 pl-2 font-MADETOMMY_Regular">
            <Timeline>
                <Event interval="AUG 2023 – FEB 2024" title="DOKO DEVELOPERS - JUNIOR LEVEL" subtitle="ReactJS Trainee">
                    <div className="flex items-center gap-5">
                        <Link href={SOCIALS.doko_devs} className="relative underline hover:no-underline" target="_blank">{SOCIALS.doko_devs}</Link>
                    </div>
                    &nbsp;
                    <p>Implementation of the designed UI/UX with help of tools such as ReactJS, CSS, JS, Bootstrap.
                        Use of Gitlab to create branches for code management and commit changes.
                        Went through multiple application prototypes to ensure user satisfaction.</p>
                </Event>
                <Event interval="JAN 2023 – APR 2023" title="INVENTORS ACADEMY - INTERN" subtitle="Java Developer">
                    <div className="flex items-center gap-5">
                        <Link href={SOCIALS.inventors_academy} className="relative underline hover:no-underline" target="_blank">{SOCIALS.inventors_academy}</Link>
                    </div>
                    &nbsp;
                    <p>Played an active role as a part of an agile team in different phases of Software Development Life Cycle (SDLC).
                        Worked with Spring components like: Spring Beans, Spring Core, Spring Data with JPA and, Spring MVC.
                        Designed and, developed REST-ful APIs.</p>
                </Event>
            </Timeline>
            <div className="font-MADETOMMY_Regular cursor-pointer mt-10 md:mx-0 mx-8 w-fit">
                <Magnetic>
                    <button onClick={downloadPDF} className="rounded-full text-xl bg-[#5045E9] text-white px-8 py-4 btn drop-shadow-2xl group">
                        My Resume<PiDownloadSimpleBold className="bg-[#5045E9] text-white bg-transparent ml-4 group-hover:bg-[#473dcf] transition-all duration-700" />
                    </button>
                </Magnetic>
            </div>
        </div>
    )
}