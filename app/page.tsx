"use client";

import { Spotlight } from "@/components/ui/spotlight";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { Timeline } from "@/components/ui/timeline";
import { FloatingDock } from "@/components/ui/floating-dock";
import { FlipWords } from "@/components/ui/flip-words";
import { WobbleCard } from "@/components/ui/wobble-card";
import { Button } from "@/components/ui/moving-border";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { Vortex } from "@/components/ui/vortex";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
  IconPhone,
  IconMapPin,
  IconCode,
  IconServer,
  IconBrandReact,
  IconDatabase,
  IconCloud,
  IconBrain,
  IconRocket,
  IconBrandDocker,
  IconBrandGolang,
  IconBrandPython,
  IconBrandPhp,
  IconBrandVue,
  IconBrandAzure,
  IconCertificate,
  IconDownload,
} from "@tabler/icons-react";
import { motion } from "motion/react";

export default function Home() {
  const words = ["FullStack Developer", "Software Engineer", "Solution Architect"];

  const techLogos = [
    { quote: "Go", name: "Go", title: "Primary Language" },
    { quote: "PHP", name: "PHP", title: "Backend Framework" },
    { quote: "Python", name: "Python", title: "Backend Framework" },
    { quote: "Java", name: "Java", title: "Enterprise" },
    { quote: "Vue.js", name: "Vue.js", title: "UI Framework" },
    { quote: "React", name: "React", title: "UI Library" },
    { quote: "Next.js", name: "Next.js", title: "React Framework" },
    { quote: "Nuxt", name: "Nuxt", title: "Vue Framework" },
  ];

  const dockItems = [
    {
      title: "GitHub",
      icon: <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "https://github.com/stavtsob",
    },
    {
      title: "LinkedIn",
      icon: <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "https://linkedin.com/in/stavtsob",
    },
    {
      title: "Email",
      icon: <IconMail className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "mailto:stavtsob@gmail.com",
    },
    {
      title: "Phone",
      icon: <IconPhone className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "tel:+306949106672",
    },
  ];

  const timelineData = [
    {
      title: "2023-Present",
      content: (
        <div>
          <h4 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200 mb-2">
            Dataverse Ltd. - Visma Verzuim
          </h4>
          <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base mb-4">
            Working as an outsourcing Software Engineer for the Dutch company Visma Verzuim. Building enterprise-grade software solutions for absence management.
          </p>
          <div className="flex flex-wrap gap-2">
            {["Enterprise Software", "Netherlands Market", "Outsourcing"].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div>
          <h4 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200 mb-2">
            Dextego Inc.
          </h4>
          <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base mb-4">
            Worked in the team of first 3 engineers that created the MVP. Built the core architecture & built a lightweight out of scratch Neural Network for inference tasks. 
          </p>
          <div className="flex flex-wrap gap-2">
            {["Startup", "MVP Development", "Core Team"].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 text-xs font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      ),
    },
    
    {
      title: "2022",
      content: (
        <div>
          <h4 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200 mb-2">
            Military Service
          </h4>
          <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base mb-4">
            Served duty at the Research and IT Office of the brigade headquarters. Applied technical skills in a military context.
          </p>
          <div className="flex flex-wrap gap-2">
            {["Research", "IT Operations", "Leadership"].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 text-xs font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "2019-2022",
      content: (
        <div>
          <h4 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200 mb-2">
            Dataverse Ltd.
          </h4>
          <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base mb-4">
            Worked as a FullStack Developer for various projects including MyAADE Appointments and Visma Verzuim. Built robust web applications from frontend to backend.
          </p>
          <div className="flex flex-wrap gap-2">
            {["FullStack", "MyAADE", "Visma Verzuim"].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300 text-xs font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "2015-2021",
      content: (
        <div>
          <h4 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200 mb-2">
            Democritus University of Thrace
          </h4>
          <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base mb-4">
            MSc Electrical and Computer Engineering
          </p>
          <p className="text-neutral-600 dark:text-neutral-400 text-sm italic mb-4">
            Masters Thesis: 3D Model Synthesis with Deep Neural Networks
          </p>
          <div className="flex flex-wrap gap-2">
            {["Deep Learning", "Computer Vision", "3D Modeling", "Research"].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full bg-cyan-100 dark:bg-cyan-900/30 text-cyan-800 dark:text-cyan-300 text-xs font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen w-full bg-black relative">
      {/* Floating Dock */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
        <FloatingDock items={dockItems} />
      </div>

      {/* Hero Section with Vortex Background */}
      <Vortex
        backgroundColor="black"
        rangeY={150}
        particleCount={100}
        baseHue={160}
        rangeSpeed={0.1}
        className="flex items-center flex-col justify-center px-4 md:px-10 py-4 w-full min-h-screen"
      >
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-2 mb-6"
          >
            <span className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-purple-400 text-sm font-medium flex items-center gap-2">
              <IconMapPin className="h-4 w-4" />
              Thessaloniki, Greece
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white via-neutral-200 to-neutral-400 pb-4"
          >
            Stavros Tsompanidis
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl md:text-4xl font-medium text-neutral-300 mb-8"
          >
            <FlipWords words={words} className="text-white" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4 mt-12"
          >
            <Button
              as="a"
              href="mailto:stavtsob@gmail.com"
              containerClassName="h-14 w-44"
              className="font-semibold"
            >
              Get in Touch
            </Button>
            <Button
              as="a"
              href="https://github.com/stavtsob"
              target="_blank"
              containerClassName="h-14 w-44"
              borderClassName="bg-[radial-gradient(#8b5cf6_40%,transparent_60%)]"
              className="font-semibold"
            >
              View GitHub
            </Button>
            <Button
              as="a"
              href="/docs/Stavros%20Tsompanidis%202026.pdf"
              download
              containerClassName="h-14 w-48"
              borderClassName="bg-[radial-gradient(#10b981_40%,transparent_60%)]"
              className="font-semibold flex items-center gap-2"
            >
              <IconDownload className="h-4 w-4" />
              Download CV
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-8 mt-16"
          >
            {[
              { value: "6+", label: "Years Experience" },
              { value: "10+", label: "Technologies" },
              { value: "Azure", label: "Certified" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
                  {stat.value}
                </div>
                <div className="text-neutral-500 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="mt-16 animate-bounce"
        >
          <div className="w-6 h-10 border-2 border-neutral-500 rounded-full flex items-start justify-center p-2 mx-auto">
            <div className="w-1 h-2 bg-neutral-500 rounded-full animate-pulse" />
          </div>
        </motion.div>
      </Vortex>

      {/* Expertise Section */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-neutral-50 via-purple-400 to-neutral-50">
              Skills & Expertise
            </h2>
            <p className="text-neutral-400 max-w-2xl mx-auto text-lg">
              A comprehensive toolkit built through years of enterprise development and startup experience.
            </p>
          </motion.div>
          
          {/* Main Expertise Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-8">
            {/* Languages - Full Width Card */}
            <div className="relative col-span-1 lg:col-span-2 min-h-[280px] rounded-xl border border-neutral-800 bg-neutral-900/50 p-8">
              <GlowingEffect
                spread={40}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
              />
              <div className="relative z-10 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-violet-500/20">
                      <IconCode className="h-6 w-6 text-violet-400" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-white">Programming Languages</h3>
                  </div>
                  <p className="text-neutral-400 text-sm md:text-base mb-6">
                    In-Depth knowledge of multiple programming languages for diverse application development.
                    Currently focusing on Go for backend services.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  {[
                    { name: "Go", icon: <IconBrandGolang className="h-5 w-5" /> },
                    { name: "PHP", icon: <IconBrandPhp className="h-5 w-5" /> },
                    { name: "Python", icon: <IconBrandPython className="h-5 w-5" /> },
                    { name: "Java", icon: <IconCode className="h-5 w-5" /> },
                  ].map((lang) => (
                    <span key={lang.name} className="flex items-center gap-2 px-4 py-2 rounded-full bg-violet-900/30 text-violet-300 text-sm font-medium">
                      {lang.icon} {lang.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Backend */}
            <div className="relative col-span-1 lg:col-span-2 min-h-[280px] rounded-xl border border-neutral-800 bg-neutral-900/50 p-8">
              <GlowingEffect
                spread={40}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
              />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-blue-500/20">
                    <IconServer className="h-6 w-6 text-blue-400" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white">Backend Frameworks</h3>
                </div>
                <p className="text-neutral-400 text-sm md:text-base mb-6">
                  I build robust and durable backend systems focusing on performance, scallability and maintenability.
                  <b> I build APIs so both I and the stakeholders to sleep care free at night.</b> No sudden outages or downtimes.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {["Gin (Go)", "Laravel", "Django", "Spring Boot"].map((fw) => (
                    <div key={fw} className="px-4 py-3 rounded-lg bg-neutral-800/50 border border-neutral-700 text-neutral-200 text-sm font-medium text-center hover:bg-neutral-700/50 transition-colors">
                      {fw}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Frontend */}
            <div className="relative col-span-1 min-h-[280px] rounded-xl border border-neutral-800 bg-neutral-900/50 p-6">
              <GlowingEffect
                spread={40}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
              />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-pink-500/20">
                    <IconBrandReact className="h-6 w-6 text-pink-400" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-white">Frontend</h3>
                </div>
                <p className="text-neutral-400 text-sm mb-4">
                  Modern UI development with reactive frameworks.
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    { name: "Vue", icon: <IconBrandVue className="h-4 w-4" /> },
                    { name: "React", icon: <IconBrandReact className="h-4 w-4" /> },
                    { name: "Nuxt", icon: <IconBrandVue className="h-4 w-4" /> },
                    { name: "Next", icon: <IconBrandReact className="h-4 w-4" /> },
                  ].map((fw) => (
                    <span key={fw.name} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-pink-900/30 text-pink-300 text-xs font-medium">
                      {fw.icon} {fw.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Cloud & Infrastructure */}
            <div className="relative col-span-1 min-h-[280px] rounded-xl border border-neutral-800 bg-neutral-900/50 p-6">
              <GlowingEffect
                spread={40}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
              />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-cyan-500/20">
                    <IconCloud className="h-6 w-6 text-cyan-400" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-white">Cloud & DevOps</h3>
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <IconCertificate className="h-5 w-5 text-yellow-400" />
                  <span className="text-yellow-400 text-sm font-semibold">Azure Certified</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["Azure", "GCloud", "Docker", "Docker Swarm"].map((tech) => (
                    <span key={tech} className="px-3 py-1.5 rounded-full bg-cyan-900/30 text-cyan-300 text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Databases */}
            <div className="relative col-span-1 min-h-[280px] rounded-xl border border-neutral-800 bg-neutral-900/50 p-6">
              <GlowingEffect
                spread={40}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
              />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-green-500/20">
                    <IconDatabase className="h-6 w-6 text-green-400" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-white">Databases</h3>
                </div>
                <div className="space-y-2">
                  <div className="text-neutral-400 text-xs uppercase tracking-wider">SQL</div>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {["PostgreSQL", "MariaDB"].map((db) => (
                      <span key={db} className="px-3 py-1 rounded bg-green-900/30 text-green-300 text-xs">
                        {db}
                      </span>
                    ))}
                  </div>
                  <div className="text-neutral-400 text-xs uppercase tracking-wider">NoSQL / Vector</div>
                  <div className="flex flex-wrap gap-2">
                    {["MongoDB", "Pinecone"].map((db) => (
                      <span key={db} className="px-3 py-1 rounded bg-purple-900/30 text-purple-300 text-xs">
                        {db}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* ML & AI */}
            <div className="relative col-span-1 min-h-[280px] rounded-xl border border-neutral-800 bg-neutral-900/50 p-6">
              <GlowingEffect
                spread={40}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
              />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-red-500/20">
                    <IconBrain className="h-6 w-6 text-red-400" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-white">Machine Learning</h3>
                </div>
                <p className="text-neutral-400 text-sm mb-4">
                  My MSc thesis focused on 3D model synthesis using neural networks. <b>Before LLMs.</b>
                </p>
                <div className="flex flex-wrap gap-2">
                  {["PyTorch", "TensorFlow"].map((ml) => (
                    <span key={ml} className="px-3 py-1.5 rounded-lg bg-red-900/30 text-red-300 text-sm font-medium">
                      {ml}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Automation Row */}
          <div className="relative w-full min-h-[160px] rounded-xl border border-neutral-800 bg-neutral-900/50 p-6">
            <GlowingEffect
              spread={40}
              glow={true}
              disabled={false}
              proximity={64}
              inactiveZone={0.01}
            />
            <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-purple-500/20">
                  <IconRocket className="h-8 w-8 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white">Automation & Integration</h3>
                  <p className="text-neutral-400 text-sm">Orchestrating workflows and connecting enterprise systems</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                {[
                  { name: "n8n", desc: "Workflow" },
                  { name: "Temporal", desc: "Orchestration" },
                  { name: "Frends", desc: "Integration" },
                ].map((tool) => (
                  <div key={tool.name} className="px-5 py-3 rounded-xl bg-purple-900/30 border border-purple-800/50 text-center">
                    <div className="text-purple-300 font-bold">{tool.name}</div>
                    <div className="text-purple-400/70 text-xs">{tool.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-20">
        <Timeline data={timelineData} />
      </section>

      {/* Side Projects Section */}
      <section className="py-20 px-4 bg-neutral-950">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
              Side Projects
            </h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              Building solutions that solve real-world problems.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900 p-6 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <a href="https://citystroll.gr" target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-20" />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-transparent to-purple-500/10 animate-pulse" />
              </div>
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center mb-4">
                  <span className="text-white text-xl">🍽️</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Citystroll.gr
                </h3>
                <p className="text-neutral-400 text-sm mb-4">
                  A platform for creating and managing your restaurant&apos;s digital menu & receiving orders. Streamlining the dining experience.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 rounded-full bg-blue-900/30 text-blue-300 text-xs font-medium">
                    SaaS
                  </span>
                  <span className="px-3 py-1.5 rounded-full bg-purple-900/30 text-purple-300 text-xs font-medium">
                    Restaurant Tech
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900 p-6 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <a href="https://olgaforall.gr" target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-20" />
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 to-orange-500 flex items-center justify-center mb-4">
                  <span className="text-white text-xl">💬</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Olgaforall.gr
                </h3>
                <p className="text-neutral-400 text-sm mb-4">
                  A real-time chat application created for &quot;Πράξη Αγάπης&quot; - enabling instant communication for charitable causes.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 rounded-full bg-pink-900/30 text-pink-300 text-xs font-medium">
                    Real-time
                  </span>
                  <span className="px-3 py-1.5 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 text-xs font-medium">
                    Social Good
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900 p-6 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <a href="https://www.npmjs.com/package/vwr-vuejs" target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-20" />
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-cyan-500 flex items-center justify-center mb-4">
                  <span className="text-white text-xl">📦</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  VWR
                </h3>
                <p className="text-neutral-400 text-sm mb-4">
                  An alternative package of ReactJS SWR written for VueJS. Bringing the power of stale-while-revalidate to the Vue ecosystem.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 rounded-full bg-green-900/30 text-green-300 text-xs font-medium">
                    Open Source
                  </span>
                  <span className="px-3 py-1.5 rounded-full bg-cyan-900/30 text-cyan-300 text-xs font-medium">
                    VueJS
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 relative overflow-hidden bg-black">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent" />
        <div className="max-w-4xl mx-auto text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-neutral-50 via-purple-400 to-neutral-50">
              Let&apos;s Build Something Amazing
            </h2>
            <p className="text-neutral-400 mb-12 max-w-2xl mx-auto text-lg">
              I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <a
              href="mailto:stavtsob@gmail.com"
              className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-neutral-800 hover:bg-neutral-700 transition-all duration-300 group"
            >
              <div className="p-2 rounded-lg bg-gradient-to-br from-pink-500 to-orange-500 group-hover:scale-110 transition-transform">
                <IconMail className="h-5 w-5 text-white" />
              </div>
              <span className="text-neutral-300 font-medium">stavtsob@gmail.com</span>
            </a>
            <a
              href="tel:+306949106672"
              className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-neutral-800 hover:bg-neutral-700 transition-all duration-300 group"
            >
              <div className="p-2 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 group-hover:scale-110 transition-transform">
                <IconPhone className="h-5 w-5 text-white" />
              </div>
              <span className="text-neutral-300 font-medium">+30 6949 106 672</span>
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center gap-4"
          >
            <Button
              as="a"
              href="https://github.com/stavtsob"
              target="_blank"
              containerClassName="h-14 w-14"
              className="p-0"
            >
              <IconBrandGithub className="h-6 w-6" />
            </Button>
            <Button
              as="a"
              href="https://linkedin.com/in/stavtsob"
              target="_blank"
              containerClassName="h-14 w-14"
              borderClassName="bg-[radial-gradient(#0077b5_40%,transparent_60%)]"
              className="p-0"
            >
              <IconBrandLinkedin className="h-6 w-6" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-neutral-800 bg-black">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-neutral-500 text-sm">
            © {new Date().getFullYear()} Stavros Tsompanidis. Built with Next.js & Aceternity UI.
          </p>
        </div>
      </footer>
    </div>
  );
}
