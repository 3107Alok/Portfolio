import SKILLS from "@/assets/skills";

// Type definition
export interface ISkill {
    name: string;
    description: string;
    icon: ImageMetadata;
    link: string;
}

// 1. Programming Languages
export const ProgrammingLanguagesStack = [
    {
        name: "C++",
        description: "General-purpose programming language with support for high-performance applications.",
        icon: SKILLS.CppIcon,
        link: "https://isocpp.org/",
    },
    {
        name: "Java",
        description: "Object-oriented programming language widely used for Android, enterprise, and backend applications.",
        icon: SKILLS.JavaIcon,
        link: "https://www.oracle.com/java/",
    },
    {
        name: "JavaScript",
        description: "High-level scripting language for adding interactivity to web pages and backend servers.",
        icon: SKILLS.JsIcon,
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
        name: "Python",
        description: "High-level, general-purpose programming language focused on readability and rapid development.",
        icon: SKILLS.PythonIcon,
        link: "https://www.python.org/",
    },

    {
        name: "Dart",
        description: "Client-optimized programming language for fast apps on any platform, developed by Google.",
        icon: SKILLS.DartIcon,
        link: "https://dart.dev/",
    },
] as const;

// 2. Android Development
export const AndroidDevelopmentStack = [
    {
        name: "Flutter",
        description: "Google's open-source framework for building beautiful, natively compiled multi-platform applications.",
        icon: SKILLS.FlutterIcon,
        link: "https://flutter.dev/",
    },
    {
        name: "Android Studio",
        description: "The official Integrated Development Environment (IDE) for Android app development.",
        icon: SKILLS.AndroidStudioIcon,
        link: "https://developer.android.com/studio",
    },
    {
        name: "SQLite",
        description: "C-language library that implements a small, fast, self-contained SQL database engine.",
        icon: SKILLS.SqliteIcon,
        link: "https://www.sqlite.org/",
    },
    {
        name: "Provider",
        description: "A wrapper around InheritedWidget to make state management in Flutter easier and more reusable.",
        icon: SKILLS.ProviderIcon,
        link: "https://pub.dev/packages/provider",
    },
] as const;

// 3. Frontend
export const FrontendStack = [
    {
        name: "HTML",
        description: "HyperText Markup Language for creating the structure of web pages.",
        icon: SKILLS.HtmlIcon,
        link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    },
    {
        name: "CSS",
        description: "Cascading Style Sheets for styling the presentation of HTML documents.",
        icon: SKILLS.CssIcon,
        link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    },
] as const;

// 4. Backend
export const BackendStack = [
    {
        name: "Flask",
        description: "A micro web framework written in Python, designed to make getting started quick and easy.",
        icon: SKILLS.FlaskIcon,
        link: "https://flask.palletsprojects.com/",
    },
    {
        name: "REST API",
        description: "Architectural style for designing networked applications using standardized HTTP methods.",
        icon: SKILLS.RestApiIcon,
        link: "https://restfulapi.net/",
    },
] as const;

// 5. Databases & Storage
export const DatabaseStack = [
    {
        name: "Firestore",
        description: "Serverless NoSQL document database from Firebase for real-time applications.",
        icon: SKILLS.FirebaseIcon,
        link: "https://firebase.google.com/docs/firestore",
    },
    {
        name: "MongoDB",
        description: "NoSQL document database offering flexibility and scalability for storing structured data.",
        icon: SKILLS.MongoIcon,
        link: "https://www.mongodb.com/",
    },
    {
        name: "MySQL",
        description: "Open-source relational database management system for structured data.",
        icon: SKILLS.MysqlIcon,
        link: "https://www.mysql.com/",
    },
    {
        name: "AWS S3",
        description: "Highly scalable object storage service for static assets, backups, and file uploads.",
        icon: SKILLS.AwsS3Icon,
        link: "https://aws.amazon.com/s3/",
    },
] as const;

// 6. Cloud
export const CloudStack = [
    {
        name: "Firebase",
        description: "Backend services, authentication, and static web hosting by Google.",
        icon: SKILLS.FirebaseIcon,
        link: "https://firebase.google.com/",
    },
    {
        name: "Vercel",
        description: "Cloud platform for serverless deployment, optimized for frontend and Next.js applications.",
        icon: SKILLS.VercelIcon,
        link: "https://vercel.com/",
    },
    {
        name: "Render",
        description: "Unified cloud platform to build and run all your apps and websites with ease.",
        icon: SKILLS.RenderIcon,
        link: "https://render.com/",
    },
    {
        name: "AWS",
        description: "Amazon Web Services cloud platform offering hosting, serverless APIs, and computing resources.",
        icon: SKILLS.AwsIcon,
        link: "https://aws.amazon.com/",
    },
] as const;

// 7. Tools
export const ToolsStack = [
    {
        name: "Git",
        description: "Distributed version control system for tracking changes and collaborating on code.",
        icon: SKILLS.GitIcon,
        link: "https://git-scm.com/",
    },
    {
        name: "GitHub",
        description: "Code hosting platform for Git repositories with collaboration and CI/CD tools.",
        icon: SKILLS.GithubIcon,
        link: "https://github.com/",
    },
    {
        name: "VS Code",
        description: "Lightweight, highly extensible code editor widely used by developers.",
        icon: SKILLS.VsCodeIcon,
        link: "https://code.visualstudio.com/",
    },
    {
        name: "Antigravity",
        description: "Your friendly AI coding assistant by Google Deepmind team, helping you build this portfolio.",
        icon: SKILLS.AntigravityIcon,
        link: "https://github.com/google",
    },
] as const;

// 8. AI & Machine Learning
export const AIMachineLearningStack = [
    {
        name: "Scikit-learn",
        description: "Simple and efficient tools for predictive data analysis and machine learning in Python.",
        icon: SKILLS.ScikitIcon,
        link: "https://scikit-learn.org/",
    },
    {
        name: "tflite",
        description: "TensorFlow Lite is a mobile schema for deploying lightweight machine learning models on device.",
        icon: SKILLS.TfliteIcon,
        link: "https://www.tensorflow.org/lite",
    },
    {
        name: "Pandas",
        description: "Fast, powerful, flexible and easy to use open source data analysis and manipulation tool.",
        icon: SKILLS.PandasIcon,
        link: "https://pandas.pydata.org/",
    },
    {
        name: "NumPy",
        description: "The fundamental package for scientific computing with Python, offering powerful N-dimensional arrays.",
        icon: SKILLS.NumpyIcon,
        link: "https://numpy.org/",
    },
    {
        name: "Computer Vision",
        description: "Field of artificial intelligence that enables computers and systems to derive meaningful information from digital images.",
        icon: SKILLS.CvIcon,
        link: "https://wikipedia.org/wiki/Computer_vision",
    },
    {
        name: "Google Earth Engine",
        description: "Cloud platform for scientific analysis and visualization of geospatial datasets.",
        icon: SKILLS.EarthEngineIcon,
        link: "https://earthengine.google.com/",
    },
] as const;

export default {
    ProgrammingLanguagesStack,
    AndroidDevelopmentStack,
    FrontendStack,
    BackendStack,
    DatabaseStack,
    CloudStack,
    ToolsStack,
    AIMachineLearningStack,
};