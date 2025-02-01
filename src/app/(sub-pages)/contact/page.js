'use client';

import { useEffect } from "react";
import Image from "next/image";
import bg from "../../../../public/background/azkaban_prison.jpeg";
import ParticleTrail from "@/components/Cursor";
import Dementor from "@/components/models/dementor";
import RenderModel from "@/components/RenderModel";

export default function Contact() {
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

      <div className="absolute top-10 left-0 z-0 w-full h-full overflow-hidden pointer-events-none">
        <RenderModel environment={"city"}>
          <Dementor />
        </RenderModel>
      </div>
      <div className="absolute top-10 left-0 z-0 w-full h-screen overflow-hidden pointer-events-none">
        <RenderModel environment={"city"}>
          <Dementor />
        </RenderModel>
      </div>


      <article className="relative -top-16 translate-x-1/4 w-full flex flex-col items-center justify-center space-y-16 !px-36">
        <div className="flex flex-col items-center justify-center space-y-6 w-3/4">
          <h1 className="text-yellow_accent font-extrabold text-center text-8xl capitalize">
            Accio! <span className="text-blue_accent font-medium text-center capitalize">Aditya</span>
          </h1>
          <div className="pt-8 space-y-3">
            <strong className="font-medium text-center text-3xl text-yellow_accent">
              Step into the Shadows, Where Destiny Awaits
            </strong>
            <div className="text-accent font-medium text-1xl">
              Whether you seek to forge powerful alliances, uncover hidden truths, or leave your mark upon the wizarding world, your words shall not go unnoticed. Inscribe your missive below, and let the enchanted currents carry it to the halls of <strong>Hogwarts</strong>.
            </div>
            <div className="text-accent">
              But beware—only those <strong>worthy of magic</strong> shall receive a response. If you are but a mere <strong>Muggle</strong>, your words will fade into the void, never to be answered.
            </div>

            <strong className="text-blue_accent">The Sorting awaits… dare you take the first step?</strong>
          </div>
        </div>
      </article>

      {/* Particle Cursor Trail */}
      <ParticleTrail color="218, 218, 218" />
    </>
  );
}
