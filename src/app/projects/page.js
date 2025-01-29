import Image from "next/image";
import bg from "../../../public/background/great-hall-feature.jpg"


export default function Home() {
  return (
    <main className=" w-full h-screen flex">
      <Image src={bg} alt="background-img" fill className="absolute top-0 left-0 w-full h-full object-cover object-center -z-50 opacity-80" />

      
    </main>
  );
}
