"use client";
import gsap, { Expo } from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { IMG } from "@/common/assets/page";

export default function Preloader() {
  useGSAP(() => {
    const intro = document.querySelector("#intro-container") as HTMLElement;
    const div1 = document.querySelector("#div1");
    const div2 = document.querySelector("#div2");
    const loading = document.querySelector("#loading");
    const icon = document.querySelector("#icon");

    gsap.to(icon, {
      opacity: 1,
      duration: 3,
      delay: 0.5,
      rotation: 360,
      ease: "none"
    });

    gsap.to(icon, {
      opacity: 0,
      delay: 3,
    });

    const tl = gsap.timeline();

    tl.to(loading, {
      opacity: 1,
      duration: 1,
      delay: 0.5,
      ease: Expo.easeInOut
    });

    tl.to(loading, {
      opacity: 0,
      duration: 0.6,
      delay: 1,
      ease: Expo.easeInOut
    });

    tl.to(div1, {
      x: "-100%",
      duration: 1,
      ease: "power3.inOut"
    }, "div");

    tl.to(div2, {
      x: "-100%",
      duration: 1,
      delay: 0.5,
      ease: "power2.inOut"
    }, "div");

    tl.to(intro, {
      opacity: 0,
      onComplete: function () {
        if (intro === null) { return }
        intro.style.display = "none";
      }
    });
  })

  return (
    <section className="fixed top-0 left-0 z-50 w-full h-screen pointer-events-none" id="intro-container">
      <div className="fixed top-0 left-0 bg-[#222222] w-full h-full" id="div2"></div>
      <div className="fixed top-0 left-0 bg-[#F1F6FF] w-full h-full flex items-center justify-center" id="div1">
        <div className="relative w-6 h-8 opacity-0 mr-10" id="icon" >
          <Image src={IMG.loading} alt={IMG.alt} sizes="6vw" fill priority />
        </div>
        <pre className="font-MADETOMMY_Regular uppercase text-3xl opacity-0" id="loading">L  o  a  d  i  n  g</pre>
      </div>
    </section>
  )
}