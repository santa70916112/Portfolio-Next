// src/constants/profileConstants.ts
import { ProfileData } from "@/types/main";
import { Calendar, Clock, Figma, Github, MapPin } from "lucide-react";

// Create the constant with the defined type
export const PROFILE_DATA: ProfileData = {
    name: "Ihor Ulchak",
    headline: ["Root System", "Perazam", "Levenue"],
    avatarSrc: "/assets/images/me-avatar.png",
    info: [
        {
            label: "Location",
            value: "Ihor Ulchak, Ukraine",
            icon: <MapPin />,
        },
        {
            label: "Birth Date",
            value: "8th, October, 1998",
            icon: <Calendar />,
        },
        {
            label: "Time Zone",
            value: "EST time zone",
            icon: <Clock />,
        },
        {
            label: "GitHub",
            value: "santa70916112",
            icon: <Github />,
            link : 'https://github.com/santa70916112'
        },
        {
            label: "Figma",
            value: "santa70916112",
            icon: <Figma />,
            link : 'https://figma.com/@santa70916112'
        },
    ],
};
