import { buttonVariants } from '@/components/vendor/button';
import { GridPattern } from '@/components/vendor/grid-pattern';
import { cn } from '@/lib/utils';

import { ArticleItem } from '@/components/article-item';
import { BorderSection } from '@/components/border-section';
import { GithubIcon, GmailIcon, LinkedinIcon, TwitterIcon } from '@/components/icons';
import { ProjectItem } from '@/components/project-item';
import { Announcement, AnnouncementTitle } from '@/components/vendor/announcement';
import { ARTICLES } from '@/data/articles';
import { PROJECTS } from '@/data/projects';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <BorderSection
        side="bottom"
        className="relative h-[480px] overflow-hidden border-dashed sm:h-[600px]"
      >
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
            <h1 className="text-center text-2xl font-[900] sm:text-6xl sm:leading-16">
              CRAFTING DELIGHTFUL
              <br />
              WEB EXPERIENCES
            </h1>
            <p className="mt-6 px-4 text-center sm:mt-10 sm:px-32">
              Full-stack web developer passionate about building visually polished, high-performance
              websites that captivate and convert.
            </p>
            <div className="mt-10 flex items-center gap-2">
              <a
                href="#contact"
                className={cn(
                  buttonVariants({
                    className: 'h-12 px-10',
                    size: 'lg',
                  })
                )}
              >
                Contact Me
              </a>
              <a
                href="#projects"
                className={cn(
                  buttonVariants({
                    className: 'h-12 px-10',
                    size: 'lg',
                    variant: 'outline',
                  })
                )}
              >
                View Projects
              </a>
            </div>
          </div>
        </div>
      </BorderSection>

      {/* Projects Section */}
      <div id="projects" className="mx-auto flex max-w-5xl flex-col py-14">
        <h2 className="text-center text-2xl font-[900] sm:text-4xl">PROJECTS</h2>
        <p className="mt-4 px-4 text-center">
          Projects that highlight my skills in building thoughtful, scalable, and polished web
          applications.
        </p>
      </div>

      <BorderSection side="all" className="flex flex-col">
        {PROJECTS.map((project) => (
          <ProjectItem key={project.title} {...project} />
        ))}
      </BorderSection>

      {/* Articles Section */}
      <div id="articles" className="mx-auto flex max-w-5xl flex-col py-14">
        <h2 className="text-center text-2xl font-[900] sm:text-4xl">ARTICLES</h2>
        <p className="mt-4 px-4 text-center">
          Articles and guides sharing my insights, ideas, and how-tos from experience.
        </p>
      </div>

      <BorderSection side="all" className="flex flex-col">
        <div
          className={cn('mx-auto grid max-w-5xl grid-cols-2', ARTICLES.length < 2 && 'grid-cols-1')}
        >
          {ARTICLES.map((article) => (
            <ArticleItem key={article.title} {...article} />
          ))}
        </div>
      </BorderSection>

      {/* Contact Me Section */}
      <div id="contact" className="mx-auto flex max-w-5xl flex-col py-16">
        <div className="relative">
          <h2 className="relative text-center text-2xl font-[900] sm:text-4xl">CONTACT ME</h2>
        </div>

        <p className="mx-auto mt-4 max-w-2xl px-4 text-center">
          Let's connect and collaborate! Reach out through any of these platforms.
        </p>

        <div className="mx-auto mt-10 flex items-center gap-4 sm:gap-6">
          <a
            target="_blank"
            href="mailto:aditya132003@gmail.com"
            className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-red-50 to-red-100 p-4 transition-all duration-600 hover:scale-110 hover:from-red-500 hover:to-red-600 hover:shadow-lg"
          >
            <GmailIcon className="size-8 text-white transition-colors duration-300" />
          </a>

          <a
            target="_blank"
            href="https://x.com/axiidotsh"
            className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-zinc-700 to-zinc-800 p-4 transition-all duration-600 hover:scale-110 hover:from-zinc-800 hover:to-zinc-900 hover:shadow-lg"
          >
            <TwitterIcon className="size-8 text-white transition-colors duration-300" />
          </a>

          <a
            target="_blank"
            href="https://www.linkedin.com/in/aditya-kumar-25605b238/"
            className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 p-4 transition-all duration-600 hover:scale-110 hover:from-blue-500 hover:to-blue-300 hover:shadow-lg"
          >
            <LinkedinIcon className="size-8 transition-colors duration-300" />
          </a>

          <a
            target="_blank"
            href="https://github.com/addoxy"
            className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 p-4 transition-all duration-600 hover:scale-110 hover:from-gray-700 hover:to-gray-800 hover:shadow-lg"
          >
            <GithubIcon className="size-8 text-white" />
          </a>
        </div>
      </div>

      {/* Footer Section */}
      <div className="w-full border-t border-dashed py-10">
        <div className="mx-auto max-w-5xl">
          <p className="text-center text-sm text-zinc-500">
            © {new Date().getFullYear()} Aditya Kumar. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
