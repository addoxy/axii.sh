'use client';

import { GitHubIcon, LinkedInIcon } from '@/components/icons';
import { MaxWidthWrapper } from '@/components/max-width-wrapper';
import { Project } from '@/components/project';
import { SectionIndicator } from '@/components/section-indicator';
import { SkillBadge } from '@/components/skill-badge';
import { Tooltip } from '@/components/tooltip';
import { buttonVariants } from '@/components/vendor/button';
import { PROJECTS } from '@/data/projects';
import { backendSkills, frontendSkills, otherSkills } from '@/data/skills';
import { WORK_PROJECTS } from '@/data/work-projects';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { cn } from '@/utils/utils';
import { Mail } from 'lucide-react';
import React from 'react';

export default function Home() {
  const activeSection = useIntersectionObserver();

  return (
    <main>
      <MaxWidthWrapper>
        {/* about me section */}
        <section
          data-section
          id="about"
          className="mt-20 flex flex-col items-start justify-between gap-16 sm:mt-0 lg:flex-row lg:items-center"
        >
          <div className="flex flex-col justify-between lg:w-1/2">
            <SectionIndicator isActive={activeSection === 'about'}>ABOUT</SectionIndicator>
            <span className="text-3xl font-bold text-primary sm:text-6xl">Aditya Kumar</span>
            <p className="mt-4 text-2xl font-semibold sm:text-4xl">Full Stack Web Developer</p>
            <p className="mt-8 text-pretty text-lg text-foreground/70">
              Full-stack web developer with expertise in UI/UX design. Skilled in crafting visually
              stunning and cohesive interfaces to create engaging user experiences.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <Tooltip content="aditya132003@gmail.com">
                <a href="mailto:aditya132003@gmail.com" className={cn(buttonVariants())}>
                  Contact me
                </a>
              </Tooltip>
              {/* <SocialLink href="/">
                <TwitterIcon className="!size-5 text-foreground" />
              </SocialLink> */}
              <SocialLink href="https://github.com/addoxy">
                <GitHubIcon className="!size-7 text-foreground" />
              </SocialLink>
              <SocialLink href="https://www.linkedin.com/in/aditya-kumar-25605b238/">
                <LinkedInIcon className="!size-7 text-foreground" />
              </SocialLink>
            </div>
          </div>
          <div className="h-96 w-full rounded-lg bg-muted sm:size-96" />
        </section>

        {/* work experience section */}
        <section data-section id="work" className="mt-32 sm:mt-56">
          <SectionIndicator isActive={activeSection === 'work'}>WORK</SectionIndicator>
          <div className="grid grid-cols-1 gap-32 pt-6">
            {WORK_PROJECTS.map((project, i) => (
              <Project key={i} {...project} orientation={i % 2 === 0 ? 'ltr' : 'rtl'} />
            ))}
          </div>
        </section>

        {/* projects section */}
        <section data-section id="projects" className="mt-32 sm:mt-56">
          <SectionIndicator isActive={activeSection === 'projects'}>PROJECTS</SectionIndicator>
          <div className="grid grid-cols-1 gap-32 pt-6">
            {PROJECTS.map((project, i) => (
              <Project key={i} {...project} orientation={i % 2 === 0 ? 'ltr' : 'rtl'} />
            ))}
          </div>
        </section>

        {/* technical skills section */}
        <section data-section id="technical-skills" className="mt-32 sm:mt-56">
          <SectionIndicator isActive={activeSection === 'technical-skills'}>
            TECHNICAL SKILLS
          </SectionIndicator>
          <div className="flex flex-col py-10">
            <span className="tracking-wider text-muted-foreground">FRONTEND</span>
            <div className="mt-6 flex flex-wrap gap-2.5">
              {frontendSkills.map((skill, i) => (
                <SkillBadge key={i} name={skill.name} icon={skill.icon} />
              ))}
            </div>
            <span className="mt-10 tracking-wider text-muted-foreground">BACKEND</span>
            <div className="mt-6 flex flex-wrap gap-2.5">
              {backendSkills.map((skill, i) => (
                <SkillBadge key={i} name={skill.name} icon={skill.icon} />
              ))}
            </div>
            <span className="mt-10 tracking-wider text-muted-foreground">OTHERS</span>
            <div className="mt-6 flex flex-wrap gap-2.5">
              {otherSkills.map((skill, i) => (
                <SkillBadge key={i} name={skill.name} icon={skill.icon} />
              ))}
            </div>
          </div>
        </section>

        {/* contact me section */}
        <section data-section id="contact" className="mb-20 mt-20 sm:mb-0 sm:mt-40">
          <SectionIndicator isActive={activeSection === 'contact'}>CONTACT</SectionIndicator>
          <div className="flex items-center gap-4">
            <SocialLink href="mailto:aditya132003@gmail.com">
              <Mail className="!size-7 text-foreground" />
            </SocialLink>
            <SocialLink href="https://github.com/addoxy">
              <GitHubIcon className="!size-7 text-foreground" />
            </SocialLink>
            <SocialLink href="https://www.linkedin.com/in/aditya-kumar-25605b238/">
              <LinkedInIcon className="!size-7 text-foreground" />
            </SocialLink>
          </div>
          <p className="mt-8 text-muted-foreground">© 2024 Addoxy. All rights reserved.</p>
        </section>
      </MaxWidthWrapper>
    </main>
  );
}

interface SocialLinkProps {
  href: string;
  children: React.ReactNode;
}

const SocialLink = ({ href, children }: SocialLinkProps) => {
  return (
    <Tooltip content={href}>
      <a href={href} className={cn(buttonVariants({ size: 'icon', variant: 'ghost' }))}>
        {children}
      </a>
    </Tooltip>
  );
};
