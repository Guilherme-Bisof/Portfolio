"use client"

import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import SkillsSection from '@/components/SkillSection';
import EducationSection from '@/components/EducationSection';

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