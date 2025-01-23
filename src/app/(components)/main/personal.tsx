// components/PersonalInfo.tsx
import { H5, H6 } from "@/components/basic/heading";
import { PERSONAL_INFO } from "@/constants/main";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import useAppStore from "@/store/app";

const PersonalInfo = () => {
    const { isFinishedOnboarding } = useAppStore();
    const fullNameWrapperRef = useRef<HTMLDivElement | null>(null);
    const headlineWrapperRef = useRef<HTMLDivElement | null>(null);
    const fullNameRef = useRef<HTMLHeadingElement | null>(null);
    const fullNameHeadingRef = useRef<HTMLHeadingElement | null>(null);
    const headlineHeadingRef = useRef<HTMLHeadingElement | null>(null);
    const headlineRef = useRef<HTMLHeadingElement | null>(null);

    useEffect(() => {
        if (isFinishedOnboarding) {
            animatePersonalInfo();
        }
    }, [isFinishedOnboarding]);

    const animatePersonalInfo = () => {
        // Animate the full name section

        gsap.fromTo(fullNameWrapperRef?.current, {
            y: -50, // Slide down effect for the whole section
            opacity: 0,
        }, {
            y: 0,
            opacity: 1,
            ease: "power3.out",
            duration: 1,
        });

        // Animate content with stagger for full name
        gsap.from([fullNameHeadingRef.current, fullNameRef.current], {
            duration: 1,
            y: 20, // Slight upward motion
            opacity: 0,
            stagger: 0.3, // Stagger the animations with a delay
            ease: "power3.out",
            delay:0.5
        });

        // Animate the headline section
        gsap.from(headlineWrapperRef.current, {
            duration: 1,
            y: -50, // Slide down effect for the whole section
            opacity: 0,
            ease: "power3.out",
        });



        // Animate content with stagger for headline
        gsap.from([headlineHeadingRef.current, headlineRef.current], {
            duration: 1,
            y: 20, // Slight upward motion
            opacity: 0,
            stagger: 0.3, // Stagger the animations with a delay
            ease: "power3.out",
            delay: 0.5, // Delay for the headline content
        });
    };

    return (
        <div className="flex flex-row gap-4 flex-1 max-h-[170px]">
            <div ref={fullNameWrapperRef} className="flex flex-1">
                <div className="flex flex-col bg-primary p-4 rounded-xl cursor-pointer flex-1 transition-transform duration-500 hover:!scale-105">
                    <H6 className="mb-2" ref={fullNameHeadingRef}>Full Name</H6>
                    <H5 ref={fullNameRef}>{PERSONAL_INFO?.fullName}</H5>
                </div>
            </div>
            <div ref={headlineWrapperRef} className="flex flex-1">
                <div className="flex flex-col bg-secondary p-4 rounded-xl cursor-pointer flex-1 transition-transform duration-500 hover:!scale-105">
                    <H6 ref={headlineHeadingRef} className="mb-2">Headline</H6>
                    <H5 ref={headlineRef}>{PERSONAL_INFO?.headline}</H5>
                </div>
            </div>
        </div>
    );
};

export default PersonalInfo;
