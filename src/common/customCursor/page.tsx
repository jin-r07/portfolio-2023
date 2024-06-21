"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useContextPage } from "@/context-api/page";

function CustomCursor() {
    const { cursorVariant } = useContextPage();

    const [mousePosition, setMousePosition] = useState({
        x: 0,
        y: 0
    });

    useEffect(() => {
        const mouseMove = (e: { clientX: any; clientY: any; }) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            })
        }

        window.addEventListener("mousemove", mouseMove);

        return () => {
            window.removeEventListener("mousemove", mouseMove);
        }
    }, []);

    const variants = {
        default: {
            x: mousePosition.x,
            y: mousePosition.y,
            scale: 0
        },
        text: {
            scale: 1,
            height: 120,
            width: 120,
            x: mousePosition.x - 60,
            y: mousePosition.y - 60,
            backgroundColor: "#5045E9",
        }
    }

    return (
        <motion.div className="h-0 w-0 rounded-full fixed top-0 left-0 pointer-events-none flex items-center justify-center"
            //@ts-ignore
            variants={variants}
            animate={cursorVariant}
        >
            <h1 className="text-white text-lg tracking-widest text-center relative top-1/2">View</h1>
        </motion.div>
    );
}

export default CustomCursor;