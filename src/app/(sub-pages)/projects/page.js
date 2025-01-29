import Image from "next/image";
import bg from "../../../../public/background/great-hall-feature.jpg";
import Projectlist from "@/components/projects";
import { projectsData } from "../../data";
import ParticleTrail from "@/components/Cursor";
import Sorting_hat from "@/components/models/sorting_hat";
import RenderModel from "@/components/RenderModel";

export default function Home() {
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


      <div className="relative z-10 text-center w-full max-w-4xl h-screen overflow-y-auto pt-10 pb-20 scrollbar-hidden ml-32">
        <Projectlist projects={projectsData} />
      </div>

      <div className="fixed top-20 left-10 h-screen w-80 z-20 flex items-center">
        <RenderModel environment="sunset" >
          <Sorting_hat />
        </RenderModel>
      </div>

      <ParticleTrail color="255, 251, 120" />
    </>
  );
}
