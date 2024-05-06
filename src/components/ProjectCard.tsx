import { Button } from "./ui/button";
import Tablet from "./ui/tablet";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

type ProjectCardProps = {
  title: string;
  description: string;
  imagePath: string;
  href: string;
};

const ProjectCard = (props: ProjectCardProps) => {
  const { title, description, imagePath, href } = props;

  return (
    <div className="bg-card flex w-full gap-10 rounded-3xl border border-border px-14 py-12">
      <div className="flex flex-col justify-between">
        <div className="flex flex-col">
          <h3 className="text-3xl font-semibold text-primary">{title}</h3>
          <p className="mt-11 text-lg font-medium text-foreground">
            {description}
          </p>
        </div>
        <Button
          asChild
          className="h-12 w-fit rounded-md bg-primary px-4 text-xl font-bold text-background"
        >
          <a href={href} target="_blank" className="flex items-center gap-3">
            Visit Project
            <ArrowRight className="size-6" />
          </a>
        </Button>
      </div>
      <Tablet imagePath={imagePath} />
    </div>
  );
};

export default ProjectCard;
