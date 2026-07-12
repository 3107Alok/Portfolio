import { Avatar_180, Avatar_250 } from "@assets/images";

// Importing SVGs as raw strings
import GithubIconRaw from "@assets/SVGs/Github.svg?raw";
import LinkedinIconRaw from "@assets/SVGs/Linkedin.svg?raw";
import TwitterIconRaw from "@assets/SVGs/Twitter.svg?raw";
import InstagramIconRaw from "@assets/SVGs/Instagram.svg?raw";
import GoogleIconRaw from "@assets/SVGs/Google.svg?raw";
import DiscordIconRaw from "@assets/SVGs/Discord.svg?raw";

import { LogoIcon } from "@/assets/SVGs";
import { ThemeOptions } from "../../scripts/generateThemes";

// Theme Configuration
export const themeConfig = ThemeOptions.DEFAULT;

// Site Configuration
export const siteConfig = {
    title: "Alok Singh | Software Engineer & Developer",
    description: "Alok Singh is a Computer Science undergraduate skilled in Flutter, Python, and serverless AWS architectures, building full-stack, AI-integrated applications.",
    canonical: "https://your-domain.com/",
    googleSiteVerification: "",
    keywords: "Alok Singh, Software Engineer, Flutter Developer, Python Developer, AWS, Serverless, AI-integrated applications, Fullstack Developer",
    avatar: "",
    siteUrl: "https://your-domain.com/",
}

// Header Section
export const headerConfig = {
    logotext: "Portfolio.",
    actionButton: {
        text: "Resume",
        url: "/Alok_Resume.pdf" // use full URL or Public Folder path
    },
}

// Hero Section
export const heroConfig = {
    salutation: "Hi👋🏻 My name is",
    firstName: "Alok",
    lastName: "Singh.",
    position: "Software Developer",
    tagLine: {
        prefixText: "I build",
        highlightedText: "AI-integrated",
        suffixText: "Applications."
    },
    avatar: Avatar_180,
    links: [
        {
            label: "GitHub",
            url: "https://github.com/3107Alok",
            icon: GithubIconRaw
        },
        {
            label: "LinkedIn",
            url: "https://www.linkedin.com/in/alok-singh-86688a315/",
            icon: LinkedinIconRaw
        }
    ],
}

// About Section
export const aboutConfig = {
    aboutAvatar: Avatar_250,
    description: [
        "Hey there! I'm Alok Singh, a 3rd year Computer Science undergraduate at Krishna Institute of Engineering and Technology (KIET).",
        "I am skilled in Flutter, Python, and serverless AWS architectures. I have hands-on experience building full-stack, AI-integrated applications across healthcare, education, and cloud platforms.",
        "I have a strong foundation in Data Structures, System Design, and REST API development.",
        "I enjoy solving complex problems and exploring Machine Learning, striving to create impactful digital experiences."
    ],
}

// Footer Section
export const footerConfig = {
    logo: LogoIcon,
    title: "Alok Singh | Portfolio.",
    links: [
        {
            label: "GitHub",
            url: "https://github.com/3107Alok",
            icon: GithubIconRaw
        },
        {
            label: "LinkedIn",
            url: "https://www.linkedin.com/in/alok-singh-86688a315/",
            icon: LinkedinIconRaw
        }
    ],
    copyrightText: `© Copyright ${new Date().getFullYear()} Alok Singh`
}

