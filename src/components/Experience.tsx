"use client";

import React from "react";
import { motion } from "framer-motion";
import { EXPERIENCE } from "@/lib/constants";
import { Briefcase, Calendar } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="container mx-auto">
        <div className="flex flex-col items-center mb-16">
          <div className="p-3 rounded-2xl bg-primary/10 text-primary mb-4">
            <Briefcase size={32} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Work Experience</h2>
          <div className="w-20 h-1 bg-primary rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          {EXPERIENCE.map((exp, idx) => (
            <motion.div
              key={`${exp.role}-${idx}`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative pl-8 md:pl-0"
            >
              <div className="md:grid md:grid-cols-5 gap-8">
                <div className="md:col-span-1 md:text-right">
                  <div className="flex items-center gap-2 text-primary font-bold mb-2 md:justify-end">
                    <Calendar size={16} />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <div className="md:col-span-4 glass p-8 rounded-3xl relative">
                  {/* Timeline Dot */}
                  <div className="absolute left-[-1.65rem] md:left-[-2.65rem] top-8 w-4 h-4 rounded-full bg-primary border-4 border-background z-10"></div>
                  
                  <h3 className="text-2xl font-bold mb-1">{exp.role}</h3>
                  <p className="text-primary font-semibold mb-4">{exp.company}</p>
                  <ul className="space-y-3">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="flex gap-3 text-muted-foreground">
                        <span className="text-primary mt-1.5 min-w-[6px] h-[6px] rounded-full bg-primary/40" />
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
