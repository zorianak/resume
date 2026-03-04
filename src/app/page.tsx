import { Employer } from "./components/Employer";
import { TextHeader } from "./components/TextHeader";
import { Header } from "./components/Header";
import * as employerArr from "./content/employers.json";

export default function Home() {
  const { employers } = employerArr;

  return (
    <div className="grid items-center justify-items-left min-h-screen p-20 pt-0 pb-20 md:gap-4 sm:p-8 sm:pt-0 font-[family-name:var(--font-geist-sans)]">
      <Header />
      <main className="flex flex-col row-start-2 items-start space-y-4">
        <div>
          <TextHeader
            variant="h1"
            classes="inline-block text-transparent bg-clip-text bg-gradient-to-r from-white via-rose-400 to-white bg-[length:200%] animate-gradient leading-relaxed"
          >
            Callie Holmes
          </TextHeader>
          <div className="mb-4 -mt-1 text-neutral-500">Front end engineer</div>
        </div>
        <div>
          <p>I build accessible, performant, and secure digital experiences for the web.</p>
        </div>
        <TextHeader variant="h2">
          <span id="about"></span>About
        </TextHeader>
        <div>
          <p>
            I&apos;m a full stack engineer (with a passion for front end, specifically) focused on creating intuitive
            and efficient user interfaces. I love working between UX design and UX engineering with clean, scalable
            code, but I&apos;m not afraid to get my hands dirty with the API either. Historically, I&apos;ve worked with
            DustJS, Mustache, Handlebars, ReactJS, and AngularJS. While I am most at home in TypeScript, I have also
            proven my chops with C++, C#, Java, and Python.
          </p>
          <p>
            Currently, I am a senior Front End Engineer at Adapter Group. I work on (almost) all aspects of our web
            application, having driven a migration to a TurboRepo monorepo using Vite, ReactJS, TypeScript, and
            TailwindCSS 4. I have also worked with our product team to lead the development side of creating our
            component library and design system, as well as writing guidelines for AI coding companions to ensure
            standards regardless of who touches the code. I have also pushed for accessibility across the team and
            testing standards.
          </p>
          <p>
            Previously, I&apos;ve also worked at <strong>Microsoft</strong>, <strong>Amazon</strong>,{" "}
            <strong>Wowhead</strong>, <strong>Ask.com</strong>, and various other small-to-medium organizations. While I
            have a lot of experience with greenfield development, brownfield and legacy projects have also significantly
            impacted my career.
          </p>
          <p>
            Outside of work, you might find me streaming my coding and gaming on Twitch, riding horses badly, exploring
            new projects, or making yet another build in Factorio.
          </p>
        </div>
        <TextHeader variant="h2" classes="col-span-full">
          <span id="experience"></span>Experience
        </TextHeader>
        {employers.map((employer, index) => {
          return <Employer key={index} {...employer} />;
        })}
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
