// components/ExperienceAndSkills.tsx
import { EXPERIENCE, SKILLS } from "@/constants/main";
import Heading from "@/components/basic/heading";

const ExperienceAndSkills = () => {
    return (
        <div className="flex flex-row gap-4 flex-1 max-h-[170px]">
            <div className="flex flex-col bg-warning p-4 rounded-xl cursor-pointer flex-1 transition-transform duration-500 hover:scale-105">
                <Heading level={6} className="mb-2">Experience</Heading>
                <div className="flex flex-row w-full items-center justify-center flex-1">
                    <Heading level={1}>{EXPERIENCE?.years}</Heading>
                    <Heading level={5}>{EXPERIENCE?.label}</Heading>
                </div>
            </div>
            <div className="flex flex-col bg-success p-4 rounded-xl cursor-pointer flex-1 transition-transform duration-500 hover:scale-105">
                <Heading level={6} className="mb-2">Skills</Heading>
                <div className="flex flex-col w-full items-center justify-center flex-1">
                    <Heading level={1}>{SKILLS?.count}</Heading>
                </div>
            </div>
        </div>
    );
};

export default ExperienceAndSkills;
