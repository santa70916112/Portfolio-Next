import { ContactInfo, Experience, PersonalInfo, ProjectComplete, Skills, Testimonial, TotalFollowers } from "@/types/main";


// Define constants for data
export const PROJECT_COMPLETE: ProjectComplete = {
    title: "Project Complete",
    value: 100,
    completedProjects: "58+",
    description: "Completed 58+ Projects",
    strokeColor: "#17C964"
};

export const TOTAL_FOLLOWERS: TotalFollowers = {
    title: "Total Followers",
    followers: "2.5K",
    imageSrc: "/assets/images/hearts.png",
    imageAlt: "hearts"
};

export const PERSONAL_INFO: PersonalInfo = {
    fullName: "Tadashi Amano",
    headline: [
        "Full Stack Developer",
        "Frontend Developer",
        "Backend Developer",
        "Web3 Full Stack Developer"
    ]
};

export const EXPERIENCE: Experience = {
    years: 7,
    label: "y"
};

export const SKILLS: Skills = {
    count: 32
};

export const TESTIMONIAL: Testimonial = {
    title: "Testimonial",
    imageSrc: "/assets/images/testimonial.png",
    imageAlt: "testimonial"
};

export const CONTACT_INFO: ContactInfo[] = [
    {
        src: "/assets/images/reddit.png",
        alt: "reddit",
        link : "https://www.reddit.com/user/fgalons/"
    },
    {
        src: "/assets/images/telegram.png",
        alt: "telegram",
        link : "https://t.me/tadashiama8894"
    },
    {
        src: "/assets/images/whatsapp.png",
        alt: "whatsapp",
        link : "https://wa.me/13142961821",
    },
    {
        src: "/assets/images/google.png",
        alt: "google",
        link : "shinobi.design416@gmail.com"
    }
];
