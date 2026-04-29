"use client";

import React from "react";
import { motion } from "framer-motion";
import { PROJECTS } from "@/lib/constants";
import { Code, ExternalLink, Terminal } from "lucide-react";

const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        <div className="flex flex-col items-center mb-16">
          <div className="p-3 rounded-2xl bg-primary/10 text-primary mb-4">
            <Code size={32} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass rounded-3xl overflow-hidden group flex flex-col"
            >
              <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary flex items-center justify-center p-8 relative overflow-hidden">
                <div className="text-4xl font-bold text-primary/40 group-hover:scale-110 transition-transform duration-500">
                  {project.title.substring(0, 1)}
                </div>
                {/* Decorative circles */}
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
              </div>

              <div className="p-8 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <p className="text-sm text-primary font-medium">{project.role}</p>
                  </div>
                  <div className="flex gap-2">
                    <button className="p-2 rounded-full bg-secondary hover:bg-primary/20 transition-colors">
                      <Terminal size={18} />
                    </button>
                    <button className="p-2 rounded-full bg-secondary hover:bg-primary/20 transition-colors">
                      <ExternalLink size={18} />
                    </button>
                  </div>
                </div>

                <p className="text-muted-foreground text-sm mb-6 flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-full bg-secondary text-xs font-medium text-secondary-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
