"use client";
import React, { useEffect, useState } from "react";
import Preloader from "@/app/(sections)/_preloader/page";
import Home from "@/app/(sections)/home/page";
import Lenis from "@studio-freight/lenis";

export default function App() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        alert("Work In Progress...\n\nThank you for checking out my portfolio.\n\nClick 'OK' to see my portfolio.");
        
        const lenis = new Lenis();

        function raf(time: any) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        setTimeout(() => {
            setIsLoading(false);
        }, 8000);

    }, []);

    return (
        <main>
            {isLoading && <Preloader/>}
            <Home />
        </main>
    )
}