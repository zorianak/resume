
import Employer from "./components/Employer";
import { TextHeader } from "./components/TextHeader";
import { Header } from "./components/Header";
import * as employerArr from "./content/employers.json";

export default function Home() {
  const { employers } = employerArr;
  
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 md:gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Header />
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <TextHeader variant="h1" classes="mb-4 inline-block text-transparent bg-clip-text bg-gradient-to-r from-white via-rose-400 to-white bg-[length:200%] animate-gradient leading-relaxed py-2">Callie Holmes</TextHeader>
        <TextHeader variant="h2">Hello, world! I&apos;m Callie and I want to make your website do things.</TextHeader>
        <div>A front-end engineer with a passion for engineering excellence and accessibility. 
          Over a decade of experience that includes ReactJS, JavaScript ES6, TypeScript, enzyme, React-Testing-Library (RTL), Cypress, Playwright, 
          git, CI/CD, LESS, SASS, and Tailwind.</div>

        <div className="grid bg-white gap-4 text-neutral-950 rounded-lg auto-cols-fr p-4 w-full">
          <TextHeader variant="h2" classes="col-span-full">Work experience</TextHeader>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
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

      </footer>
    </div>
  );
}
