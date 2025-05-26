import { CardBody, CardContainer, CardItem } from "@/components/ui/3dCard";
import Image from "next/image";

export default function ProjectsPage() {
  return (
    <div className="relative z-10 flex flex-col items-center justify-center py-24">
      <h1 className="text-4xl font-bold">Projects</h1>
      <div className="grid gap-8 lg:grid-cols-2">
        <CardContainer className="inter-var w-full">
          <CardBody className="group/card relative h-auto w-auto rounded-xl border border-black/[0.1]  p-6 sm:w-[30rem] dark:border-white/[0.2] dark:bg-black dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]">
            <CardItem translateZ="50" className="text-xl font-bold ">
              Kamandar
            </CardItem>
            <CardItem as="p" translateZ="60" className="mt-2 max-w-sm text-sm ">
              Hover over this card to unleash the power of CSS perspective
            </CardItem>
            <CardItem translateZ="100" className="mt-4 w-full">
              <Image
                src="/images/kamandar.jpg"
                height="1000"
                width="1000"
                className="h-60 w-full rounded-xl object-cover group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <div className="mt-20 flex items-center justify-between">
              <CardItem translateZ={20} as="a" href="https://twitter.com/mannupaaji" target="__blank" className="rounded-xl px-4 py-2 text-xs font-normal">
                Try now →
              </CardItem>
              <CardItem translateZ={20} as="button" className="rounded-xl bg-black px-4 py-2 text-xs font-bold text-white dark:bg-white dark:text-black">
                Sign up
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
        <CardContainer className="inter-var">
          <CardBody className="group/card relative h-auto w-auto rounded-xl border border-black/[0.1] bg-gray-50 p-6 sm:w-[30rem] dark:border-white/[0.2] dark:bg-black dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]  ">
            <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white">
              Kamanda
            </CardItem>
            <CardItem as="p" translateZ="60" className="mt-2 max-w-sm text-sm text-neutral-500 dark:text-neutral-300">
              Hover over this card to unleash the power of CSS perspective
            </CardItem>
            <CardItem translateZ="100" className="mt-4 w-full">
              <Image
                src="/images/kamandar.jpg"
                height="1000"
                width="1000"
                className="h-60 w-full rounded-xl object-cover group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <div className="mt-20 flex items-center justify-between">
              <CardItem
                translateZ={20}
                as="a"
                href="https://twitter.com/mannupaaji"
                target="__blank"
                className="rounded-xl px-4 py-2 text-xs font-normal dark:text-white"
              >
                Try now →
              </CardItem>
              <CardItem translateZ={20} as="button" className="rounded-xl bg-black px-4 py-2 text-xs font-bold text-white dark:bg-white dark:text-black">
                Sign up
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      </div>
      {/* /.grid */}
    </div>
  );
}
