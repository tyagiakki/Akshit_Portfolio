"use client";

import React from "react";
import { motion } from "framer-motion";
import { PROFILE } from "@/lib/constants";
import { Mail, Phone, MapPin, Send, Globe, Terminal } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        <div className="flex flex-col items-center mb-16">
          <div className="p-3 rounded-2xl bg-primary/10 text-primary mb-4">
            <Send size={32} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-muted-foreground text-center max-w-md">
            Have a project in mind or just want to say hi? Feel free to reach out!
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <ContactCard
              icon={<Mail size={24} />}
              title="Email"
              value={PROFILE.email}
              href={`mailto:${PROFILE.email}`}
            />
            <ContactCard
              icon={<Phone size={24} />}
              title="Phone"
              value={PROFILE.phone}
              href={`tel:${PROFILE.phone}`}
            />
            <ContactCard
              icon={<MapPin size={24} />}
              title="Location"
              value={PROFILE.location}
              href="#"
            />
            
            <div className="p-8 glass rounded-3xl">
              <h3 className="text-xl font-bold mb-6">Connect with me</h3>
              <div className="flex gap-4">
                <a 
                  href={PROFILE.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-secondary hover:bg-primary hover:text-white transition-all duration-300"
                >
                  <Globe size={24} />
                </a>
                <a 
                  href={PROFILE.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-secondary hover:bg-primary hover:text-white transition-all duration-300"
                >
                  <Terminal size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass p-8 md:p-10 rounded-3xl"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl bg-secondary border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    placeholder="Your Name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-xl bg-secondary border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Subject</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl bg-secondary border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  placeholder="How can I help?"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Message</label>
                <textarea
                  className="w-full px-4 py-3 rounded-xl bg-secondary border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all min-h-[150px]"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-primary text-primary-foreground font-bold hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
              >
                <Send size={18} />
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ContactCard = ({ icon, title, value, href }: { icon: React.ReactNode; title: string; value: string; href: string }) => (
  <a href={href} className="flex items-center gap-6 p-6 glass rounded-3xl hover:border-primary/50 transition-colors group">
    <div className="p-4 rounded-2xl bg-primary/10 text-primary group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <div>
      <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider">{title}</p>
      <p className="text-lg font-bold">{value}</p>
    </div>
  </a>
);

export default Contact;
