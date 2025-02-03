"use client"
import Image from "next/image";
import bg from "../../public/background/background_image.png"
import RenderModel from "@/components/RenderModel";
import Dragon_model from "@/components/models/Dragon";
import { Phoenix } from "@/components/models/Phoenix";
import { Wizard } from "@/components/models/Wizard";
import Navigation from "@/components/navigation";
import ParticleTrail from "@/components/Cursor";
import { useState, useEffect } from "react";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 770);
    };
    
    handleResize(); // Initialize on load
    window.addEventListener("resize", handleResize);
    
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <main className="relative w-full h-screen flex flex-col">
      {/* Background Image */}
      <Image src={bg} alt="background-img" fill className="absolute top-0 left-0 w-full h-full object-cover object-center -z-50 opacity-80" />

      {/* Navigation Section */}
      <Navigation />

      {/* Models Section */}
      <div className="flex flex-col md:flex-row gap-4 w-full h-full relative justify-center items-center">
        {!isMobile && (
          <div className="w-full md:w-1/3 h-full flex justify-center">
            <RenderModel environment="city" className="w-full h-full">
              <Phoenix />
            </RenderModel>
          </div>
        )}

        <div className={`w-full ${isMobile ? "w-full" : "md:w-1/3"} h-full flex justify-center`}>
          <RenderModel environment="forest" className="w-full h-full">
            <Wizard />
          </RenderModel>
        </div>

        {!isMobile && (
          <div className="w-full md:w-1/3 h-full flex justify-center">
            <RenderModel environment="forest" className="w-full h-full">
              <Dragon_model />
            </RenderModel>
          </div>
        )}
      </div>

      <ParticleTrail color='202, 235, 255'/>
    </main>
  );
}
