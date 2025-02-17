import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import FireFliesBackground from "@/components/FireFliesBackground";
import Sound from "@/components/Sound";
import Head from "next/head";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

// SEO Metadata
export const metadata = {
  title: "Aditya Kahandal | Full-Stack Developer",
  description: "Aditya Kahandal - A Full-Stack Developer specializing in MERN stack. Explore my projects, skills, and contact details.",
  keywords: "Aditya Kahandal, Full-Stack Developer, MERN, JavaScript, React, Node.js, Portfolio",
  authors: [{ name: "Aditya Kahandal", url: "https://adityakahandalportfolio.vercel.app" }],
  openGraph: {
    type: "website",
    url: "https://adityakahandalportfolio.vercel.app",
    title: "Aditya Kahandal | Full-Stack Developer",
    description: "Explore Aditya Kahandal's portfolio and projects."
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content="Aditya Kahandal" />

        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:url" content={metadata.openGraph.url} />
      
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@type": "Person",
            "name": "Aditya Kahandal",
            "url": "https://adityakahandalportfolio.vercel.app",
            "jobTitle": "Full-Stack Developer",
            "sameAs": [
              "https://github.com/Adikahandal",
              "https://www.linkedin.com/in/adityakahandal/"
            ]
          })
        }} />
      </Head>

      {/* Google Analytics */}
      <Script async src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX`} />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XXXXXXX');
        `}
      </Script>

      <body className={clsx(inter.variable, "bg-background text-foreground")}>
        {children}
        <FireFliesBackground />
        <Sound />
        <div id="my-modal" />
      </body>
    </html>
  );
}
