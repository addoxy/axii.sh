'use client';

import { GitHubIcon, LinkedInIcon } from '@/components/icons';
import { MaxWidthWrapper } from '@/components/max-width-wrapper';
import { Project } from '@/components/project';
import { Section } from '@/components/section';
import { SectionIndicator } from '@/components/section-indicator';
import { SkillBadge } from '@/components/skill-badge';
import { SocialLink } from '@/components/social-link';
import { Tooltip } from '@/components/tooltip';
import { buttonVariants } from '@/components/vendor/button';
import { TextEffect } from '@/components/vendor/text-effect';
import { PROJECTS } from '@/data/projects';
import { backendSkills, frontendSkills, otherSkills } from '@/data/skills';
import { WORK_PROJECTS } from '@/data/work-projects';
import { cn } from '@/utils/utils';
import { Mail } from 'lucide-react';

export default function Home() {
  return (
    <main>
      <MaxWidthWrapper>
        {/* about me section */}
        <Section
          id="about"
          className="mt-20 flex flex-col items-start justify-between gap-16 sm:mt-0 lg:flex-row lg:items-center"
        >
          <div className="flex flex-col justify-between lg:w-1/2">
            <SectionIndicator>ABOUT</SectionIndicator>
            <span className="text-3xl font-bold text-primary sm:text-6xl">Aditya Kumar</span>
            <TextEffect
              per="char"
              preset="fade"
              className="mt-4 text-2xl font-semibold sm:text-4xl"
            >
              Full Stack Web Developer
            </TextEffect>
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
              <SocialLink href="https://github.com/addoxy">
                <GitHubIcon className="!size-7 text-foreground" />
              </SocialLink>
              <SocialLink href="https://www.linkedin.com/in/aditya-kumar-25605b238/">
                <LinkedInIcon className="!size-7 text-foreground" />
              </SocialLink>
            </div>
          </div>
          <div className="h-96 w-full rounded-lg bg-muted sm:size-96" />
        </Section>

        {/* work experience section */}
        <Section id="work" className="mt-32 sm:mt-56">
          <SectionIndicator>WORK</SectionIndicator>
          <div className="grid grid-cols-1 gap-32 pt-6">
            {WORK_PROJECTS.map((project, i) => (
              <Project key={i} {...project} orientation={i % 2 === 0 ? 'ltr' : 'rtl'} />
            ))}
          </div>
        </Section>

        {/* projects section */}
        <Section id="projects" className="mt-32 sm:mt-56">
          <SectionIndicator>PROJECTS</SectionIndicator>
          <div className="grid grid-cols-1 gap-32 pt-6">
            {PROJECTS.map((project, i) => (
              <Project key={i} {...project} orientation={i % 2 === 0 ? 'ltr' : 'rtl'} />
            ))}
          </div>
        </Section>

        {/* technical skills section */}
        <Section id="technical-skills" className="mt-32 sm:mt-56">
          <SectionIndicator>TECHNICAL SKILLS</SectionIndicator>
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
        </Section>

        {/* contact me section */}
        <section id="contact" className="mb-20 mt-20 sm:mb-0 sm:mt-40">
          <SectionIndicator>CONTACT</SectionIndicator>
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
