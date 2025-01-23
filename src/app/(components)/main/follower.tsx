// components/TotalFollowers.tsx
import { H4, H6 } from "@/components/basic/heading";
import { TOTAL_FOLLOWERS } from "@/constants/main";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import useAppStore from "@/store/app";

const TotalFollowers = () => {
    const { isFinishedOnboarding } = useAppStore();
    const sectionRef = useRef<HTMLDivElement | null>(null);
    const headingRef = useRef<HTMLHeadingElement | null>(null);
    const imageRef = useRef<HTMLImageElement | null>(null);
    const contentRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (isFinishedOnboarding) {
            animateFollowers();
        }
    }, [isFinishedOnboarding]);

    const animateFollowers = () => {
        gsap.from(sectionRef?.current, {
            duration: 1,
            y: -50, // Slide down effect for the whole section
            opacity: 0,
            ease: "power3.out",
        });

        // Animate each content with stagger
        gsap.from([headingRef?.current, imageRef?.current, contentRef?.current], {
            duration: 1,
            y: 20, // Slight upward motion
            opacity: 0,
            stagger: 0.3, // Stagger the animations with a delay
            ease: "power3.out",
            delay:0.5
        });
    };

    return (
        <div
            ref={sectionRef}
            className="flex flex-col items-center bg-card p-4 rounded-xl cursor-pointer transition-transform duration-500 hover:!scale-105"
        >
            <H6 className="mb-5" ref={headingRef}>
                {TOTAL_FOLLOWERS?.title}
            </H6>
            <Image
                ref={imageRef}
                src={TOTAL_FOLLOWERS?.imageSrc}
                alt={TOTAL_FOLLOWERS?.imageAlt}
                width={150}
                height={150}
            />
            <div className="flex flex-col items-center pt-5" ref={contentRef}>
                <H4>{TOTAL_FOLLOWERS?.followers}</H4>
                <span className="font-mont">{TOTAL_FOLLOWERS?.followers} Users Followed</span>
            </div>
        </div>
    );
};

export default TotalFollowers;