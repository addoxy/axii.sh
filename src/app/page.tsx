'use client';

import { ArticleItem } from '@/components/article-item';
import { BorderSection } from '@/components/border-section';
import { GithubIcon, MailIcon, TwitterIcon } from '@/components/icons';
import { ProjectItem } from '@/components/project-item';
import { SocialCard } from '@/components/social-card';
import { Announcement, AnnouncementTitle } from '@/components/vendor/announcement';
import { Button, buttonVariants } from '@/components/vendor/button';
import { GridPattern } from '@/components/vendor/grid-pattern';
import { ARTICLES } from '@/data/articles';
import { PROJECTS } from '@/data/projects';
import { cn, scrollToId } from '@/lib/utils';
import { ArrowUpRight } from 'lucide-react';

const SocialSection = () => {
  return (
    <div className="mx-auto mt-10 flex items-center gap-2">
      <SocialCard
        href="mailto:aditya132003@gmail.com"
        icon={MailIcon}
        content="Get in touch"
        caption="aditya132003@gmail.com"
      />
      <SocialCard
        href="https://x.com/axiidotsh"
        icon={TwitterIcon}
        className="size-3"
        content="Follow on X"
        caption="@axii.sh"
      />
      <SocialCard
        href="https://github.com/addoxy"
        icon={GithubIcon}
        content="View my GitHub"
        caption="github.com/axiidotsh"
      />
    </div>
  );
};

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
                Open for work
              </AnnouncementTitle>
            </Announcement>
            <h1 className="text-center text-3xl font-[900] sm:text-6xl sm:leading-16">
              Crafting Delightful
              <br />
              Web Experiences
            </h1>
            <p className="mt-6 px-4 text-center sm:mt-10 sm:px-32">
              Full-stack web developer passionate about building visually polished, high-performance
              websites that captivate and convert.
            </p>
            <div className="mt-10 flex items-center gap-2">
              <Button
                className="h-12 px-10"
                size="lg"
                onClick={() =>
                  scrollToId({
                    id: 'projects',
                    offset: -100,
                  })
                }
              >
                View My Projects
              </Button>
            </div>
            <SocialSection />
          </div>
        </div>
      </BorderSection>

      {/* Projects Section */}
      <div id="projects" className="mx-auto flex max-w-5xl flex-col py-14">
        <h2 className="text-center text-2xl font-extrabold sm:text-4xl">Projects</h2>
        <p className="mt-4 px-4 text-center">
          Projects that highlight my skills in building thoughtful, scalable, and polished web
          applications.
        </p>
      </div>

      <BorderSection side="all" className="flex flex-col">
        {PROJECTS.map((project, index) => (
          <ProjectItem
            key={project.title}
            {...project}
            className={cn(index === PROJECTS.length - 1 && 'border-b-0')}
          />
        ))}
      </BorderSection>

      {/* Blog Section */}
      <div id="blog" className="mx-auto flex max-w-5xl flex-col py-14">
        <h2 className="text-center text-2xl font-extrabold sm:text-4xl">Blogs</h2>
        <p className="mt-4 px-4 text-center">
          Blogs sharing my insights, ideas, and how-tos from experience.
        </p>
        <a
          href="https://blog.axii.xyz/"
          target="_blank"
          className={buttonVariants({
            variant: 'secondary',
            size: 'sm',
            className: 'group mx-auto mt-4 w-fit !px-4',
          })}
        >
          Explore more
          <ArrowUpRight className="transition-transform duration-500 group-hover:translate-x-[1px] group-hover:-translate-y-[1px]" />
        </a>
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
          <h2 className="relative text-center text-2xl font-extrabold sm:text-4xl">Contact Me</h2>
        </div>
        <p className="mx-auto mt-4 max-w-2xl px-4 text-center">
          Let&apos;s connect and collaborate! Reach out through any of these platforms.
        </p>
        <SocialSection />
      </div>

      {/* Footer Section */}
      <div className="w-full border-t border-dashed py-10">
        <div className="mx-auto max-w-5xl">
          <p className="text-center text-sm text-zinc-500">
            © {new Date().getFullYear()} axii.sh. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
