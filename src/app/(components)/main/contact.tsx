// components/ContactInfo.tsx
import { CONTACT_INFO } from "@/constants/main";
import Image from "next/image";
import Heading from "@/components/basic/heading";

const ContactInfo = () => {
    return (
        <div className="flex flex-col items-center flex-1 bg-card p-4 rounded-xl cursor-pointer">
            <Heading level={6} className="mb-5">Contact Info</Heading>
            <div className="grid grid-cols-2 gap-2 pt-5">
                {CONTACT_INFO?.map((contact) => (
                    <Image
                        key={contact.alt}
                        src={contact.src}
                        className="transition-transform duration-500 hover:scale-105"
                        alt={contact.alt}
                        width={150}
                        height={150}
                    />
                ))}
            </div>
        </div>
    );
};

export default ContactInfo;
