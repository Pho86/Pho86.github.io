"use client";
import { useEffect } from "react";
import Vara from "vara";

export default function AnimateSign({ text }: { text: string }) {
    useEffect(() => {
        const fontSize = window.innerWidth >= 1024 ? 32 : 24;
        new Vara(
            "#vara-container",
            "https://raw.githubusercontent.com/akzhy/Vara/master/fonts/Pacifico/PacificoSLO.json",
            [
                {
                    text: text,
                    fontSize: fontSize,
                    strokeWidth: 1.1,
                    color: "#1D1A1A",
                    duration: 3200,
                },
            ]
        );
    }, [text]);

    return (
        <div id="vara-container" className="w-full whitespace-nowrap my-0 h-full" />
    );
}
