import Image from "next/image";
import bg from "../../../../public/background/great-hall-feature.jpg";
import Projectlist from "@/components/projects";
import { projectsData } from "../../data";
import ParticleTrail from "@/components/Cursor";
import RenderModel from "@/components/RenderModel";
// import Dumbledore from "@/components/models/Dumbledore";
import dynamic from "next/dynamic";

const Dumbledore = dynamic(() => import("@/components/models/Dumbledore"), { ssr: false },);

export default function Home() {
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

      {/* Project List Section */}
      <div className="absolute top-10 sm:top-2 md:top-0 right-0 sm:right-1 lg:right-4 z-10 text-center w-full lg:max-w-4xl h-screen overflow-y-auto pt-10 pb-20 scrollbar-hidden">
        <Projectlist projects={projectsData} />
      </div>

      {/* Dumbledore Model Section */}
      <div className="fixed top-24 sm:top-16 md:top-20 lg:top-20 -translate-x-1/2 lg:translate-x-0 left-1/2 lg:left-5 xl:left-10 h-[84vh] sm:h-[85vh] md:h-[90vh] lg:h-screen w-full sm:w-[50%] md:w-[45%] lg:w-[34%] flex items-center">
        <RenderModel environment="city">
          <Dumbledore />
        </RenderModel>
      </div>

      {/* Particle Trail Effect */}
      <ParticleTrail color="255, 251, 120" />
    </>
  );
}
