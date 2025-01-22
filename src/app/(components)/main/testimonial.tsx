// components/Testimonial.tsx
import { PROJECT_COMPLETE, TESTIMONIAL } from "@/constants/main";
import Image from "next/image";
import Heading from "@/components/basic/heading";

const Testimonial = () => {
    return (
        <div className="flex flex-col items-center bg-card p-4 flex-1 rounded-xl cursor-pointer transition-transform duration-500 hover:scale-105">
            <Heading level={6} className="mb-5">{TESTIMONIAL?.title}</Heading>
            <Image src={TESTIMONIAL?.imageSrc} alt={TESTIMONIAL?.imageAlt} width={150} height={150} />
            <div className="flex flex-col items-center pt-5">
                <Heading level={4}>{PROJECT_COMPLETE?.completedProjects}</Heading>
                <span className="font-mont">{PROJECT_COMPLETE?.description}</span>
            </div>
        </div>
    );
};

export default Testimonial;
