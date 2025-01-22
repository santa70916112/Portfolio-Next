// components/PersonalInfo.tsx
import { PERSONAL_INFO } from "@/constants/main";
import Heading from "@/components/basic/heading";

const PersonalInfo = () => {
    return (
        <div className="flex flex-row gap-4 flex-1 max-h-[170px]">
            <div className="flex flex-col bg-primary p-4 rounded-xl cursor-pointer flex-1 transition-transform duration-500 hover:scale-105">
                <Heading level={6} className="mb-2">Full Name</Heading>
                <Heading level={5}>{PERSONAL_INFO?.fullName}</Heading>
            </div>
            <div className="flex flex-col bg-secondary p-4 rounded-xl cursor-pointer flex-1 transition-transform duration-500 hover:scale-105">
                <Heading level={6} className="mb-2">Headline</Heading>
                <Heading level={5}>{PERSONAL_INFO?.headline}</Heading>
            </div>
        </div>
    );
};

export default PersonalInfo;
