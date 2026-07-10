"use client";

import Link from "next/link";

import {
  Database,
  BrainCircuit,
  Globe,
  Mail,
  Heart,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";

const platform = [
  "AI CSV Import",
  "Parallel Processing",
  "Live Progress",
  "Responsive Dashboard",
];

const technologies = [
  "Next.js",
  "React",
  "Express",
  "Tailwind CSS",
  "Gemini",
  "OpenAI",
];

const socials = [
  {
    icon: Globe,
    label: "Portfolio",
    href: "https://www.anupamrana.me/",
  },
  {
    icon: FaGithub,
    label: "GitHub",
    href: "https://github.com/anupamrana200",
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/anupam-rana-126143262/",
  },
  {
    icon: FaInstagram,
    label: "Instagram",
    href: "https://www.instagram.com/anupamrana1/",
  },
  {
    icon: FaFacebook,
    label: "Facebook",
    href: "https://www.facebook.com/anupam.rana.37",
  },
];

export default function Footer() {
  return (
    <footer
      className="
        mt-24

        border-t

        border-slate-200

        bg-gradient-to-b
        from-white
        to-slate-50

        transition-colors
        duration-300

        dark:border-slate-800
        dark:from-slate-950
        dark:to-slate-900
      "
    >
      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-12 md:grid-cols-2 xl:grid-cols-4">

          {/* Brand */}

          <div>

            <div className="flex items-center gap-3">

              <div className="rounded-2xl bg-blue-600 p-3 text-white shadow-lg">
                <Database size={26} />
              </div>

              <div>

                <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                  GrowEasy AI Platform
                </h2>

                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Intelligent CSV → CRM Import
                </p>

              </div>

            </div>

            <p className="mt-5 leading-7 text-slate-600 dark:text-slate-400">
              Transform CSV data from any source into structured CRM-ready
              records using intelligent AI-powered processing.
            </p>

          </div>

          {/* Platform */}

          <div>

            <div className="mb-5 flex items-center gap-2">

              <BrainCircuit
                size={18}
                className="text-blue-600"
              />

              <h3 className="font-semibold text-slate-900 dark:text-white">
                Platform
              </h3>

            </div>

            <ul className="space-y-3">

              {platform.map((item) => (

                <li
                  key={item}
                  className="
                    text-slate-600
                    transition

                    hover:text-blue-600

                    dark:text-slate-400
                    dark:hover:text-blue-400
                  "
                >
                  {item}
                </li>

              ))}

            </ul>

          </div>

          {/* Technology */}

          <div>

            <h3 className="mb-5 font-semibold text-slate-900 dark:text-white">
              Technology
            </h3>

            <div className="flex flex-wrap gap-3">

              {technologies.map((tech) => (

                <span
                  key={tech}
                  className="
                    rounded-full

                    bg-slate-100

                    px-3
                    py-1.5

                    text-sm
                    font-medium

                    text-slate-700

                    transition

                    hover:bg-blue-100
                    hover:text-blue-700

                    dark:bg-slate-800
                    dark:text-slate-300
                    dark:hover:bg-blue-900/40
                    dark:hover:text-blue-300
                  "
                >
                  {tech}
                </span>

              ))}

            </div>

          </div>

          {/* Connect */}

          <div>

            <h3 className="mb-5 font-semibold text-slate-900 dark:text-white">
              Connect
            </h3>

            <div className="space-y-3">

              <a
                href="mailto:anupamrana200@gmail.com"
                className="
                  flex
                  items-center
                  gap-3

                  text-slate-600

                  transition

                  hover:text-blue-600

                  dark:text-slate-400
                  dark:hover:text-blue-400
                "
              >
                <Mail size={18} />

                <span>anupamrana200@gmail.com</span>

              </a>

              {socials.map((item) => {

                const Icon = item.icon;

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      flex
                      items-center
                      gap-3

                      text-slate-600

                      transition-all
                      duration-200

                      hover:translate-x-1
                      hover:text-blue-600

                      dark:text-slate-400
                      dark:hover:text-blue-400
                    "
                  >
                    <Icon className="text-lg" />

                    <span>{item.label}</span>

                  </Link>
                );
              })}

            </div>

          </div>

        </div>

        <div className="my-12 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent dark:via-slate-700" />

        <div className="flex flex-col gap-5 text-sm md:flex-row md:items-center md:justify-between">

          <div>

            <span className="rounded-full bg-green-100 px-4 py-2 font-semibold text-green-700 dark:bg-green-900/30 dark:text-green-300">
              Version 1.0
            </span>

          </div>

          <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">

            Built with

            <Heart
              size={16}
              className="fill-red-500 text-red-500"
            />

            by

            <span className="font-semibold text-slate-800 dark:text-white">
              Anupam Rana
            </span>

          </div>

          <div className="text-slate-500 dark:text-slate-400">
            © 2026 GrowEasy AI Platform. All rights reserved.
          </div>

        </div>

      </div>
    </footer>
  );
}