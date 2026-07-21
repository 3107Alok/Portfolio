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
    architecture?: string[];
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
        name: "DocMind AI",
        shortDescription: "An AI-powered intelligent document assistant that enables users to upload PDFs and engage in context-aware conversations, powered by a dual-LLM RAG pipeline with automatic provider failover.",
        description: "DocMind AI is a production-ready AI-powered RAG platform that transforms PDFs into interactive knowledge bases. Users can upload documents and ask natural-language questions, receiving source-grounded responses through semantic retrieval and a dual-LLM architecture with automatic failover between Groq and Gemini. The platform is built with Next.js, FastAPI, ChromaDB, MongoDB GridFS, and Firebase, delivering a fast, secure, and scalable document intelligence experience.",
        logoImage: LOGOS.NuklearbrainLogo,
        previewImage: SCREENSHOTS.DocMindAIMainpage,
        deviceMockupImage: MOCKUPS.ARMSv3Mockup,
        theme: "#a855f7",
        status: "completed",
        liveUrl: "https://doc-mind-ai-alpha.vercel.app",
        sourceUrl: "https://github.com/3107Alok/DocMind-AI",
        role: "Full Stack Developer (Solo)",
        duration: "June 2026 – July 2026",
        platform: "Responsive Web Application",
        screenshots: [
            SCREENSHOTS.DocMindAIShot1,
            SCREENSHOTS.DocMindAIShot2,
            SCREENSHOTS.DocMindAIShot3,
            SCREENSHOTS.DocMindAIShot4,
            SCREENSHOTS.DocMindAIShot5,
            SCREENSHOTS.DocMindAIShot6
        ],
        technologies: [
            TECH_STACK.Nextjs,
            TECH_STACK.TypeScript,
            TECH_STACK.CSS,
            TECH_STACK.FastAPI,
            TECH_STACK.Python,
            TECH_STACK.RESTAPI,
            {
                title: "Groq",
                description: "Inference engine for low-latency LLM completions.",
                icon: TECH_STACK.Python.icon
            },
            {
                title: "Gemini",
                description: "Multimodal AI models for text generation and fallback execution.",
                icon: TECH_STACK.Firebase.icon
            },
            {
                title: "ChromaDB",
                description: "Vector database for semantic search and contextual retrieval.",
                icon: TECH_STACK.MongoDB.icon
            },
            {
                title: "MongoDB GridFS",
                description: "GridFS specification for storing large files in MongoDB.",
                icon: TECH_STACK.MongoDB.icon
            },
            TECH_STACK.Firestore,
            TECH_STACK.Firebase,
            TECH_STACK.Vercel,
            TECH_STACK.Render
        ],
        features: [
            {
                title: "Dual-LLM Routing",
                description: "Automatically routes requests to Groq for low-latency inference and transparently switches to Gemini Flash whenever rate limits or transient failures occur."
            },
            {
                title: "Retrieval-Augmented Generation",
                description: "Processes uploaded PDFs using semantic chunking, Gemini Embeddings, ChromaDB vector search, and contextual retrieval before generating responses."
            },
            {
                title: "Context-Aware Conversations",
                description: "Maintains conversation history with Firestore to support follow-up questions and multi-turn document discussions."
            },
            {
                title: "Secure Document Management",
                description: "Stores PDFs securely using MongoDB GridFS while providing upload, preview, deletion, and document switching capabilities."
            },
            {
                title: "Authentication & User Isolation",
                description: "Firebase Authentication with JWT verification ensures secure sessions and complete document isolation between users."
            },
            {
                title: "Responsive Modern Interface",
                description: "Clean Apple/Linear-inspired UI with responsive layouts, smooth animations, loading states, and premium user experience."
            }
        ],
        challenges: "Designed a provider-agnostic dual-LLM routing engine with intelligent fallback logic | Optimized backend memory usage by replacing SentenceTransformers with Gemini Embeddings | Solved ChromaDB deployment limitations on Render | Fixed production migration issues related to localhost-based document URLs | Maintained consistent Firestore conversation ordering across multiple chat sessions",
        improvements: "Multi-document querying | OCR support for scanned PDFs | Conversation export as PDF | Persistent ChromaDB storage | Collaborative workspaces | Voice-based document interaction",
        architecture: [
            "PDF Upload",
            "PDF Parsing",
            "Semantic Chunking",
            "Gemini Embeddings",
            "ChromaDB",
            "Retriever",
            "Dual LLM Router (Groq + Gemini)",
            "Grounded Response"
        ],
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
        duration: "February 2026 – April 2026",
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
    },
    {
        isHidden: false,
        name: "EduNex",
        shortDescription: "An AI-powered secure study resources sharing portal that enables students to access unit-wise notes, previous year question papers (PYQs), and syllabus guidelines, verified automatically using an AI-based check engine.",
        description: "EduNex is a modern, high-performance study material sharing ecosystem designed for college environments to simplify how students access, upload, and review academic resources. Built using standard HTML5, Vanilla CSS, and JavaScript, it features a premium glassmorphic dark-theme layout. The application integrates secure AWS Cognito authentication, an AI-powered automated syllabus verification workflow (which scans uploaded PDFs to check course alignment before approval), Amazon S3 storage, and a dedicated admin panel for manual overrides and pending file actions.",
        logoImage: LOGOS.NextmartLogo,
        previewImage: SCREENSHOTS.EduNexMainpage,
        deviceMockupImage: MOCKUPS.ARMSv3Mockup,
        theme: "#a855f7",
        status: "completed",
        liveUrl: "https://github.com/3107Alok/EduNex",
        sourceUrl: "https://github.com/3107Alok/EduNex",
        downloadUrl: "",
        role: "Full Stack Developer (Solo)",
        duration: "March 2026 – April 2026",
        platform: "Web (Responsive Desktop & Mobile)",
        screenshots: [
            SCREENSHOTS.EduNexShot1,
            SCREENSHOTS.EduNexShot2,
            SCREENSHOTS.EduNexShot3,
            SCREENSHOTS.EduNexShot4,
            SCREENSHOTS.EduNexShot5,
            SCREENSHOTS.EduNexShot6
        ],
        technologies: [
            TECH_STACK.HTML,
            TECH_STACK.CSS,
            TECH_STACK.JavaScript,
            TECH_STACK.AWS,
            TECH_STACK.AWSS3,
            TECH_STACK.RESTAPI
        ],
        features: [
            {
                title: "AI-Powered Syllabus Verification",
                description: "Scans student-uploaded notes PDFs in real-time, automatically verifying document relevancy against official syllabus units before allowing the upload to complete."
            },
            {
                title: "Academic Resource Filtering",
                description: "Browse and select study materials, unit notes, and syllabus PDFs sorted by academic year (1st to 4th Year) and subject."
            },
            {
                title: "PYQ Portal",
                description: "Access organized examination categories (AKTU papers, MSE, ESE, and Question Banks) to facilitate targeted exam preparation."
            },
            {
                title: "Secure Authentication",
                description: "AWS Cognito integration with JWT validation for secure student login, registration, and administrative group permissions."
            },
            {
                title: "Real-time Progress Tracker",
                description: "Premium loading modal with real-time text updates showing extraction, analysis, and validation progress during document uploads."
            },
            {
                title: "Admin Approval Workspace",
                description: "Dedicated interface for admins to review files marked for pending approval, with instantaneous approve/reject controls."
            },
            {
                title: "Responsive Glassmorphic UI",
                description: "Apple/Linear-inspired dark interface with glowing purple borders, typewriter banners, and breathing status badges that adjust dynamically on mobile."
            }
        ],
        challenges: "Optimizing large PDF file conversions to Base64 on the client side | Synchronizing real-time progress feedback from serverless Lambda functions | Securing admin panel actions using strict Cognito JWT signature verification | Structuring dynamic DOM rendering for nested units and subjects lists while preserving CSS transitions",
        improvements: "Automated OCR notes-to-text summaries | PDF document download tracker | Push notifications for new unit uploads | Offline access using Service Workers | Integrated study groups and discussion forums under subjects",
        logoSize: 55,
        versions: []
    },
    {
        isHidden: false,
        name: "BioScan AI",
        shortDescription: "An IoT-enabled plant health monitoring system that analyzes leaf conditions using computer vision techniques to estimate plant health, tissue damage, and surface coverage in real time.",
        description: "BioScan AI is a smart agriculture project developed to assist in early plant health monitoring using computer vision and IoT. The system captures live leaf images through a Raspberry Pi camera, processes them using OpenCV-based image analysis, and estimates plant health, damage percentage, and leaf coverage in real time. A lightweight Flask backend handles image processing while the web interface displays the processed video stream and live analysis results.",
        logoImage: LOGOS.ClimateLogo, // Matches climate/plant/agriculture theme!
        previewImage: SCREENSHOTS.BioScanAI,
        deviceMockupImage: MOCKUPS.ARMSv3Mockup, // Browser mockup for Flask web portal
        theme: "#f59e0b", // Warm Amber theme matching plant health diagnostics / orange status badge
        status: "completed",
        liveUrl: "",
        sourceUrl: "https://github.com/Aditsharma12/SIH-project",
        downloadUrl: "",
        role: "IoT Development & System Planning (Team Project)",
        duration: "January 2026 – March 2026",
        platform: "Web + Raspberry Pi (IoT)",
        screenshots: [
            SCREENSHOTS.BioScanAI
        ],
        technologies: [
            TECH_STACK.Python,
            TECH_STACK.Flask,
            {
                title: "OpenCV",
                description: "Open-source computer vision library for image processing and leaf analysis.",
                icon: TECH_STACK.ComputerVision.icon
            },
            {
                title: "NumPy",
                description: "Scientific computing library for multidimensional array processing of image pixels.",
                icon: TECH_STACK.Python.icon
            },
            {
                title: "Raspberry Pi",
                description: "Edge-computing single-board computer for video stream acquisition and system orchestration.",
                icon: TECH_STACK.VSCode.icon
            },
            TECH_STACK.HTML,
            TECH_STACK.CSS,
            TECH_STACK.JavaScript
        ],
        features: [
            {
                title: "Real-Time Plant Analysis",
                description: "Captures live leaf images and analyzes plant health in real time."
            },
            {
                title: "Computer Vision Processing",
                description: "Detects leaf regions and estimates health, tissue damage, and surface coverage using OpenCV."
            },
            {
                title: "Raspberry Pi Integration",
                description: "Runs on Raspberry Pi with a connected camera module for edge-based image acquisition."
            },
            {
                title: "Live Camera Streaming",
                description: "Streams processed camera output with visual overlays through a Flask web application."
            },
            {
                title: "Health Classification",
                description: "Displays plant condition as Healthy, Moderate, Damaged, or No Plant Detected."
            },
            {
                title: "Lightweight Web Interface",
                description: "Provides a simple browser-based interface for live monitoring and analysis."
            }
        ],
        challenges: "Integrating Raspberry Pi camera with the web application | Optimizing OpenCV image processing for real-time analysis | Handling varying lighting conditions during leaf detection | Building a lightweight Flask-based processing pipeline",
        improvements: "Deep Learning-based Disease Detection | Mobile Application Integration | Cloud Monitoring Dashboard | Multi-Plant Detection | Environmental Sensor Integration | Historical Health Reports | Smart Irrigation Integration",
        logoSize: 55,
        versions: []
    },
    {
        isHidden: false,
        name: "DocMind AI",
        shortDescription: "A production-ready AI-powered document assistant that enables users to upload PDF documents and have context-aware conversations using a Retrieval-Augmented Generation (RAG) pipeline.",
        description: "DocMind AI is a full-stack RAG application designed to simplify document understanding by allowing users to interact with PDFs using natural language. The system extracts text, generates semantic embeddings using Gemini Embeddings, indexes vectors in ChromaDB, and performs semantic search to retrieve context-aware answers. It features a multi-LLM architecture with Groq as primary provider and Gemini Flash as fallback, backed by Firebase Auth, MongoDB GridFS, and Firestore for chat history.",
        logoImage: LOGOS.NuklearbrainLogo,
        previewImage: SCREENSHOTS.DocMindAIMainpage,
        deviceMockupImage: MOCKUPS.ARMSv3Mockup,
        theme: "#3b82f6",
        status: "completed",
        liveUrl: "",
        sourceUrl: "https://github.com/3107Alok/DocMind-AI",
        downloadUrl: "",
        role: "Full Stack AI Developer (Solo)",
        duration: "June 2026 – July 2026",
        platform: "Web Application",
        screenshots: [
            SCREENSHOTS.DocMindAIShot1,
            SCREENSHOTS.DocMindAIShot2,
            SCREENSHOTS.DocMindAIShot3,
            SCREENSHOTS.DocMindAIShot4,
            SCREENSHOTS.DocMindAIShot5,
            SCREENSHOTS.DocMindAIShot6
        ],
        technologies: [
            TECH_STACK.Python,
            TECH_STACK.Firebase,
            TECH_STACK.MongoDB,
            TECH_STACK.Vercel,
            TECH_STACK.Render,
            TECH_STACK.RESTAPI,
            TECH_STACK.HTML,
            TECH_STACK.CSS,
            TECH_STACK.JavaScript
        ],
        features: [
            {
                title: "AI-Powered PDF Chat & RAG",
                description: "Upload PDF documents and ask natural language questions with responses generated using Retrieval-Augmented Generation (RAG)."
            },
            {
                title: "Semantic Vector Search",
                description: "Uses Gemini Embeddings and ChromaDB vector search to retrieve relevant document chunks instead of keyword matching."
            },
            {
                title: "Multi-LLM Architecture",
                description: "Features Groq as the primary inference engine with automatic Gemini Flash fallback for high reliability during rate limits."
            },
            {
                title: "Secure Auth & Document Storage",
                description: "Firebase Authentication for user accounts, MongoDB GridFS for PDF storage, and Firestore for persistent chat logs."
            },
            {
                title: "Intelligent PDF Processing",
                description: "Extracts document content, performs semantic chunking, generates embeddings, and maintains complete conversation history."
            }
        ],
        challenges: "Designing an end-to-end RAG pipeline from PDF parsing to AI response generation | Implementing semantic chunking and vector similarity search | Integrating multi-LLM routing with automatic fallback | Managing persistent chat history with MongoDB GridFS and Firestore",
        improvements: "Streaming AI Responses | Multi-Document Chat | OCR Support for Scanned PDFs | Document Citation & Source Highlighting | Voice-Based Document Interaction | AI-Generated Summaries & Flashcards",
        logoSize: 55,
        versions: []
    }
];
//#endregion Projects List