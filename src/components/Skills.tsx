"use client";

import React from "react";
import { motion } from "framer-motion";
import { SKILLS } from "@/lib/constants";
import * as LucideIcons from "lucide-react";
import { Wrench } from "lucide-react";

const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        <div className="flex flex-col items-center mb-16">
          <div className="p-3 rounded-2xl bg-primary/10 text-primary mb-4">
            <Wrench size={32} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-primary rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SKILLS.map((category, idx) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass p-8 rounded-3xl"
            >
              <h3 className="text-xl font-bold mb-6 text-primary">{category.category}</h3>
              <div className="space-y-4">
                {category.items.map((skill) => {
                  const Icon = (LucideIcons as any)[skill.icon] || LucideIcons.Code;
                  return (
                    <div key={skill.name} className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-primary/10 text-primary">
                        <Icon size={18} />
                      </div>
                      <span className="font-medium">{skill.name}</span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
