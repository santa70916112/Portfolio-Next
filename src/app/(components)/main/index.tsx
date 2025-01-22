// Main.tsx
"use client";

import Image from "next/image";
import TotalFollowers from "./follower";
import PersonalInfo from "./personal";
import ProjectComplete from "./project";
import ExperienceAndSkills from "./experience";
import Testimonial from "./testimonial";
import ContactInfo from "./contact";

export default function Main() {
  return (
    <main className="z-10 bg-black min-h-screen min-w-screen gap-4 flex items-center justify-center p-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 max-w-[1024px] md:grid-cols-4">
        <div className="flex flex-col gap-4">
          <ProjectComplete />
          <TotalFollowers />
        </div>
        <div className="flex flex-col gap-4 md:col-span-2">
          <PersonalInfo />
          <div className="flex flex-col bg-card rounded-xl items-center justify-end relative h-[280px] w-full cursor-pointer md:flex-1">
            <Image src={'/assets/images/me.png'} alt="tadashi" width={240} height={380} className="absolute bottom-0" />
          </div>
          <ExperienceAndSkills />
        </div>
        <div className="flex flex-col gap-4">
          <Testimonial />
          <ContactInfo />
        </div>
      </div>
    </main>
  );
}
