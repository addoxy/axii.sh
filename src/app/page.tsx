'use client';

import { buttonVariants } from '@/components/vendor/button';
import { GridPattern } from '@/components/vendor/grid-pattern';
import { cn } from '@/lib/utils';
import { motion } from 'motion/react';

import { ArticleItem } from '@/components/article-item';
import { BorderSection } from '@/components/border-section';
import { GithubIcon, LinkedinIcon, MailIcon, TwitterIcon } from '@/components/icons';
import { ProjectItem } from '@/components/project-item';
import { SocialCard } from '@/components/social-card';
import { Announcement, AnnouncementTitle } from '@/components/vendor/announcement';
import { ARTICLES } from '@/data/articles';
import { PROJECTS } from '@/data/projects';
import { ArrowUpRight } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const SocialSection = () => {
  return (
    <motion.div
      className="mx-auto mt-10 flex items-center gap-2"
      variants={staggerContainer}
      initial="initial"
      animate="animate"
    >
      <motion.div variants={fadeInUp}>
        <SocialCard href="mailto:aditya132003@gmail.com" icon={MailIcon} />
      </motion.div>
      <motion.div variants={fadeInUp}>
        <SocialCard href="https://x.com/axiidotsh" icon={TwitterIcon} className="size-3" />
      </motion.div>
      <motion.div variants={fadeInUp}>
        <SocialCard
          href="https://www.linkedin.com/in/aditya-kumar-25605b238/"
          icon={LinkedinIcon}
        />
      </motion.div>
      <motion.div variants={fadeInUp}>
        <SocialCard href="https://github.com/addoxy" icon={GithubIcon} />
      </motion.div>
    </motion.div>
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
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3 }}
          >
            <GridPattern
              width={30}
              height={30}
              x={-1}
              y={-1}
              strokeDasharray={'4 2'}
              className={cn(
                '[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]'
              )}
            />
          </motion.div>
          <motion.div
            className="z-10 flex flex-col items-center"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.div variants={fadeInUp}>
              <Announcement className="mb-6">
                <AnnouncementTitle>
                  <div className="mr-2 size-1.5 rounded-full bg-green-500" />
                  Available for work
                </AnnouncementTitle>
              </Announcement>
            </motion.div>
            <motion.h1
              className="text-center text-3xl font-[900] sm:text-6xl sm:leading-16"
              variants={fadeInUp}
            >
              Crafting Delightful
              <br />
              Web Experiences
            </motion.h1>
            <motion.p className="mt-6 px-4 text-center sm:mt-10 sm:px-32" variants={fadeInUp}>
              Full-stack web developer passionate about building visually polished, high-performance
              websites that captivate and convert.
            </motion.p>
            <motion.div className="mt-10 flex items-center gap-2" variants={fadeInUp}>
              <motion.a
                href="#contact"
                className={cn(
                  buttonVariants({
                    className: 'h-12 px-10',
                    size: 'lg',
                  })
                )}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Contact Me
              </motion.a>
              <motion.a
                href="#projects"
                className={cn(
                  buttonVariants({
                    className: 'h-12 px-10',
                    size: 'lg',
                    variant: 'outline',
                  })
                )}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                View Projects
              </motion.a>
            </motion.div>
            <SocialSection />
          </motion.div>
        </div>
      </BorderSection>

      {/* Projects Section */}
      <motion.div
        id="projects"
        className="mx-auto flex max-w-5xl flex-col py-14"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.5 }}
      >
        <h2 className="text-center text-2xl font-extrabold sm:text-4xl">Projects</h2>
        <p className="mt-4 px-4 text-center">
          Projects that highlight my skills in building thoughtful, scalable, and polished web
          applications.
        </p>
      </motion.div>

      <BorderSection side="all" className="flex flex-col">
        <motion.div variants={staggerContainer} initial="initial" animate="animate">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.title}
              variants={{
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <ProjectItem
                {...project}
                className={cn(index === PROJECTS.length - 1 && 'border-b-0')}
              />
            </motion.div>
          ))}
        </motion.div>
      </BorderSection>

      {/* Blog Section */}
      <motion.div
        id="blog"
        className="mx-auto flex max-w-5xl flex-col py-14"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.5 }}
      >
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
          Explore more{' '}
          <ArrowUpRight className="transition-transform duration-500 group-hover:translate-x-[1px] group-hover:-translate-y-[1px]" />
        </a>
      </motion.div>

      <BorderSection side="all" className="flex flex-col">
        <motion.div
          className={cn('mx-auto grid max-w-5xl grid-cols-2', ARTICLES.length < 2 && 'grid-cols-1')}
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {ARTICLES.map((article) => (
            <motion.div
              key={article.title}
              variants={{
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <ArticleItem {...article} />
            </motion.div>
          ))}
        </motion.div>
      </BorderSection>

      {/* Contact Me Section */}
      <motion.div
        id="contact"
        className="mx-auto flex max-w-5xl flex-col py-16"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.5 }}
      >
        <div className="relative">
          <h2 className="relative text-center text-2xl font-extrabold sm:text-4xl">Contact Me</h2>
        </div>
        <p className="mx-auto mt-4 max-w-2xl px-4 text-center">
          Let&apos;s connect and collaborate! Reach out through any of these platforms.
        </p>
        <SocialSection />
      </motion.div>

      {/* Footer Section */}
      <motion.div
        className="w-full border-t border-dashed py-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <div className="mx-auto max-w-5xl">
          <p className="text-center text-sm text-zinc-500">
            © {new Date().getFullYear()} axii.sh. All rights reserved.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
