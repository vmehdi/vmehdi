"use client";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { FooterLinks } from "@/components/Links";
import { ColourfulText } from "@/components/ui/ColourfulText";

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "Person",
    name: "Mehdi Vaezi",
    url: "https://vmehdi.com/",
    image: "https://vmehdi.com/logo.svg",
    jobTitle: "Front-End Developer",
    worksFor: {
      "@type": "Organization",
      name: "Self"
    },
    sameAs: ["https://github.com/vmehdi", "https://gitlab.com/mvaezi", "https://www.linkedin.com/in/vmehdi/"]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="container">
        <section className="flex h-full items-center justify-center pt-8">
          <div className="relative z-10 flex h-full flex-col items-center justify-center">
            <Image className="relative" src="/logo.svg" alt="Mehdi Vaezi Logo" width={180} height={180} priority />
            <h1 className="mt-8 text-4xl font-bold">
              <ColourfulText text="Mehdi Vaezi" />
            </h1>
            <h2 className="mb-2 text-xl font-light">Senior Front-End Developer</h2>
            <TypeAnimation
              className="text-xl"
              sequence={[1000, "Javascript Engineer", 4000, "React/Next Developer", 3000, "Vue/Nuxt Developer", 3000, "React-Native Developer", 2000]}
              speed={60}
              deletionSpeed={80}
              wrapper={"h5"}
              repeat={Infinity}
            />
            <article className="mt-6 flex max-w-2xl flex-col gap-2 text-center md:text-left">
              <p>
                I am a Software Engineer with over 15 years of experience in web development, specializing in front-end technologies. From early CSS techniques
                to modern frameworks, I have continuously adapted to advancements in the field.
              </p>
              <p>
                With over a decade of expertise in Vue.js and React, I have delivered numerous web and mobile applications using frameworks like Next.js,
                Nuxt.js, and React Native. I enjoy tackling challenges, staying updated with new technologies, and mentoring others.
              </p>
              <p className="mt-2">
                My core strengths lie in JavaScript and its frameworks, complemented by back- end knowledge of Node.js and Bun.js, enabling me to manage
                projects from concept to completion.
              </p>
            </article>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 p-6">
              <FooterLinks />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
