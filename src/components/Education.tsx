"use client";

import React from "react";
import { motion } from "framer-motion";
import { EDUCATION, CERTIFICATIONS } from "@/lib/constants";
import { GraduationCap, Award, Calendar, Landmark } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="section-padding">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Education Section */}
          <div>
            <div className="flex items-center gap-4 mb-12">
              <div className="p-3 rounded-2xl bg-primary/10 text-primary">
                <GraduationCap size={32} />
              </div>
              <h2 className="text-3xl font-bold">Education</h2>
            </div>

            <div className="space-y-8">
              {EDUCATION.map((edu, idx) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="glass p-8 rounded-3xl"
                >
                  <div className="flex justify-between items-start mb-4 flex-wrap gap-2">
                    <h3 className="text-xl font-bold">{edu.degree}</h3>
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold">
                      {edu.score}
                    </span>
                  </div>
                  <div className="flex flex-col gap-2 text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Landmark size={16} />
                      <span>{edu.institution}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <span>{edu.period}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications Section */}
          <div>
            <div className="flex items-center gap-4 mb-12">
              <div className="p-3 rounded-2xl bg-primary/10 text-primary">
                <Award size={32} />
              </div>
              <h2 className="text-3xl font-bold">Certifications</h2>
            </div>

            <div className="space-y-8">
              {CERTIFICATIONS.map((cert, idx) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="glass p-8 rounded-3xl border-l-4 border-l-primary"
                >
                  <h3 className="text-xl font-bold mb-2">{cert.title}</h3>
                  <div className="flex items-center gap-2 text-primary text-sm font-medium mb-4">
                    <Calendar size={14} />
                    <span>{cert.date}</span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {cert.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
