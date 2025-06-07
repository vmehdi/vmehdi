import { CardBody, CardContainer, CardItem } from "@/components/ui/3dCard";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { __DEV__ } from "@/utils/helper";
import { UnderConstruction } from "@/components/ui/UnderConstruction";

const PROJECTS = [
  {
    title: "Kamandar",
    description: "All-in-one trading platform with stocks, funds, options, social network, and market insights for easy decisions.",
    image: "/images/kamandar.jpg",
    link: "https://kamandar.ir"
  },
  {
    title: "Tarafdari",
    description: "Hover over this card to unleash the power of CSS perspective",
    image: "/images/tarafdari.jpg",
    link: "https://tarafdari.com"
  },
  {
    title: "Tazebar",
    description: "Hover over this card to unleash the power of CSS perspective",
    image: "/images/tazebar.jpg",
    link: "https://tazebar.com"
  }
];
export default function ProjectsPage() {
  if (__DEV__) {
    return (
      <div className="relative z-10 flex flex-col items-center justify-center">
        <h1 className="mt-8 text-4xl font-bold">Projects</h1>
        <h4></h4>
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
        {/* /.grid */}
      </div>
    );
  }

  return (
    <div className="relative flex flex-col items-center justify-center">
      <h2 className="mt-8 mb-24 text-3xl font-bold ">Under Construction</h2>
      <UnderConstruction />
    </div>
  );
}

const ProjectCard = ({ project }: any) => {
  return (
    <CardContainer className="inter-var">
      <CardBody className="group/card relative h-auto w-auto rounded-xl border border-black/[0.1] bg-white/10 p-6 sm:w-[30rem] dark:border-white/[0.2] dark:bg-white/10 dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]  ">
        <CardItem translateZ="50" className="text-xl font-bold ">
          {project.title}
        </CardItem>
        <CardItem as="p" translateZ="60" className="mt-2 max-w-sm text-sm ">
          {project.description}
        </CardItem>
        <CardItem translateZ="100" className="mt-4 w-full">
          <Image src={project.image} height="1000" width="1000" className="h-60 w-full rounded-xl object-cover group-hover/card:shadow-xl" alt="thumbnail" />
        </CardItem>
        <div className="mt-20 flex items-center justify-between">
          <CardItem translateZ={20} as="button" className="rounded-xl bg-black px-4 py-2 text-xs font-bold text-white dark:bg-white dark:text-black">
            More...
          </CardItem>
          <CardItem translateZ={20} as="a" href={project.link} target="__blank" className="py-2">
            <ExternalLink size={24} />
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
};
