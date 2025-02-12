'use client';
import Image from 'next/image';
import AnimateBgSectionPage from '@/components/AnimateBgSection';
import { TypeAnimation } from 'react-type-animation';
import {
  RiFilePdf2Line,
  RiGithubLine,
  RiGitlabLine,
  RiInstagramLine,
  RiLinkedinLine,
  RiMailLine,
  RiWhatsappLine
} from 'react-icons/ri';

export default function HomePage() {
  return (
    <div className="px-4">
      <section className="flex h-full min-h-screen items-center justify-center">
        <div className="relative z-10 flex h-full flex-col items-center justify-center">
          <Image className="relative" src="/logo.svg" alt="Mehdi Vaezi Logo" width={180} height={180} priority />
          <h1 className="mt-8 text-4xl font-bold">Mehdi Vaezi</h1>
          <h2 className="mb-2 text-[107%] font-light">Senior Front-End Developer</h2>
          <TypeAnimation
            className=""
            sequence={[
              1000,
              'Javascript Engineer',
              4000,
              'React/Next Developer',
              3000,
              'Vue/Nuxt Developer',
              3000,
              'React-Native Developer',
              2000
            ]}
            speed={60}
            deletionSpeed={80}
            wrapper={'h6'}
            repeat={Infinity}
          />
          <article className="mt-6 max-w-2xl">
            <p>
              I am a Software Engineer with over 15 years of experience in web development, specializing in front-end
              technologies. From early CSS techniques to modern frameworks, I have continuously adapted to advancements
              in the field.
            </p>
            <p>
              With over a decade of expertise in Vue.js and React, I have delivered numerous web and mobile applications
              using frameworks like Next.js, Nuxt.js, and React Native. I enjoy tackling challenges, staying updated
              with new technologies, and mentoring others.
            </p>
            <p className="mt-2">
              My core strengths lie in JavaScript and its frameworks, complemented by back- end knowledge of Node.js and
              Bun.js, enabling me to manage projects from concept to completion.
            </p>
          </article>
          <div className="mt-8 flex items-center justify-center gap-6">
            <a href="mailto:vmehdev@gmail.com" target="_blank">
              <RiMailLine size={25} />
            </a>
            <a href="https://gitlab.com/mvaezi" target="_blank">
              <RiGitlabLine size={25} />
            </a>
            <a href="https://github.com/vmehdi" target="_blank">
              <RiGithubLine size={25} />
            </a>
            <a href="https://www.linkedin.com/in/vmehdi/" target="_blank">
              <RiLinkedinLine size={25} />
            </a>
            <a href="https://www.instagram.com/_mvaezi/" target="_blank">
              <RiInstagramLine size={25} />
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=16282454637&text=Hello%2C%20I%20am%20sending%20a%20message%20through%20your%20site"
              target="_blank"
              rel="nofollow noopener"
            >
              <RiWhatsappLine size="25" />
            </a>
            <a href="/Mehdi_Vaezi-CV.pdf" target="_blank">
              <RiFilePdf2Line size="25" />
            </a>
          </div>
        </div>
        <AnimateBgSectionPage />
      </section>
    </div>
  );
}
