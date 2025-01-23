// components/ExperienceAndSkills.tsx
import { H1, H5, H6 } from "@/components/basic/heading";
import { EXPERIENCE, SKILLS } from "@/constants/main";
import useAppStore from "@/store/app";
import gsap from "gsap";
import { useEffect, useRef } from "react";

const ExperienceAndSkills = () => {

    const { isFinishedOnboarding } = useAppStore();
    const experienceWrapperRef = useRef(null);
    const experienceRef = useRef(null);
    const experienceHeadingRef = useRef(null);
    const skillWrapperRef = useRef(null);
    const skillRef = useRef(null);
    const skillHeadingRef = useRef(null);

    useEffect(() => {
        if (isFinishedOnboarding) {
            animateComponents();
        }
    }, [isFinishedOnboarding]);

    const animateComponents = () => {
        gsap.from(experienceWrapperRef?.current, {
            duration: 1,
            y: -50, // Slide down effect for the whole section
            opacity: 0,
            ease: "power3.out",
        });

        gsap.from([experienceHeadingRef?.current, experienceRef?.current], {
            duration: 1,
            y: 20, // Slight upward motion
            opacity: 0,
            stagger: 0.3, // Stagger the animations with a delay
            ease: "power3.out",
            delay:0.5
        });

        gsap.from(skillWrapperRef?.current, {
            duration: 1,
            y: -50, // Slide down effect for the whole section
            opacity: 0,
            ease: "power3.out",
        });

        gsap.from([skillHeadingRef?.current, skillRef?.current], {
            duration: 1,
            y: 20, // Slight upward motion
            opacity: 0,
            stagger: 0.3, // Stagger the animations with a delay
            ease: "power3.out",
            delay:0.5
        });
    };

    return (
        <div className="flex flex-row gap-4 flex-1 max-h-[170px]">
            <div className="flex flex-1" ref={experienceWrapperRef}>
                <div className="flex flex-col bg-warning p-4 rounded-xl cursor-pointer flex-1 transition-transform duration-500 hover:!scale-105">
                    <H6 className="mb-2" ref={experienceHeadingRef}>Experience</H6>
                    <div className="flex flex-row w-full items-center justify-center flex-1" ref={experienceRef}>
                        <H1>{EXPERIENCE?.years}</H1>
                        <H5>{EXPERIENCE?.label}</H5>
                    </div>
                </div>
            </div>
            <div className="flex flex-1" ref={skillWrapperRef}>
                <div className="flex flex-col bg-success p-4 rounded-xl cursor-pointer flex-1 transition-transform duration-500 hover:!scale-105" ref={skillWrapperRef}>
                    <H6 className="mb-2" ref={skillHeadingRef}>Skills</H6>
                    <div className="flex flex-col w-full items-center justify-center flex-1" ref={skillRef}>
                        <H1>{SKILLS?.count}</H1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExperienceAndSkills;
