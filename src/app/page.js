import Image from "next/image";
import bg from "../../public/background/background_image.png"
import RenderModel from "@/components/RenderModel";
import Dragon_model from "@/components/models/Dragon";
import { Phoenix } from "@/components/models/Phoenix";
import { Wizard } from "@/components/models/Wizard";
import Navigation from "@/components/navigation";

export default function Home() {
  return (
    <main className="relative w-full h-screen flex">
      {/* Background Image */}
      <Image src={bg} alt="background-img" fill className="absolute top-0 left-0 w-full h-full object-cover object-center -z-50 opacity-80" />
      

      {/* Navigation Section */}
      <Navigation />

      {/* Models Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full h-full relative">
        <RenderModel environment="city" className="w-full h-full">
          <Phoenix />
        </RenderModel>
        <RenderModel environment="forest" className="w-full h-full">
          <Wizard />
        </RenderModel>
        <RenderModel environment="forest" className="w-full h-full">
          <Dragon_model />
        </RenderModel>
      </div>
    </main>
  );
}

