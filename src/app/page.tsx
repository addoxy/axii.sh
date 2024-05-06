import HeroLogo from "@/components/HeroLogo";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="mt-32">
        <MaxWidthWrapper className="flex justify-between gap-32">
          <div className="flex flex-col justify-between">
            <div className="flex flex-col">
              <h1 className="mb-8 text-5xl font-bold text-primary">
                Web Developer, Designer & Notion Expert
              </h1>
              <p className="text-xl font-medium text-foreground">
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
            <div className="flex gap-3">
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
          <div className="grid shrink-0 grid-cols-2 gap-7">
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
