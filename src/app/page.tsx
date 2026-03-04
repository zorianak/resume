
import Employer from "./components/Employer";
import { TextHeader } from "./components/TextHeader";
import { Header } from "./components/Header";
import * as employerArr from "./content/employers.json";

export default function Home() {
  const { employers } = employerArr;
  
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-left min-h-screen p-8 pb-20 md:gap-4 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Header />
      <main className="flex flex-col row-start-2 items-start space-y-4">
        <div>
          <TextHeader variant="h1" classes="inline-block text-transparent bg-clip-text bg-gradient-to-r from-white via-rose-400 to-white bg-[length:200%] animate-gradient leading-relaxed">Callie Holmes</TextHeader>
          <div className="mb-4 -mt-1 text-neutral-500">Front end engineer</div>
        </div>
        <div>I build accessible, performant, and secure digital experiences for the web.</div>
        <TextHeader variant="h2">About</TextHeader>
        <div>I&apos;m a full stack engineer (with a passion for front end, specifically) focused on creating intuitive and efficient user interfaces.</div>
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
