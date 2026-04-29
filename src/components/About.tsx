"use client";

import React from "react";
import { motion } from "framer-motion";
import { PROFILE } from "@/lib/constants";
import { User } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto">
        <div className="flex flex-col items-center mb-12">
          <div className="p-3 rounded-2xl bg-primary/10 text-primary mb-4">
            <User size={32} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass p-8 md:p-12 rounded-3xl"
          >
            <p className="text-xl text-muted-foreground leading-relaxed text-center italic">
              "{PROFILE.summary}"
            </p>
          </motion.div>

          <div className="grid md:grid-grid-cols-3 gap-8 mt-12">
             <InfoCard title="2 Years" subtitle="Experience" />
             <InfoCard title="10+ Projects" subtitle="Completed" />
          </div>
        </div>
      </div>
    </section>
  );
};

const InfoCard = ({ title, subtitle }: { title: string; subtitle: string }) => (
  <div className="text-center p-6 rounded-2xl bg-secondary/50 border border-border">
    <h3 className="text-2xl font-bold text-primary">{title}</h3>
    <p className="text-muted-foreground">{subtitle}</p>
  </div>
);

export default About;
