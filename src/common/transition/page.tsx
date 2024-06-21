"use client";
import React, { ReactNode } from "react";
import { motion, Variants } from "framer-motion";
import { opacity, expand } from "./anim";
import "../styles.scss";

interface TransitionProps {
    children: ReactNode;
    backgroundColor: string;
}

export default function Transition({ children, backgroundColor }: TransitionProps) {
    const anim = (variants: Variants, custom: any = null) => {
        return {
            initial: "initial",
            animate: "enter",
            exit: "exit",
            custom,
            variants
        }
    }

    const nbOfColumns = 5;
    return (
        <div className="stairs" style={{ backgroundColor }}>
            <motion.div {...anim(opacity)} className="transition-background" />
            <div className="transition-container">
                {[...Array(nbOfColumns)].map((_, i) => (
                    <motion.div key={i} {...anim(expand, nbOfColumns - i)} />
                ))}
            </div>
            {children}
        </div>
    )
}