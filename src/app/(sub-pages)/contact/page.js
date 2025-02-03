
import Image from "next/image";
import bg from "../../../../public/background/azkaban_prison.jpeg";
import ParticleTrail from "@/components/Cursor";
import Dementor from "@/components/models/dementor";
import RenderModel from "@/components/RenderModel";
import Form from "@/components/contact/Form";

export default function Contact() {

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

      <div className="absolute top-10 left-0 z-0 w-full h-full ">
        <RenderModel environment={"city"}>
          <Dementor />
        </RenderModel>
      </div>

      <article className="absolute top-10 w-full flex flex-row items-center justify-center px-36 py-4 space-x-16">
        {/* Left Section - Form with Wizard Prompt */}
        <div className="w-2/5 flex flex-col items-center space-y-8">
          <div className="text-accent text-2xl "> <strong className="text-red-500 text-3xl ">Caution!!</strong> <br/> Filling This may backfire, As the Spell is risky </div>
          <Form />
        </div>

        {/* Right Section - Article Content */}
        <div className="w-3/5 flex flex-col items-center text-center space-y-6 opacity-75">
          <h1 className="text-yellow_accent font-extrabold text-8xl capitalize">
            Accio! <span className="text-accent font-medium capitalize">Aditya</span>
          </h1>
          <div className="pt-8 space-y-6">
            <div className="font-medium text-4xl text-blue_accent py-2">
              Step into the Shadows, Where Destiny Awaits
            </div>
            <div className="text-accent font-medium text-lg px-4 leading-relaxed">
              Whether you seek to forge <strong className="text-yellow_accent font-bold">powerful alliances</strong>,
              uncover <strong className="text-yellow_accent font-bold">hidden truths</strong>,
              or leave your mark upon the wizarding world, your words shall not go unnoticed.
              Inscribe your missive below, and let the enchanted currents carry it to the
              <strong className="text-yellow_accent capitalize font-bold"> Halls of Hogwarts</strong>.
            </div>
            <div className="text-accent font-medium text-lg px-4 leading-relaxed">
              But beware—only those
              <strong className="text-yellow_accent font-bold"> worthy of magic</strong>
              shall receive a response.
              If you are but a mere <strong className="text-yellow_accent font-bold">Muggle</strong>,
              your words will fade into the void, never to be answered.
            </div>
            <div className="pt-10 text-3xl text-center text-red-400 font-bold">
              The Sorting awaits… dare you take the first step?
            </div>
          </div>
        </div>
      </article>




      {/* Particle Cursor Trail */}
      <ParticleTrail color="218, 218, 218" />
    </>
  );
}
