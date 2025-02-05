"use client";
import { motion } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

const Modal = ({ onClose, toggle }) => createPortal(
    <div className="fixed inset-0 bg-background/60 backdrop-blur-sm flex items-center z-50 justify-center">

        <div className="bg-background/20 border border-accent/30 border-solid backdrop-blur-[6px] py-8 px-3 xs:px-10 sm:px-16 rounded-3xl shadow-glass-inset text-center  space-y-8">
            <p className="font-medium text-2xl text-yellow_accent">
                Shall we cast the spell of music in the background?
            </p>
            <div className="flex items-center justify-center space-x-4">
                <button onClick={toggle} className="px-4 py-2 border border-accent/30 border-solid hover:shadow-glass-sm rounded-2xl mr-2">Yes</button>
                <button onClick={onClose} className="px-4 py-2 border border-accent/30 border-solid hover:shadow-glass-sm rounded-2xl">No</button>
            </div>
        </div>

    </div>,

    document.getElementById("my-modal")
)

const Sound = () => {
    const audioRef1 = useRef(null);
    const audioRef2 = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const handleFirstUserInteraction = () => {
        const musicConsent = localStorage.getItem("musicConsent");
        if (musicConsent === "true" && !isPlaying) {
            audioRef1.current.play();
            setIsPlaying(true);
        }
        ["click", "keydown", "touchstart"].forEach((event) =>
            document.removeEventListener(event, handleFirstUserInteraction)
        );
    };

    useEffect(() => {
        const consent = localStorage.getItem("musicConsent");
        const consentTime = localStorage.getItem("consentTime");

        if (consent && consentTime && new Date(consentTime).getTime() + 3 * 24 * 60 * 60 * 1000 > new Date()) {
            setIsPlaying(consent === "true");
            if (consent === "true") {
                ["click", "keydown", "touchstart"].forEach((event) =>
                    document.addEventListener(event, handleFirstUserInteraction)
                );
            }
        } else {
            setShowModal(true)
        }

        // Play second audio when the first one ends
        audioRef1.current?.addEventListener("ended", () => {
            audioRef2.current.play();
        });

        return () => {
            audioRef1.current?.removeEventListener("ended", () => {
                audioRef2.current.play();
            });
        };
    }, []);

    const toggle = () => {
        const newState = !isPlaying;
        setIsPlaying(newState);
        if (newState) {
            audioRef1.current.currentTime = 0;
            audioRef2.current.currentTime = 0;
            audioRef1.current.play();
        } else {
            audioRef1.current.pause();
            audioRef2.current.pause();
        }
        localStorage.setItem("musicConsent", String(newState));
        
        // Set the consent time when user agrees
        if (newState) {
            localStorage.setItem("consentTime", new Date().toISOString());
        }
    
        setShowModal(false);
    };
    
    return (
        <div className="fixed top-4 right-2.5 xs:right-4 z-50 group">
            {
                showModal && <Modal onClose={() => setShowModal(false)} toggle={toggle} />
            }

            <audio ref={audioRef1}>
                <source src="/audio/Harry_Potter_theme.mp3" type="audio/mpeg" />
                Your Browser does not support audio
            </audio>
            <audio ref={audioRef2}>
                <source src="/audio/school-of-magic-inspired-by-harry-potter-289617.mp3" type="audio/mpeg" />
                Your Browser does not support audio
            </audio>

            <motion.button
                onClick={toggle}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1 }}
                className="w-10 h-10 xs:w-14 xs:h-14 text-foreground rounded-full flex items-center justify-center cursor-pointer z-50 p-2.5 xs:p-4 custom-bg1"
                aria-label={"home"}
                name={"home"}
            >
                {isPlaying ? (
                    <Volume2 className="w-full h-full text-foreground group-hover:text-accent" strokeWidth={1.5} />
                ) : (
                    <VolumeX className="w-full h-full text-foreground group-hover:text-accent" strokeWidth={1.5} />
                )}
            </motion.button>
        </div>
    );
};

export default Sound;
