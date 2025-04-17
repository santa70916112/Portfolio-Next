// src/constants/profileConstants.ts
import { ProfileData } from "@/types/main";
import { Calendar, Clock, Figma, Github, MapPin } from "lucide-react";

// Create the constant with the defined type
export const PROFILE_DATA: ProfileData = {
    name: "Tadashi Amano",
    headline: ["Root System", "Perazam", "Levenue"],
    avatarSrc: "/assets/images/me-avatar.png",
    info: [
        {
            label: "Location",
            value: "New York, US",
            icon: <MapPin />,
        },
        {
            label: "Birth Date",
            value: "16th, April, 1994",
            icon: <Calendar />,
        },
        {
            label: "Time Zone",
            value: "EST time zone",
            icon: <Clock />,
        },
        {
            label: "GitHub",
            value: "shinobi8894",
            icon: <Github />,
            link : 'https://github.com/shinobi8894'
        },
        {
            label: "Figma",
            value: "shinobi8894",
            icon: <Figma />,
            link : 'https://figma.com/@shinobi8894'
        },
    ],
};
