"use client";

import React from "react";
import { motion } from "framer-motion";
import { Globe, Terminal, Mail, FileText, Download } from "lucide-react";
import { PROFILE } from "@/lib/constants";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 inline-block">
            Available for new opportunities
          </span>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hi, I'm <span className="gradient-text">{PROFILE.name}</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-muted-foreground mb-8 font-medium">
            {PROFILE.role}
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground mb-10 leading-relaxed">
            I build scalable, high-performance web applications with a focus on modern 
            technologies and seamless user experiences.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a
              href="#contact"
              className="px-8 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity flex items-center gap-2"
            >
              <Mail size={18} />
              Contact Me
            </a>
            <a
              href="#"
              className="px-8 py-3 rounded-full bg-secondary text-secondary-foreground font-medium hover:bg-secondary/80 transition-colors flex items-center gap-2"
            >
              <Download size={18} />
              Download Resume
            </a>
          </div>

          <div className="flex justify-center gap-6">
            <SocialLink href={PROFILE.linkedin} icon={<Globe size={24} />} label="LinkedIn" />
            <SocialLink href={PROFILE.github} icon={<Terminal size={24} />} label="GitHub" />
            <SocialLink href={`mailto:${PROFILE.email}`} icon={<Mail size={24} />} label="Email" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const SocialLink = ({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ y: -5 }}
    className="p-3 rounded-full bg-secondary text-secondary-foreground hover:text-primary transition-colors"
    aria-label={label}
  >
    {icon}
  </motion.a>
);

export default Hero;
