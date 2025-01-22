// components/ProjectComplete.tsx
import { PROJECT_COMPLETE } from "@/constants/main";
import Heading from "@/components/basic/heading";
import { CircularProgressbar } from "react-circular-progressbar";

const ProjectComplete = () => {
    return (
        <div className="flex flex-col items-center bg-card p-4 rounded-xl cursor-pointer transition-transform duration-500 hover:scale-105">
            <Heading level={6} className="mb-5 font-semibold">
                {PROJECT_COMPLETE?.title}
            </Heading>
            <CircularProgressbar
                className="font-mont w-full max-w-[170px] h-full"
                value={PROJECT_COMPLETE?.value}
                text={`${PROJECT_COMPLETE?.value}%`}
                styles={{
                    path: {
                        stroke: PROJECT_COMPLETE?.strokeColor,
                    },
                }}
            />
            <div className="flex flex-col items-center pt-5">
                <Heading level={4}>{PROJECT_COMPLETE?.completedProjects}</Heading>
                <span className="font-mont">{PROJECT_COMPLETE?.description}</span>
            </div>
        </div>
    );
};

export default ProjectComplete;
