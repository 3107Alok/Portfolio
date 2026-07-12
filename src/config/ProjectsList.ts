import LOGOS from "@assets/Logos"
import SCREENSHOTS from "@assets/Shots"
import MOCKUPS from "@assets/Mockup"
import SKILL_STACK from "@/constants/skillStack";
import { buildTechStack } from "@/utils/commonUtils";

//#region Types
/**
 * Projects List Type Definition
 * This interface defines the structure and types of properties for each project in the projects list.
 * It ensures consistency and type safety when working with project data throughout the application.
 * Each project includes details such as name, description, technologies used, features, and links.
 */
export interface IProject {
    isHidden: boolean;

    name: string;
    shortDescription: string;
    description: string;

    logoImage: ImageMetadata;
    previewImage: ImageMetadata;
    deviceMockupImage: ImageMetadata;

    theme: string;
    status: "completed" | "development";

    liveUrl: string;
    sourceUrl: string;
    downloadUrl?: string;

    demoCredentials?: {
        email: string;
        password: string;
    };

    technologies: {
        title: string;
        description: string;
        icon: ImageMetadata;
    }[];

    features: {
        title: string;
        description: string;
    }[];

    logoSize: number;

    versions: {
        title: string;
        version: string;
        url: string;
    }[];

    role?: string;
    duration?: string;
    platform?: string;
    screenshots?: ImageMetadata[];
    challenges?: string;
    improvements?: string;
}

/**
 * Technology Stack Type Definition
 * This interface defines the structure and types of properties for each technology in the tech stack.
 */
export interface ITechStack {
    title: string;
    description: string;
    icon: ImageMetadata;
}
//#endregion


//#region Tech Stack
export const TECH_STACK = {
    ...buildTechStack(SKILL_STACK.ProgrammingLanguagesStack),
    ...buildTechStack(SKILL_STACK.AndroidDevelopmentStack),
    ...buildTechStack(SKILL_STACK.FrontendStack),
    ...buildTechStack(SKILL_STACK.BackendStack),
    ...buildTechStack(SKILL_STACK.DatabaseStack),
    ...buildTechStack(SKILL_STACK.CloudStack),
    ...buildTechStack(SKILL_STACK.ToolsStack),
    ...buildTechStack(SKILL_STACK.AIMachineLearningStack),
};
//#endregion


//#region COMMON_FEATURES
/**
 * Common Features used across multiple projects
 * This object defines features that are commonly implemented in various projects.
 * Each feature includes a title and description to provide a clear understanding of its purpose.
 * These features can be easily referenced and reused in project configurations to maintain consistency and reduce redundancy.
 * To add a new common feature, simply create a new property in the COMMON_FEATURES object with the appropriate title and description.
 */
const COMMON_FEATURES = {
    Responsive: {
        title: "Responsive Design",
        description: "Enjoy a seamless experience across devices with a responsive design that adapts to various screen sizes and orientations."
    },
    SEO: {
        title: "SEO Optimization",
        description: "Crafted with SEO best practices, ensuring optimal visibility on search engines. From keyword-rich content to streamlined meta tags and efficient site architecture."
    }
}
//#endregion


//#region Template
// {
//     isHidden: false,
//     name:"TITLE",
//     shortDescription:"SHORT_DESCRIPTION",
//     description:"DESCRIPTION",
//     logoImage:LOGO_URL,
//     previewImage:Screenshots.SCREENSHOT_URL,
//     deviceMockupImage:MockupImages.MOCKUP_URL,
//     theme:"PROJECT_THEME_COLOR_HEX",
//     status:"completed OR development",
//     liveUrl:"PROJECT_URL",
//     sourceUrl:"GITHUB_URL",
//     Demo?: { 
//         email: "DEMO_EMAIL", 
//         password: "DEMO_PASSWORD" 
//     },
//     technologies:[TECH_ICONS_URL],
//     features: [{
//         title: "FEATURE_TITLE",
//         description: "FEATURE_DESCRIPTION"
//     }],
//     logoSize:50,
//     versions: [{ 
//         title: "PREV_PROJECT_TITLE", 
//         version: "VERSION_NO" 
//     }]
// },
//#endregion Template


//#region Projects List
/**
 * Projects List Configuration
 * This file contains an array of project objects, each representing a project with its details.
 * Each project object includes properties such as name, description, technologies used, features, and links.
 * The projects are organized in a structured format for easy access and management.
 * To add a new project, simply create a new object following the existing structure and append it to the PROJECTS_LIST array.
 * Make sure to import any necessary assets or icons at the top of this file.
 */
export const PROJECTS_LIST: IProject[] = [
    {
        isHidden: false,
        name: "MedVerse",
        shortDescription: "A full-stack AI-powered healthcare platform connecting patients, doctors, laboratories, and administrators through secure appointments, medical records, and intelligent health assistance.",
        description: "MedVerse is a multi-role healthcare platform built to simplify the healthcare experience for patients and medical professionals. It combines AI-powered prescription and lab report analysis, secure medical document management, appointment booking workflows, real-time notifications, and role-based dashboards into a single application. The project integrates Flutter, Flask, Firebase, MongoDB GridFS, Google Gemini AI, and Firebase Cloud Messaging to deliver a scalable, production-style architecture with a modern user experience.",
        logoImage: LOGOS.MedVerseLogo,
        previewImage: SCREENSHOTS.MedVerseMainpage,
        deviceMockupImage: MOCKUPS.VortexaMockup,
        theme: "#06b6d4",
        status: "completed",
        liveUrl: "",
        sourceUrl: "https://github.com/3107Alok/MedVerse",
        downloadUrl: "YOUR_GOOGLE_DRIVE_LINK_HERE",
        role: "Full Stack Developer (Solo)",
        duration: "June 2026",
        platform: "Cross-Platform (Flutter)",
        screenshots: [
            SCREENSHOTS.MedVerseShot1,
            SCREENSHOTS.MedVerseShot2,
            SCREENSHOTS.MedVerseShot3,
            SCREENSHOTS.MedVerseShot4,
            SCREENSHOTS.MedVerseShot5,
            SCREENSHOTS.MedVerseShot6,
            SCREENSHOTS.MedVerseShot7,
            SCREENSHOTS.MedVerseShot8
        ],
        technologies: [
            TECH_STACK.Flutter,
            TECH_STACK.Dart,
            TECH_STACK.Python,
            TECH_STACK.Flask,
            TECH_STACK.Firebase,
            TECH_STACK.Firestore,
            TECH_STACK.MongoDB,
            TECH_STACK.RESTAPI,
            TECH_STACK.Render,
            TECH_STACK.Antigravity
        ],
        features: [
            {
                title: "Secure Authentication",
                description: "Firebase Authentication with Email Verification, Password Reset, and Role-Based Access."
            },
            {
                title: "Multi-Role Healthcare Platform",
                description: "Dedicated dashboards for Patients, Doctors, Laboratories, and Administrators."
            },
            {
                title: "Appointment & Lab Booking",
                description: "Doctor appointments and laboratory booking workflows with approval management."
            },
            {
                title: "AI Healthcare Assistant",
                description: "Medical chatbot powered by Google Gemini for healthcare guidance."
            },
            {
                title: "AI Medical Report Analysis",
                description: "Prescription and laboratory report analysis with simplified health insights."
            },
            {
                title: "Real-Time Notifications",
                description: "Firebase Cloud Messaging integration for appointment and verification updates."
            },
            {
                title: "Medical Document Management",
                description: "Secure storage of prescriptions and reports using MongoDB Atlas GridFS."
            },
            {
                title: "Medical History Timeline",
                description: "Chronological medical history with grouped records and responsive timeline UI."
            },
            {
                title: "Modern UI/UX",
                description: "Responsive Glassmorphism interface with Light/Dark themes and smooth animations."
            }
        ],
        challenges: "Designing a hybrid backend architecture using Firebase + MongoDB GridFS | Implementing secure role-based authentication and authorization | Integrating AI for prescription and report analysis | Managing real-time notifications using Firebase Cloud Messaging | Optimizing Flutter UI for responsiveness across different devices",
        improvements: "Online Payments & Billing | Smart Appointment Auto Acceptance/Rejection based on availability | Video Consultation | Enhanced Analytics Dashboard | Health Connect / Wearable Device Integration | AI-powered Health Trend Analysis",
        logoSize: 55,
        versions: []
    },
    {
        isHidden: false,
        name: "LecTrack PYQ",
        shortDescription: "A central web platform to access college PYQs (Previous Year Questions) dynamically for AKTU/CT/PUE examinations.",
        description: "LecTrack PYQ is a highly structured database application built for KIET college students to find and fetch Previous Year Questions. It contains filters for subject names, departments, and specific exam types (like Sessional CT or University AKTU exams). The application is optimized for quick search and download requests, resolving academic material discoverability.",
        logoImage: LOGOS.ArmsLogo,
        previewImage: SCREENSHOTS.Armsv1Shots,
        deviceMockupImage: MOCKUPS.ARMSv3Mockup,
        theme: "#9333ea",
        status: "completed",
        liveUrl: "https://lec-track-pink.vercel.app",
        sourceUrl: "https://github.com/3107Alok/LecTrack",
        role: "Solo",
        duration: "2 Months",
        platform: "Web",
        screenshots: [
            SCREENSHOTS.Armsv1Shots,
            SCREENSHOTS.Armsv2Shots,
            SCREENSHOTS.Armsv3Shots
        ],
        technologies: [
            TECH_STACK.Reactjs,
            TECH_STACK.Nodejs,
            TECH_STACK.MySQL,
            TECH_STACK.HTML,
            TECH_STACK.CSS
        ],
        features: [
            {
                title: "Live Filter Search",
                description: "Instantly sort exam files by typing subject name or department codes."
            },
            {
                title: "Secure PDF Storage",
                description: "Secure, reliable hosting of PDF question papers for quick fetch latency."
            },
            COMMON_FEATURES.Responsive,
            COMMON_FEATURES.SEO
        ],
        logoSize: 55,
        versions: []
    }
];
//#endregion Projects List