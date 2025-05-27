import { ContactInfo, Experience, PersonalInfo, ProjectComplete, Skills, Testimonial, TotalFollowers } from "@/types/main";


// Define constants for data
export const PROJECT_COMPLETE: ProjectComplete = {
    title: "Project Complete",
    value: 100,
    completedProjects: "100+",
    description: "Completed 100+ Projects",
    strokeColor: "#17C964"
};

export const TOTAL_FOLLOWERS: TotalFollowers = {
    title: "Total Followers",
    followers: "10K+",
    imageSrc: "/assets/images/hearts.png",
    imageAlt: "hearts"
};

export const PERSONAL_INFO: PersonalInfo = {
    fullName: "Bohdan Andriy",
    headline: [
        "Full Stack Developer",
        "Wordpress Developer",
        "Shopify Developer",
        "React/ReactNative Developer",
        "PHP/Python Developer",
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
        src: "/assets/images/discord.jpg",
        alt: "Discord",
        link : "https://discord.com/channels/@bohdan_kolya_99067"
    },
    {
        src: "/assets/images/telegram.png",
        alt: "Telegram",
        link : "https://t.me/dev_expert123"
    },
    {
        src: "/assets/images/whatsapp.png",
        alt: "Whatsapp",
        link : "https://wa.me/38095315274",
    },
    {
        src: "/assets/images/google.png",
        alt: "Google",
        link : "shinobi.design416@gmail.com"
    }
];
