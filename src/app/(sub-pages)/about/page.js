'use client';

import { useEffect } from "react";
import Image from "next/image";
import bg from "../../../../public/background/about_us_hogwart_library.jpg";
import ParticleTrail from "@/components/Cursor";
import Sorting_hat from "@/components/models/sorting_hat";
import RenderModel from "@/components/RenderModel";
import AboutDetails from "@/components/about";

export default function Home() {
  useEffect(() => { 
    const body = document.body;
    body.style.overflow = "auto"; 
    body.style.scrollbarWidth = "none"; 
    body.style.msOverflowStyle = "none"; 

    const style = document.createElement('style');
    style.innerHTML = `
      ::-webkit-scrollbar {
        display: none;
      }
    `;
    document.head.appendChild(style);

    return () => {
      body.style.overflow = "auto";
      style.remove();
    };
  }, []);

  return (
    <>
      {/* Fixed Background Image */}
      <div className="fixed top-0 left-0 w-full h-full z-0">
        <Image
          src={bg}
          alt="background-img"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="w-full h-full opacity-40"
        />
      </div>

      <div className="absolute top-10 left-0 z-10 w-full h-screen pointer-events-none">
        <RenderModel environment="sunset">
          <Sorting_hat />
        </RenderModel>
      </div>

      <div className="relative w-full h-screen flex flex-col items-center justify-center">
        <div className="absolute flex flex-col w-full items-center text-center top-[60%] left-1/2 -translate-y-1/4 -translate-x-1/2">
          <h1 className="font-bold text-9xl text-yellow_accent pb-3">Aditya Kahandal</h1>
          <p className="font-light text-foreground text-lg">The Dark Wizard behind the Portfolio</p>
        </div>
      </div>

      <AboutDetails />

      {/* Particle Cursor Trail */}
      <ParticleTrail color="255, 251, 120" />
    </>
  );
}
