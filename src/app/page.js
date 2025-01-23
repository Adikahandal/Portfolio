import Image from "next/image";
import bg from "../../public/background/"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <Image src={bg} alt="background-img" className="w-full h-full object-cover object-center opacity-25" />
      
    </main>
  );
}
