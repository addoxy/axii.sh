import { Button } from '@/components/vendor/button';
import { GridPattern } from '@/components/vendor/grid-pattern';
import { cn } from '@/lib/utils';

import { BorderSection } from '@/components/border-section';
import { ProjectItem } from '@/components/project-item';
import { Announcement, AnnouncementTitle } from '@/components/vendor/announcement';
import { PROJECTS } from '@/data/projects';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <BorderSection side="bottom" className="relative h-[600px] overflow-hidden border-dashed">
        <div className="mx-auto flex h-full w-full max-w-5xl flex-col items-center justify-center border-x border-dashed px-20">
          <GridPattern
            width={30}
            height={30}
            x={-1}
            y={-1}
            strokeDasharray={'4 2'}
            className={cn('[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]')}
          />
          <div className="z-10 flex flex-col items-center">
            <Announcement className="mb-6">
              <AnnouncementTitle>
                <div className="mr-2 size-1.5 rounded-full bg-green-500" />
                Available for work
              </AnnouncementTitle>
            </Announcement>
            <h1 className="text-center text-6xl leading-16 font-[900] text-zinc-800">
              CRAFTING DELIGHTFUL
              <br />
              WEB EXPERIENCES
            </h1>
            <p className="mt-10 px-32 text-center">
              Full-stack web developer passionate about building visually polished, high-performance
              websites that captivate and convert.
            </p>
            <div className="mt-10 flex items-center gap-2">
              <Button size="lg" className="h-12 px-10">
                Contact Me
              </Button>
              <Button size="lg" variant="outline" className="h-12 px-10">
                View Projects
              </Button>
            </div>
          </div>
        </div>
      </BorderSection>

      {/* Projects Section */}
      <div id="projects" className="mx-auto flex max-w-5xl flex-col py-14">
        <h2 className="text-center text-4xl font-[900] text-zinc-800">PROJECTS</h2>
        <p className="mt-4 text-center">
          Projects that highlight my skills in building thoughtful, scalable, and polished web
          applications.
        </p>
      </div>

      <BorderSection side="all" className="flex flex-col">
        {PROJECTS.map((project) => (
          <ProjectItem key={project.title} {...project} />
        ))}
      </BorderSection>
    </div>
  );
}
