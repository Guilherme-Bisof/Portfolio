"use client"

import AboutSection from '@/components/sections/AboutSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import ContactSection from '@/components/sections/ContactSection';
import SkillsSection from '@/components/sections/SkillSection';
import EducationSection from '@/components/sections/EducationSection';

export default function Home(){

  return (
    <>
      <main className="flex flex-col items-center">
      </main>
      <AboutSection />
      <EducationSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      </>
  );
}