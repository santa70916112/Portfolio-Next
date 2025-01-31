import { TESTIMONIAL_DETAIL } from "@/constants/testimonial";
import { ProjectDrawerBody } from "@/types/main";
import { DrawerBody, Image } from "@heroui/react";

export default function Body({ currentIndex }: ProjectDrawerBody) {

    const currentProject = TESTIMONIAL_DETAIL[currentIndex];

    return (
        <DrawerBody className="font-mont">
            <div className="flex flex-col gap-2 py-4">
                <div className="mt-4 flex flex-col gap-3">
                    <div className="flex gap-3 items-center">
                        <Image src={currentProject?.client?.profile} width={50} height={50} alt="profile" />
                        <div className="flex flex-col gap-0.5">
                            <p className="text-medium text-foreground font-medium">{currentProject?.client?.name}</p>
                            <p className="text-small text-default-500">{currentProject?.client?.role}</p>
                        </div>
                    </div>

                    <div className="flex flex-col mt-4 gap-3 items-start">
                        <span className="text-medium font-medium">Review</span>
                        <div className="text-medium text-default-500 flex flex-col gap-2">
                            {currentProject?.detail?.map((desc, index) => (
                                <p key={index}>{desc}</p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </DrawerBody>
    )
}