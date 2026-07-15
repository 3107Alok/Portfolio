import SHOTS from "@/assets/Shots";

export interface ICertification {
    title: string;
    issuer: string;
    date: string;
    image: ImageMetadata;
    verificationUrl?: string;
    credentialId?: string;
    companyLogo?: string; // e.g. "aws", "pearson", "infosys"
}

export const CertificationsList: ICertification[] = [
    {
        title: "AWS Certified Data Engineer - Associate",
        issuer: "Amazon Web Services",
        date: "April 2026",
        image: SHOTS.AWSDataEnggAssociate,
        verificationUrl: "https://aws.amazon.com/verification",
        credentialId: "d82dd06b0ec944f6a7bc8ea9c66687a1",
        companyLogo: "aws"
    },
    {
        title: "AWS Certified AI Practitioner",
        issuer: "Amazon Web Services",
        date: "May 2026",
        image: SHOTS.AWSAIPractitioner,
        verificationUrl: "https://aws.amazon.com/verification",
        credentialId: "cb58d64b2cda44f5a7bc8ea9c66687a1",
        companyLogo: "aws"
    },
    {
        title: "AWS Certified Cloud Practitioner",
        issuer: "Amazon Web Services",
        date: "February 2026",
        image: SHOTS.AWSCloudPractitioner,
        verificationUrl: "https://aws.amazon.com/verification",
        credentialId: "a2dae0e4c92c41048d961b392b3a303e",
        companyLogo: "aws"
    },
    {
        title: "Mobile App Development using Flutter",
        issuer: "Infosys Springboard",
        date: "June 2026",
        image: SHOTS.InfosysSpringboardFlutter,
        verificationUrl: "https://verify.onwingspan.com",
        companyLogo: "infosys"
    },
    {
        title: "Pearson MePro Level 7 Progressive",
        issuer: "Pearson MePro",
        date: "December 2024",
        image: SHOTS.PearsonMeproLevel7,
        verificationUrl: "https://www.credly.com/go/a0c9V6UQ",
        companyLogo: "pearson"
    }
];
