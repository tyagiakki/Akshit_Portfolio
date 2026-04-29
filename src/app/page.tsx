import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Background from "@/components/Background";
import { PROFILE } from "@/lib/constants";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Background />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Contact />

      <footer className="py-12 border-t border-border bg-secondary/20">
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground mb-4">
            © {new Date().getFullYear()} {PROFILE.name}. All rights reserved.
          </p>
          <div className="flex justify-center gap-4 text-sm text-muted-foreground">
            <a href="#home" className="hover:text-primary">Home</a>
            <a href="#projects" className="hover:text-primary">Projects</a>
            <a href="#contact" className="hover:text-primary">Contact</a>
          </div>
        </div>
      </footer>
    </main>
  );
}

