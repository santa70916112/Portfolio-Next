// components/TotalFollowers.tsx
import { TOTAL_FOLLOWERS } from "@/constants/main";
import Image from "next/image";
import Heading from "@/components/basic/heading";

const TotalFollowers = () => {
    return (
        <div className="flex flex-col items-center bg-card p-4 rounded-xl cursor-pointer transition-transform duration-500 hover:scale-105">
            <Heading level={6} className="mb-5">
                {TOTAL_FOLLOWERS?.title}
            </Heading>
            <Image src={TOTAL_FOLLOWERS?.imageSrc} alt={TOTAL_FOLLOWERS?.imageAlt} width={150} height={150} />
            <div className="flex flex-col items-center pt-5">
                <Heading level={4}>{TOTAL_FOLLOWERS?.followers}</Heading>
                <span className="font-mont">{TOTAL_FOLLOWERS?.followers} Users Followed</span>
            </div>
        </div>
    );
};

export default TotalFollowers;
