import founderImage from "@/assets/founder-rishabh.jpg";
import teamRitikaImage from "@/assets/team-ritika.jpg";
import teamMeghnaImage from "@/assets/team-meghna.jpg";
import teamPujaImage from "@/assets/team-puja.jpg";
import teamRajatImage from "@/assets/team-rajat.jpg";
import teamSwatiImage from "@/assets/team-swati.jpg";
import teamAnkkitImage from "@/assets/team-ankkit.jpg";
import teamDaksheshImage from "@/assets/team-dakshesh.jpg";

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  linkedinUrl: string;
  bio: string;
  /** Soft accent used behind the photo on cards - keeps each face visually distinct */
  accent: "coral" | "gold" | "sky" | "primary";
}

export const founder = {
  name: "Rishabh Agarwal",
  role: "Founder & CEO",
  image: founderImage,
  linkedinUrl: "https://www.linkedin.com/in/rishabhagarwaliimc",
  bioLinksUrl: "https://linktr.ee/rishabh.iimc",
  bio: "Engineer and IIM Calcutta alumnus with 20 years in supply chain and strategy. Author of four books, speaker, and guest faculty. Founded FaxLab AI to make practical, honest AI education and consulting accessible and leads its curriculum, consulting engagements, and the Win-Win Code masterclass.",
  credentials: [
    { label: "IIM Calcutta Alumnus", accent: "primary" as const },
    { label: "4x Author", accent: "coral" as const },
    { label: "20+ Years Experience", accent: "gold" as const },
    { label: "Guest Faculty", accent: "sky" as const },
  ],
};

// Real differentiators from faxlab.in — used for the homepage trust bar and About page
export const whyFaxLab = [
  {
    title: "Practitioner-Led",
    description:
      "Founded and taught by an engineer and IIM Calcutta MBA who has led AI transformation work not career trainers reading someone else's deck.",
    accent: "primary" as const,
  },
  {
    title: "Vendor-Neutral",
    description:
      "We don't resell tools or take referral fees. Our only incentive is the recommendation that actually works for you.",
    accent: "coral" as const,
  },
  {
    title: "Outcome-Focused",
    description:
      "Every engagement starts with a measurable definition of success. If we can't measure it, we won't sell it.",
    accent: "gold" as const,
  },
  {
    title: "Built in India, Built for Scale",
    description:
      "Rooted in Vadodara, working with organisations that operate at Indian scale and global standards.",
    accent: "sky" as const,
  },
];

// The four consulting/training services FaxLab AI offers beyond self-paced courses
export const services = [
  {
    title: "AI Consulting & Strategy",
    description:
      "Readiness assessments, use-case discovery, and pragmatic AI roadmaps. We help leadership decide where AI genuinely pays off and where it doesn't.",
  },
  {
    title: "AI Training & Education",
    description:
      "Structured programs for professionals and teams from AI fundamentals to applied generative AI built around real work, not slideware.",
  },
  {
    title: "Workshops & Masterclasses",
    description:
      "High-intensity sessions for corporates and universities: AI productivity, prompt craft, and function-specific playbooks your people use the next morning.",
  },
  {
    title: "Enterprise AI Solutions",
    description:
      "Applied AI for operations and supply chains pilots, process automation, and decision support, scoped tightly and measured against business outcomes.",
  },
];

// "Assess. Pilot. Scale." — FaxLab AI's real engagement process
export const process = [
  {
    step: "01",
    title: "Assess",
    description: "We map your processes, data, and skills to find the highest-value, lowest-risk places to start.",
  },
  {
    step: "02",
    title: "Pilot",
    description: "Small, sharply scoped engagements with clear success criteria proof before commitment.",
  },
  {
    step: "03",
    title: "Scale",
    description: "What works gets rolled out with the training and governance to make it stick.",
  },
];

// Real featured program, sold via FaxLab's Graphy storefront
export const featuredProgram = {
  title: "The Win-Win Code",
  subtitle: "Negotiations Masterclass",
  instructor: "Rishabh Agarwal",
  modules: 12,
  hours: 8,
  highlights: [
    "Psychology and frameworks of negotiation",
    "Real-world business scenarios and strategies",
    "Self-paced, taught by Rishabh Agarwal",
  ],
  url: "https://faxlab.graphy.com/courses/win-win-negotiation-masterclass-rishabh-agarwal-68ee32b7a3216c6501d95aba",
};

// Real capability tags from faxlab.in's hero marquee
export const capabilities = [
  "AI Strategy",
  "Generative AI",
  "AI Workshops",
  "Supply Chain AI",
  "AI Training",
  "Enterprise AI",
  "AI Productivity",
  "AI Innovation",
];

// Real YouTube presence
export const youtube = {
  handle: "@faxlabai",
  channelUrl: "https://www.youtube.com/@faxlabai",
  videos: [
    {
      title: "Qwen AI — Build Apps, Websites & Games with Agentic AI",
      url: "https://www.youtube.com/watch?v=HZj6ZDwTdZA",
      id: "HZj6ZDwTdZA",
    },
    {
      title: "Comet Browser AI — Automate Web Research & Daily Tasks",
      url: "https://www.youtube.com/watch?v=0OAvoD7Owbg",
      id: "0OAvoD7Owbg",
    },
  ],
};

export const teamMembers: TeamMember[] = [
  {
    name: "Rajat Agarwal",
    role: "Director",
    image: teamRajatImage,
    linkedinUrl: "https://www.linkedin.com/in/rajatagarwal23",
    bio: "Strategic leader driving FaxLab AI's vision and growth with expertise in business development.",
    accent: "coral",
  },
  {
    name: "CS Puja Shree Agarwal",
    role: "Director",
    image: teamPujaImage,
    linkedinUrl: "https://www.linkedin.com/in/pujashreeagrawal/",
    bio: "Corporate affairs expert ensuring FaxLab AI's compliance and governance excellence.",
    accent: "sky",
  },
  {
    name: "Ankkit Mittal",
    role: "Director",
    image: teamAnkkitImage,
    linkedinUrl: "https://www.linkedin.com/in/ankkit-mittal-20a36817",
    bio: "Experienced leader driving strategic initiatives and business excellence at FaxLab AI.",
    accent: "gold",
  },
  {
    name: "Swati Agarwal",
    role: "Associate Director",
    image: teamSwatiImage,
    linkedinUrl: "https://www.linkedin.com/in/swatyaggrawal",
    bio: "Dedicated to operational excellence and team coordination at FaxLab AI.",
    accent: "primary",
  },
  {
    name: "Ritika Singhal",
    role: "Associate Director",
    image: teamRitikaImage,
    linkedinUrl: "https://www.linkedin.com/in/ritika-singhal-4562b316/",
    bio: "Driving educational initiatives and program management at FaxLab AI.",
    accent: "coral",
  },
  {
    name: "Meghna Nag",
    role: "Team Member",
    image: teamMeghnaImage,
    linkedinUrl: "https://www.linkedin.com/in/meghna-nag-5247b33a/",
    bio: "Contributing to FaxLab AI's mission with dedication and expertise.",
    accent: "sky",
  },
  {
    name: "Dakshesh Sood",
    role: "Assistant Director",
    image: teamDaksheshImage,
    linkedinUrl: "https://www.linkedin.com/in/daksheshsood",
    bio: "Supporting FaxLab AI's growth and operations with strategic insight and dedication.",
    accent: "gold",
  },
];
