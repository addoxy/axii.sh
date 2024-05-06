import HeroLogo from "@/components/HeroLogo";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="mt-20 sm:mt-32">
        <MaxWidthWrapper className="flex flex-col justify-between lg:flex-row lg:gap-28 xl:gap-32">
          <div className="flex flex-col justify-between">
            <div className="flex flex-col">
              <h1 className="mb-8 text-center text-4xl font-bold text-primary sm:text-5xl lg:text-left lg:text-4xl xl:text-5xl">
                Web Developer, Designer & Notion Expert
              </h1>
              <p className="text-center text-base font-medium text-foreground sm:text-xl lg:text-left lg:text-lg xl:text-xl">
                I build{" "}
                <span className="text-primary">
                  beautiful, interactive and accessible
                </span>{" "}
                websites with a focus on seamless user experiences. I can also
                help you leverage the power of{" "}
                <span className="text-primary">Notion</span> to boost your{" "}
                <span className="text-primary">productivity</span>.
              </p>
            </div>
            <div className="mx-auto mt-14 flex gap-3 lg:mx-0 lg:mt-0">
              <Button
                asChild
                className="h-12 w-fit rounded-md bg-primary px-4 text-xl font-bold text-background"
              >
                <Link href="#contact-me">Contact me</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-12 w-fit gap-3 rounded-md border-cta bg-background px-4 text-xl font-semibold text-cta hover:bg-cta-hover/20"
              >
                <Link href="#contact-me" className="flex items-center gap-3">
                  View Projects
                  <ArrowRight className="size-6" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="mx-auto mt-20 grid shrink-0 grid-cols-4 gap-7 lg:mx-0 lg:mt-0 lg:grid-cols-2">
            <HeroLogo icon="react" />
            <HeroLogo icon="next" />
            <HeroLogo icon="tailwind" />
            <HeroLogo icon="notion" />
          </div>
        </MaxWidthWrapper>
      </section>
      <section>
        <MaxWidthWrapper className="flex flex-col">
          <div></div>
        </MaxWidthWrapper>
      </section>
    </main>
  );
}
