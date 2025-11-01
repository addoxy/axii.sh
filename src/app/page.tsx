'use client';

import { ThemeToggler } from '@/components/theme-toggler';
import { ARTICLES } from '@/data/articles';
import { PROJECTS } from '@/data/projects';
import { ArrowUpRight, GithubIcon, MailIcon, XIcon } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const socialLinks = [
    {
      href: 'mailto:aditya132003@gmail.com',
      label: 'Email',
      icon: MailIcon,
    },
    {
      href: 'https://x.com/axiidotsh',
      label: 'Twitter',
      icon: XIcon,
    },
  ];

  return (
    <div className="mx-auto min-h-screen max-w-4xl px-6 py-12 md:px-12 md:py-20">
      {/* Header */}
      <header className="flex items-start justify-between">
        <div>
          <h1 className="text-foreground text-2xl font-light tracking-tight">Aditya Kumar</h1>
          <div className="text-muted-foreground mt-1 font-mono text-sm">Full-Stack Developer</div>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/addoxy"
            target="_blank"
            rel="noopener noreferrer"
            className="border-border hover:border-foreground hover:text-foreground text-muted-foreground inline-flex items-center gap-1 border-b pb-0.5 text-sm transition-colors"
          >
            <GithubIcon className="size-3.5" />
            <span>GitHub</span>
          </a>
          <ThemeToggler />
        </div>
      </header>

      {/* Main Content */}
      <main className="mt-20 md:mt-32">
        {/* Intro */}
        <div className="border-border border-l pl-6 md:pl-8">
          <p className="text-foreground max-w-2xl text-lg leading-relaxed md:text-xl">
            Full-stack web developer passionate about building visually polished, high-performance
            websites that captivate and convert.
          </p>
          <div className="mt-6 inline-flex items-center gap-1.5 rounded-full bg-green-500/10 px-3 py-1.5 text-sm text-green-600 dark:text-green-400">
            <div className="size-1.5 rounded-full bg-green-500" />
            <span>Open for work</span>
          </div>
        </div>

        {/* Projects */}
        <div className="mt-16 space-y-8 md:mt-24">
          <h2 className="text-foreground border-border border-l pl-6 text-lg font-medium md:pl-8">
            Projects
          </h2>

          <div className="border-border border-t">
            {PROJECTS.map((project, index) => (
              <a
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
                className="border-border group hover:bg-muted/30 relative flex flex-col gap-3 border-b px-4 py-5 transition-colors md:flex-row md:items-baseline md:justify-between md:gap-2 md:px-6"
              >
                <div className="flex items-baseline gap-3 md:gap-4">
                  <span className="text-muted-foreground font-mono text-xs">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:gap-3">
                    <span className="text-foreground font-medium">{project.title}</span>
                    {project.inProgress && (
                      <span className="w-fit rounded bg-amber-500/10 px-2 py-0.5 font-mono text-xs text-amber-600 dark:text-amber-400">
                        In Progress
                      </span>
                    )}
                  </div>
                </div>
                <span className="text-muted-foreground ml-7 text-left text-sm md:ml-0 md:max-w-md md:text-right">
                  {project.description}
                </span>
                {hoveredProject === index && project.imageUrl && (
                  <div className="animate-in fade-in slide-in-from-bottom-2 pointer-events-none absolute top-0 left-1/2 z-50 hidden -translate-x-1/2 -translate-y-full duration-200 md:block">
                    <div className="border-border mb-2 overflow-hidden rounded-lg border bg-white shadow-2xl dark:bg-gray-950">
                      <Image
                        src={project.imageUrl}
                        width={400}
                        height={225}
                        alt={project.title}
                        className="object-cover"
                      />
                    </div>
                  </div>
                )}
              </a>
            ))}
          </div>
        </div>

        {/* Blog Articles */}
        <div className="mt-16 space-y-8 md:mt-24">
          <h2 className="text-foreground border-border border-l pl-6 text-lg font-medium md:pl-8">
            Blog
          </h2>

          <div className="grid grid-cols-1 gap-3">
            {ARTICLES.map((article, index) => (
              <a
                key={index}
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className="border-border hover:border-foreground/20 dark:hover:border-foreground/20 hover:bg-muted/20 group border px-5 py-4 transition-all"
              >
                <div className="flex items-baseline justify-between gap-2">
                  <span className="text-foreground text-sm font-medium">{article.title}</span>
                  <ArrowUpRight className="text-muted-foreground h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div className="mt-20 space-y-8 md:mt-32">
          <h2 className="text-foreground border-border border-l pl-6 text-lg font-medium md:pl-8">
            Get in Touch
          </h2>

          <div className="flex flex-col gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="border-border hover:border-foreground dark:hover:border-border dark:hover:bg-card group inline-flex items-center gap-3 border px-6 py-3 transition-all"
              >
                <link.icon className="text-muted-foreground h-4 w-4" />
                <span className="text-foreground text-sm font-medium">{link.label}</span>
              </a>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-muted-foreground mt-32 pb-12 text-center font-mono text-xs">
        © {new Date().getFullYear()} axii.sh. All rights reserved.
      </footer>
    </div>
  );
}
