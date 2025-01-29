import HomeBtn from "@/components/HomeBtn";


export default function SubPagesLayout({ children }) {
  return (
    <main className="w-full min-h-screen flex flex-col items-center justify-center relative">
        <HomeBtn/>  
        {children}

    </main>
  );
}
