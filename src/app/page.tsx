import Image from "next/image";
import Employer from "./components/Employer";
import * as employerArr from "./content/employers.json";

export default function Home() {
  const { employers } = employerArr;
  
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-4xl font-bold mb-4 inline-block text-transparent bg-clip-text bg-gradient-to-r from-white via-rose-400 to-white bg-[length:200%] animate-gradient leading-relaxed py-2">Callie Holmes</h1>
        <h2 className="text-2xl leading-relaxed ">Hello, world! I'm Callie and I want to make your website do things.</h2>
        <div>A front-end engineer with a passion for engineering excellence and accessibility. 
          Over a decade of experience that includes ReactJS, JavaScript ES6, TypeScript, enzyme, React-Testing-Library (RTL), Cypress, Playwright, 
          git, CI/CD, LESS, SASS, and Tailwind.</div>

        <div className="grid bg-white gap-4 text-neutral-950 rounded-lg auto-cols-fr p-4 w-full">
          <h2 className="col-span-full text-xl font-semibold">Work experience</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {
              employers.map((employer, index) => {
                return (
                  <Employer
                    key={index}
                    {...employer}
                  />
                );
              })
            }
          </div>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
