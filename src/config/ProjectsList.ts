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
            TECH_STACK.Render
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
        name: "Invoxa",
        shortDescription: "A full-stack offline-first billing and inventory management application built for local retailers. Invoxa enables fast barcode-based billing, inventory management, professional invoice generation, and secure cloud backup while ensuring uninterrupted offline operations.",
        description: "Invoxa is an offline-first billing solution designed for small businesses and local shopkeepers who need a fast, reliable, and easy-to-use billing system. The application uses Hive as the primary local database, allowing all billing operations to continue seamlessly even without an internet connection. When connectivity is restored, data is securely synchronized with Firebase Cloud Firestore in the background.\n\nThe platform combines barcode scanning, inventory management, customer billing, PDF invoice generation, sales analytics, and secure authentication into a production-style Flutter application following Clean Architecture and the BLoC state management pattern.",
        logoImage: LOGOS.InvoxaLogo,
        previewImage: SCREENSHOTS.InvoxaMainpage,
        deviceMockupImage: MOCKUPS.VortexaMockup,
        theme: "#6366f1",
        status: "completed",
        liveUrl: "",
        sourceUrl: "https://github.com/3107Alok/Invoxa",
        downloadUrl: "YOUR_GOOGLE_DRIVE_LINK_HERE",
        role: "Full Stack Developer (Solo)",
        duration: "July 2026",
        platform: "Cross-Platform (Flutter)",
        screenshots: [
            SCREENSHOTS.InvoxaShot2,
            SCREENSHOTS.InvoxaShot3,
            SCREENSHOTS.InvoxaShot4,
            SCREENSHOTS.InvoxaShot5,
            SCREENSHOTS.InvoxaShot7,
            SCREENSHOTS.InvoxaShot8,
            SCREENSHOTS.InvoxaShot9,
            SCREENSHOTS.InvoxaShot10,
            SCREENSHOTS.InvoxaShot11
        ],
        technologies: [
            TECH_STACK.Flutter,
            TECH_STACK.Dart,
            {
                title: "BLoC",
                description: "Business Logic Component state management pattern for predictable state transitions.",
                icon: TECH_STACK.Flutter.icon
            },
            {
                title: "Clean Architecture",
                description: "Separation of concerns architecture with Domain, Data, and Presentation layers.",
                icon: TECH_STACK.VSCode.icon
            },
            {
                title: "Hive",
                description: "Lightweight and blazing fast key-value database written in pure Dart for offline storage.",
                icon: TECH_STACK.SQLite.icon
            },
            TECH_STACK.Firebase,
            TECH_STACK.Firestore,
            {
                title: "Google ML Kit",
                description: "On-device Machine Learning APIs for barcode scanning and QR code processing.",
                icon: TECH_STACK.ComputerVision.icon
            },
            {
                title: "Firebase Cloud Sync",
                description: "Background synchronization between local Hive database and Cloud Firestore.",
                icon: TECH_STACK.Firebase.icon
            },
            TECH_STACK.RESTAPI
        ],
        features: [
            {
                title: "Offline-First Billing",
                description: "Complete billing workflow works entirely offline using Hive as the primary local database."
            },
            {
                title: "Barcode Scanner",
                description: "Fast barcode scanning with Google ML Kit including smart duplicate detection and quantity auto-increment."
            },
            {
                title: "Inventory Management",
                description: "Manage barcode and non-barcode products with editing, searching, sorting, and stock organization."
            },
            {
                title: "Professional PDF Invoices",
                description: "Generate clean invoice PDFs with shop branding, GST details, customer information, payment QR, and printable layouts."
            },
            {
                title: "Automatic QR Processing",
                description: "Automatically detects, crops, compresses, and stores payment QR codes using on-device ML Kit without requiring internet."
            },
            {
                title: "Secure Authentication",
                description: "Firebase Authentication with Email/Password, Google Sign-In, password recovery, and persistent sessions."
            },
            {
                title: "Background Cloud Sync",
                description: "Automatically synchronizes products, bills, and shop profile to Cloud Firestore without interrupting the user experience."
            },
            {
                title: "Shop Profile Management",
                description: "Manage business information, GST number, payment QR, logos, business hours, and store branding."
            },
            {
                title: "Sales Analytics & Billing History",
                description: "Track daily revenue, invoices, billing history, and business performance through a clean analytics dashboard."
            },
            {
                title: "Multi-Device Backup",
                description: "Securely restore products, shop information, and billing history after logging into another device."
            }
        ],
        challenges: "Designing a robust offline-first synchronization strategy between local Hive DB and Cloud Firestore | Optimizing Google ML Kit barcode scanner for fast, continuous scans without UI freezing | Implementing automated on-device payment QR code detection, cropping, and local processing | Generating pixel-perfect PDF invoices matching standard receipt printer dimensions | Maintaining a scalable state architecture with BLoC and Clean Architecture patterns",
        improvements: "GST Reports & Tax Filing | Inventory Stock Alerts | Supplier & Purchase Management | Customer Credit (Khata) System | Sales Dashboard with Charts | Expense Management | Multi-Store Support | UPI Payment Verification | Business Insights using AI",
        logoSize: 55,
        versions: []
    },
    {
        isHidden: false,
        name: "AttendX",
        shortDescription: "An AI-powered smart attendance management application that enables faculty to register students, automate attendance using face recognition, and monitor attendance records through interactive dashboards and student analytics.",
        description: "AttendX is a modern smart attendance solution built for educational institutions to simplify classroom attendance using on-device AI face recognition. The application allows faculty to enroll students, conduct attendance sessions, manage student records, and monitor attendance statistics through an intuitive dashboard. Built with Flutter, Firebase, TensorFlow Lite, and Google ML Kit, AttendX combines secure authentication, intelligent face recognition, and real-time attendance management into a clean cross-platform application.",
        logoImage: LOGOS.AttendXLogo,
        previewImage: SCREENSHOTS.AttendXMainpage,
        deviceMockupImage: MOCKUPS.VortexaMockup,
        theme: "#a855f7",
        status: "completed",
        liveUrl: "",
        sourceUrl: "https://github.com/3107Alok/AttendX",
        downloadUrl: "YOUR_GOOGLE_DRIVE_LINK_HERE",
        role: "Full Stack Developer (Solo)",
        duration: "July 2026",
        platform: "Cross-Platform (Flutter)",
        screenshots: [
            SCREENSHOTS.AttendXShot1,
            SCREENSHOTS.AttendXShot2,
            SCREENSHOTS.AttendXShot3,
            SCREENSHOTS.AttendXShot4,
            SCREENSHOTS.AttendXShot5,
            SCREENSHOTS.AttendXShot6,
            SCREENSHOTS.AttendXShot7
        ],
        technologies: [
            TECH_STACK.Flutter,
            TECH_STACK.Dart,
            {
                title: "BLoC",
                description: "Business Logic Component state management pattern for predictable state transitions.",
                icon: TECH_STACK.Flutter.icon
            },
            {
                title: "Clean Architecture",
                description: "Separation of concerns architecture with Domain, Data, and Presentation layers.",
                icon: TECH_STACK.VSCode.icon
            },
            TECH_STACK.Firebase,
            TECH_STACK.Firestore,
            {
                title: "TensorFlow Lite",
                description: "On-device machine learning inference for running facial embedding models.",
                icon: TECH_STACK.tflite.icon
            },
            {
                title: "Google ML Kit",
                description: "On-device APIs for face detection and contour tracking.",
                icon: TECH_STACK.ComputerVision.icon
            },
            {
                title: "Face Recognition",
                description: "Facial embedding extraction and Euclidean distance matching for user identification.",
                icon: TECH_STACK.ComputerVision.icon
            },
            TECH_STACK.RESTAPI
        ],
        features: [
            {
                title: "AI Face Recognition",
                description: "On-device facial recognition using TensorFlow Lite and Google ML Kit for fast and secure attendance marking."
            },
            {
                title: "Student Enrollment",
                description: "Register students with profile details and facial data for accurate recognition."
            },
            {
                title: "Automated Attendance",
                description: "Start attendance sessions, scan faces in real time, and automatically mark attendance while preventing duplicate entries."
            },
            {
                title: "Attendance Dashboard",
                description: "View today's attendance, enrolled students, weekly attendance trends, and attendance summaries."
            },
            {
                title: "Student Management",
                description: "Search, edit, delete, and manage student records with semester and section filters."
            },
            {
                title: "Student Attendance History",
                description: "Track individual attendance percentage and detailed attendance history for every student."
            },
            {
                title: "Secure Authentication",
                description: "Firebase Authentication with Email/Password, Google Sign-In, password recovery, and persistent login sessions."
            },
            {
                title: "Cloud Database",
                description: "Store student information and attendance records securely using Firebase Cloud Firestore."
            },
            {
                title: "Attendance Reports",
                description: "Generate daily attendance reports with present/absent statistics and historical attendance records."
            },
            {
                title: "Faculty Profile",
                description: "Manage faculty information including college, department, email, and account settings."
            }
        ],
        challenges: "Implementing fast on-device face recognition with TensorFlow Lite | Optimizing continuous face scanning for smooth attendance sessions | Preventing duplicate attendance entries during live scanning | Managing real-time attendance synchronization with Firebase Firestore | Building a scalable architecture using BLoC and Clean Architecture",
        improvements: "Liveness Detection (Anti-Spoofing) | QR-based Student Attendance | CSV/PDF Attendance Export | Cloud Backup | Push Notifications | Advanced Attendance Analytics | Parent Portal",
        logoSize: 55,
        versions: []
    }
];
//#endregion Projects List