"use client";
import React, { useEffect, useState } from "react";
const createFirefly = () => ({
    id: Math.random(),
    top: `${Math.random() * 30 + 70}%`, 
    left: `${Math.random() * 100}%`,
    animationDuration: `${Math.random() * 5 + 5}s`,
});


const FireFliesBackground = () => {
    const [fireflies, setFireflies] = useState([]);

    useEffect(() => {
        const addFireflyPeriodically = () => {
            const newFirefly = createFirefly();
            setFireflies((currentFireflies) => [
                ...currentFireflies.slice(-10),
                newFirefly,
            ]);
        };

        const interval = setInterval(addFireflyPeriodically, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
            {fireflies.map((firefly) => (
                <div
                    key={firefly.id}
                    className="absolute rounded-full w-[9px] h-[9px] bg-firefly-radial animate-firefly "
                    style={{
                        top: firefly.top,
                        left: firefly.left,
                        animation: `move ${firefly.animationDuration} linear infinite alternate`,
                    }}
                ></div>
            ))}
        </div>
    );
};

export default FireFliesBackground;
