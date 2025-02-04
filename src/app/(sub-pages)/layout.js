import HomeBtn from "@/components/HomeBtn";


export default function SubPagesLayout({ children }) {
  return (
    <main className="w-full min-h-screen flex flex-col items-center justify-center relative px-8 xs:px-16 lg:px-32 py-10">
        <HomeBtn/>  
        {children}

    </main>
  );
}
