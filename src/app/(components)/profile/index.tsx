import { H5 } from "@/components/basic/heading";
import useAppStore from "@/store/app";
import { Image } from "@heroui/react";
import gsap from "gsap";
import { Calendar, Clock, Figma, Github, MapPin, X } from "lucide-react";
import { useEffect, useRef } from "react";

export default function DetailProfile() {
    const { profileModal, setOpenProfileModal } = useAppStore();
    const leftScreenRef = useRef<HTMLDivElement>(null);
    const rightScreenRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);
    const nameRef = useRef<HTMLHeadingElement>(null);
    const headlineRef = useRef<HTMLDivElement>(null);
    const infoRefs = useRef<(HTMLDivElement | null)[]>([]);
    let timeline = gsap.timeline();

    useEffect(() => {
        if (profileModal) {
            animateScreen();
        }
    }, [profileModal]);

    const animateScreen = () => {
        timeline.to(leftScreenRef.current, {
            width: "50vw",
            duration: 1,
            ease: "power3.out",
        }, 0);

        timeline.to(rightScreenRef.current, {
            width: "50vw",
            duration: 1,
            ease: "power3.out",
        }, 0);

        timeline.fromTo(imageRef.current, {
            display: "none",
            opacity: 0,
            y: 30
        }, {
            display: "block",
            opacity: 1,
            y: 0,
            duration: 1,
        });

        timeline.fromTo(nameRef.current,
            {
                opacity: 0,
                y: 20,
            },
            {
                opacity: 1,
                y: 0,
                duration: 0.5,
            }, "-=0.5");

        timeline.fromTo(headlineRef.current,
            {
                opacity: 0,
                y: 20,
            },
            {
                opacity: 1,
                y: 0,
                duration: 0.5,
                delay: 0.1, // Slight delay for the headline
            }, "-=0.5");

        infoRefs.current.forEach((ref, index) => {
            if (ref) {
                timeline.fromTo(ref,
                    {
                        opacity: 0,
                        y: 20,
                    },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.5,
                        delay: index * 0.1 // Stagger the animations
                    }, "-=0.5");
            }
        });
    };

    const closeScreen = () => {
        timeline.reverse().then(() => {
            setOpenProfileModal(false);
        });
    };

    return (
        <div className={`fixed min-h-screen flex flex-col items-center justify-center w-screen z-50 ${profileModal ? '' : 'hidden'}`}>
            <div className="relative font-mont z-10 flex flex-col items-center w-full max-w-[300px]">
                <div ref={imageRef} className="mb-10">
                    <Image src="/assets/images/me-avatar.png" className="rounded-full" width={250} height={250} />
                </div>
                <H5 ref={nameRef}>Tadashi Amano</H5>
                <div ref={headlineRef} className="font-mont text-gray flex gap-2 mb-5">
                    <span>Root System |</span>
                    <span>Perazam |</span>
                    <span>Levenue</span>
                </div>
                <div ref={(el: any) => infoRefs.current[0] = el} className="flex justify-between items-center w-full mb-3">
                    <MapPin />
                    <span>New York, US</span>
                </div>
                <div ref={(el: any) => infoRefs.current[1] = el} className="flex justify-between items-center w-full mb-3">
                    <Calendar />
                    <span>16th, April, 1994</span>
                </div>
                <div ref={(el: any) => infoRefs.current[2] = el} className="flex justify-between items-center w-full mb-3">
                    <Clock />
                    <span>EST time zone</span>
                </div>
                <div ref={(el: any) => infoRefs.current[3] = el} className="flex justify-between items-center w-full mb-3">
                    <Github />
                    <span>shinobi8894</span>
                </div>
                <div ref={(el: any) => infoRefs.current[4] = el} className="flex justify-between items-center w-full">
                    <Figma />
                    <span>shinobi8894</span>
                </div>
            </div>
            <div className="absolute top-10 right-10 cursor-pointer text-white z-10" onClick={() => closeScreen()}>
                <X />
            </div>
            <div className="fixed w-[0px] top-0 right-0 bottom-0 bg-card z-0" ref={leftScreenRef} />
            <div className="fixed w-[0px] top-0 left-0 bottom-0 bg-card z-0" ref={rightScreenRef} />
        </div>
    );
}
