"use client"
import Image from "next/image";
import bg from "../../../../public/background/azkaban_prison.jpeg";
import ParticleTrail from "@/components/Cursor";
// import Dementor from "@/components/models/dementor";
import RenderModel from "@/components/RenderModel";
import Form from "@/components/contact/Form";
import dynamic from "next/dynamic";

const Dementor = dynamic(() => import("@/components/models/dementor"), { ssr: false },);

export default function Contact() {
  return (
    <>
      {/* Fixed Background Image */}
      <div className="fixed top-0 left-0 w-full h-full z-0">
        <Image
          priority sizes="100vw"
          src={bg}
          alt="background-img"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="w-full h-full opacity-40"
        />
      </div>

      {/* Dementor Model */}
      <div className="fixed top-0 left-0 z-0 w-full h-full">
        <RenderModel environment="city">
          <Dementor />
        </RenderModel>
      </div>

      {/* Main Container */}
      <div className="relative w-full h-full overflow-hidden">
        <article className="relative w-full flex flex-col items-center justify-center px-6 py-10 space-y-12 pb-16 overflow-hidden">
          {/* Header Section */}
          <div className="w-full text-center space-y-6 ">
            <h1 className="text-yellow_accent font-extrabold text-6xl sm:text-7xl lg:text-8xl capitalize">
              Accio! <span className="text-accent font-medium capitalize">Aditya</span>
            </h1>
            <div className=" pt-0 lg:pt-4 space-y-6">
              <div className="font-medium text-xl sm:text-3xl lg:text-4xl  text-blue_accent py-2">
                Step into the Shadows, Where Destiny Awaits
              </div>
              <p className="text-accent text-sm xs:text-md lg:text-lg px-4 leading-relaxed">
                Whether you seek to forge <strong className="text-yellow_accent font-bold">powerful alliances</strong>,
                uncover <strong className="text-yellow_accent font-bold">hidden truths</strong>,
                or leave your mark upon the wizarding world, your words shall not go unnoticed.
                Inscribe your missive below, and let the enchanted currents carry it to the
                <strong className="text-yellow_accent capitalize font-bold"> Halls of Hogwarts</strong>.
              </p>
              <p className="text-accent text-sm xs:text-md lg:text-lg px-4 leading-relaxed">
                But beware—only those
                <strong className="text-yellow_accent font-bold"> worthy of magic </strong>
                shall receive a response.
                If you are but a mere <strong className="text-yellow_accent font-bold">Muggle</strong>,
                your words will fade into the void, never to be answered.
              </p>
              <div className="text-xl sm:text-2xl lg:text-3xl text-center text-red-500 font-bold ">
                The Sorting awaits… dare you take the first step?
              </div>
            </div>
          </div>

          {/* Warning Message */}
          <div className="w-full text-center pt-2 md:pt-4 lg:pt-6 space-y-">
            <strong className="text-green-400 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">Caution!!</strong> <br />
            <div className="  text-md md:text-lg ">
              Filling This may backfire, As the Spell is risky
            </div>
          </div>

          {/* Form Section */}
          <div className="w-full flex justify-center">
            <Form />
          </div>
        </article>
      </div>

      {/* Particle Cursor Trail */}
      <ParticleTrail color="218, 218, 218" />
    </>
  );
}