import {
  nitk,
  cluboard,
  cash_flow,
  gdsc,
  iris,
  ecell,
  genesis,
  portfolio,
  cdc,
  chargeswap,
  placeicon,
  recruitment,
  huntly,
  oracle,
  agatsa,
  comicify_ai,
  greentrust,
  averlon,
  devfolio,
  pba,
  ethglobal,
  polkadot,
  lightspeed,
  dennisivy,
  manipal,
  icon,
  ethforall,
  ethindia,
  hackercup,
  globalAi,
  khoj,
  kosh,
  polkadot_dev_cli,
  iitk,
  nshm
} from "../assets";

import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillMail,
  AiOutlineTwitter,
  AiFillHtml5,
  AiOutlineGitlab,
} from "react-icons/ai";

import {
  SiDjango,
  SiJavascript,
  SiBootstrap,
  SiReact,
  SiTailwindcss,
  SiGraphql,
  SiPython,
  SiCplusplus,
  SiC,
  SiRubyonrails,
  SiJquery,
  SiPostman,
  SiGit,
  SiMysql,
  SiSolidity,
  SiNetlify,
  SiChartdotjs,
  SiVite,
  SiArduino,
  SiWeb3Dotjs,
  SiIpfs,
  SiDotnet,
  SiTwilio,
  SiFlutter,
  SiReplit,
  SiFlask,
  SiFigma,
  SiGooglemaps,
  SiOpenai,
  SiGooglecloud,
  SiNextdotjs,
  SiTypescript,
  SiClaude,
  SiOracle,
  SiTensorflow,
  SiPytorch,
  SiScikitlearn,
  SiMongodb,
  SiFastapi,
  SiLangchain,
  SiHuggingface,
  SiDocker,
  SiNumpy,
  SiPandas,
  SiJupyter,
  SiOpensearch,
  
} from "react-icons/si";

import { FaHardHat, FaRust } from "react-icons/fa";

import { IoIosNotificationsOutline } from "react-icons/io";

import { FaGolang } from "react-icons/fa6";

import { DiCss3, DiDocker, DiJava, DiMsqlServer, DiRuby } from "react-icons/di";
import { VscAzure } from "react-icons/vsc";
import { BiLogoVisualStudio } from "react-icons/bi";

export const resumeLink =
  "https://drive.google.com/file/d/1Z9VDwuZpjVkDmUoOjQTpo_HFyOgp_Rgw/view?usp=sharing";
export const repoLink = "https://github.com/mittal-parth/personal-portfolio";

export const callToAction = "https://www.linkedin.com/in/ravishankardas/";

export const navLinks = [
  // {
  //   id: "skills",
  //   title: "Skills & Experience",
  // },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "achievements",
    title: "Achievements",
  },
  {
    id: "projects",
    title: "Projects",
  },
  // {
  //   id: "openSource",
  //   title: "Open Source",
  // },
  // {
  //   id: "extraCurricular",
  //   title: "Extra Curricular",
  // },
  {
    id: "contactMe",
    title: "Contact Me",
  },
];

// Add your past academic experiences here
export const educationList = [
  {
    id: "education-1",
    icon: iitk,
    title: "Indian Institute of Technology Kanpur",
    degree: "M.Tech CSE",
    duration: "June 2021 - June 2023",
    content1: "Major: Computer Science and Engineering",
    content2: "",
  },
  {
    id: "education-2",
    icon: nshm,
    title: "NSHM Knowledge Campus, Durgapur",
    degree: "B.Tech ECE",
    duration: "May 2015 - June 2019",
    content1: "Major: Electronics and Communication Engineering",
  },
];

// Add your past achievements here for example - rankings in hackathons/events
export const achievements = [
  {
    id: "a-1",
    icon: hackercup,
    event: "Meta HackerCup'24",
    position: "541st",
    content1: "Secured 541st global and 54th India ranks in the qualification round.",
    content2: "Qualified for the Round 1 and 2 of the competition.",
    article: "https://www.facebook.com/codingcompetitions/hacker-cup/2024/certificate/548183224296558"
  },
  {
    id: "a-2",
    icon: hackercup,
    event: "CodeChef ",
    position: "40th",
    content1: "Secured 40th, 96th, 98th, 242nd rabks in contests.",
    content2: "Secured 3* with rating of 1628.",
    article: "https://www.codechef.com/rankings/FEB222C?itemsPerPage=100&order=asc&page=1&search=deathgod020&sortBy=rank"
  },
  {
    id: "a-3",
    icon: hackercup,
    event: "HackerRank ",
    position: "6*",
    content1: "Earned 6*(GOLD) in algorithmic problems.",
    content2: "Earned 5*(GOLD) in C++.",
    content3: "Earned 3*(SILVER) in SQL.",
    article: "https://www.hackerrank.com/profile/deathBlade02"
  },
  // {
  //   id: "a-2",
  //   icon: ethglobal,
  //   event: "ETHIndia'22 | World's Largest Ethereum Hackathon",
  //   position: "Winner",
  //   content1: "Top 12 Winners among 20k+ registrations",
  //   content2: "One of Polygon's Best Public Goods",
  //   content3: "Best Module on Biconomy SDK",
  //   article:
  //     "https://www.thehindu.com/news/cities/Mangalore/nitk-iiit-delhi-team-makes-it-to-top-12-winners-in-ethindia-22/article66238923.ece",
  //   project: "https://devfolio.co/projects/chargeswap-3527",
  //   youtube: "https://youtu.be/9rieTya8Yds?t=3908",
  // },
  // {
  //   id: "a-3",
  //   icon: polkadot,
  //   event: "Polkadot Hackathon: Europe Edition",
  //   position: "2nd Runner Up in the ink! Smart Contract Category",
  //   content1:
  //     "Built GreenTrust offering a novel solution for obtaining certification in organic farming.",
  //   content2: "",
  //   content3: "",
  //   article:
  //     "https://www.linkedin.com/posts/mittal-parth_hackathon-winners-web3-activity-7048340759116214272-eJvo?utm_source=share&utm_medium=member_desktop&rcm=ACoAADOa76QB7zljgX8NK4xVSZXi0Z49ETMeC-g",
  //   github: "https://github.com/pranav2305/GreenTrust",
  // },
  // {
  //   id: "a-4",
  //   icon: lightspeed,
  //   event: "Warpspeed by Lightspeed",
  //   position: "1st Runner Up",
  //   content1: "1st Runner Up Overall by Lightspeed among 107 hackers",
  //   content2: "Top 3 projects using Replit",
  //   content3: "1st Runner Up by Amazon Web Services (AWS)",
  //   article: "https://shorturl.at/fhjsT",
  // },
  // {
  //   id: "a-5",
  //   icon: globalAi,
  //   event: "Global AI HackFest 2023",
  //   position: "Winner",
  //   content1:
  //     "1st Position in the Education, Finance & Tech track by AI Planet",
  //   content2: "",
  //   content3: "",
  //   article:
  //     "https://www.linkedin.com/posts/mittal-parth_happy-to-share-that-comicifyai-emerged-as-activity-7078790186435833856-88fh",
  // },
  // {
  //   id: "a-6",
  //   icon: dennisivy,
  //   event: "September Hackathon by Dennis Ivy",
  //   position: "Winner",
  //   content1:
  //     "Rated the best portfolio website among 450+ participants across the globe.",
  //   content2: "",
  //   content3: "",
  //   youtube: "https://www.youtube.com/watch?v=X2473En3h_o&t=5278s",
  //   project: "https://parthmittal.netlify.app/",
  // },
  // {
  //   id: "a-7",
  //   icon: manipal,
  //   event: "Manipal Hackathon'22",
  //   position: "Consolation Prize",
  //   content1: "Top 10 among 500+ teams across India",
  //   content2:
  //     "Developed a cross-platform mobile application to address the problem of social cohesion.",
  //   content3: "",
  //   article: "https://shorturl.at/exEIQ",
  // },
  // {
  //   id: "a-8",
  //   icon: icon,
  //   event: "ICON Hyperbuild Hackathon",
  //   position: "Honorable Mention",
  //   content1:
  //     "Honorable Mention among 655 participants across the globe in a 3 month-long online hackathon.",
  //   content2: "",
  //   content3: "",
  //   project: "https://devpost.com/software/green-trust-xj2w6g",
  // },
  // {
  //   id: "a-9",
  //   icon: ethforall,
  //   event: "ETHForAll 2023",
  //   position: "Top 3 Superfluid Projects",
  //   content1:
  //     "Bounty winners among 430 projects in ETHGlobal's largest online hackathon.",
  //   content2: "",
  //   content3: "",
  //   project: "https://devfolio.co/projects/green-trust-ed14",
  // },
];

// Add your software developments skills here for example - programming languages, frameworks etc.
export const skills = [
  {
    title: "Programming Languages",
    items: [
      {
        id: "pl-1",
        icon: SiPython,
        name: "Python",
      },
      {
        id: "pl-2",
        icon: SiC,
        name: "C",
      },
      {
        id: "pl-3",
        icon: SiCplusplus,
        name: "C++",
      },
      {
        id: "pl-4",
        icon: DiJava,
        name: "Java",
      },
      {
        id: "pl-5",
        icon: SiJavascript,
        name: "JavaScript",
      },
     
    ],
  },
  {
    title: "Frameworks/Libraries",
    items: [
      {
        id: "f-1",
        icon: SiTensorflow,
        name: "TensorFlow",
      },
      {
        id: "f-2",
        icon: SiPytorch,
        name: "PyTorch",
      },
      {
        id: "f-3",
        icon: SiScikitlearn,
        name: "SciKit-Learn",
      },
      {
        id: "f-4",
        icon: SiHuggingface,
        name: "Hugging Face",
      },
      {
        id: "f-5",
        icon: SiOpenai,
        name: "OpenAI",
      },
      
    ],
  },
  {
    title: "Tools",
    items: [
      {
        id: "t-1",
        icon: SiFastapi,
        name: "FastAPI",
      },
      {
        id: "t-1",
        icon: SiMongodb,
        name: "MongoDB",
      },
      {
        id: "t-2",
        icon: SiPostman,
        name: "Postman",
      },
      {
        id: "t-3",
        icon: SiPandas,
        name: "Pandas",
      },
      {
        id: "t-4",
        icon: SiNumpy,
        name: "NumPy",
      },
      {
        id: "t-5",
        icon: SiGit,
        name: "Git",
      },
      {
        id: "t-6",
        icon: AiFillGithub,
        name: "GitHub",
      },
      {
        id: "t-6",
        icon: DiDocker,
        name: "Docker",
      },
    ],
  },
];

// Add your current/past professional work experience here
export const experiences = [
  {
    organisation: "Agatsa Software, India",
    logo: agatsa,
    link: "https://www.linkedin.com/company/agatsa/?originalSubdomain=pt",
    positions: [
      {
        title: "Machine Learning Engineer",
        duration: "Jul 2023 - Apr 2025",
        content: [
  {
    "text": "Designed an ANN classifier to differentiate between normal and abnormal PPG samples, achieving 86% accuracy.",
    "link": ""
  },
  {
    "text": "Designed a KNN based-regression model for BP prediction, with an accuracy of 91%.",
    "link": ""
  },
  {
    "text": "Developed an arrhythmia detection model for four ECG symptoms using a 2D CNN, achieving 92% accuracy.",
    "link": ""
  },
  {
    "text": "Engineered an feature extraction model for BP prediction in 3000+ PPG signals.",
    "link": ""
  },
  {
    "text": "Developed a FastAPI backend using InceptionV3 model fine-tuned on indian food dataset, integrating GPT-4 API for detailed nutritional insights.",
    "link": ""
  },
  {
    "text": "Built a QA system using advanced NLP techniques, integrating GPT-4 API for conversational AI and fine-tuned BioBERT for medical queries, deployed on AWS using Docker.",
    "link": ""
  },
  {
    "text": "Developed an AI-powered multi-food recognition API, leveraging image caching to eliminate redundant API calls, enhancing inference speed by 35% for real-time meal analysis.",
    "link": ""
  },
  {
    "text": "Built a general fitness chatbot, optimized with semantic caching to reuse past responses, reducing redundant GPT-4 queries by 50%, cutting costs, and improving response efficiency.",
    "link": ""
  },
  {
    "text": "Designed & implemented a real-time video calling system between users and astrologers using ZEGOCLOUD SDK, enabling seamless browser-based consultations.",
    "link": ""
  },
  {
    "text": "Developed a scalable matchmaking engine using Socket.IO, auto-assigning users to available astrologers and handling online/busy state transitions in real-time.",
    "link": ""
  },
  {
    "text": "Built an AI-driven astrology Q&A endpoint using OpenAI API to generate contextual responses based on user inputs like birth details and current Mahadasha/Antardasha.",
    "link": ""
  },
  {
    "text": "Designed a custom recommendation engine using OpenAI API that uses user inputs to suggest the most suitable health monitoring device and subscription plan, improving product fit and conversion rates.",
    "link": ""
  }
],
      },
    ],
  },
  
];

// Add information about all the projects to be listed out in your portfolio
// Converted projects data from LaTeX to the specified format
export const projects = [
  {
    id: "project-1",
    title: "Advanced RAG for Visual Document Understanding",
    github: "",
    link: "https://huggingface.co/spaces/DeathBlade020/RAGTechniquesComparisonTool",
    image: "", // You'll need to add the image reference
    content: "Developed cutting-edge RAG system implementing 10+ advanced techniques including HyDE, Multi-Query Retrieval, and Cross-Encoder reranking for production-grade document processing.",
    stack: [
      {
        id: "icon-1",
        icon: SiPython, // Python
        name: "Python",
      },
      {
        id: "icon-2",
        icon: SiOpenai, // Computer Vision/NLP
        name: "OpenAI",
      },
      {
        id: "icon-3",
        icon: SiLangchain, // Vector Search
        name: "LangChain",
      },
      {
        id: "icon-4",
        icon: SiHuggingface, // AI/ML
        name: "Hugging Face",
      },
    ],
  },
  {
    id: "project-2",
    title: "Multi-Modal NLP Recommendation System",
    github: "",
    link: "https://huggingface.co/spaces/DeathBlade020/MoodBasedBookSearch",
    image: "", // You'll need to add the image reference
    content: "Conducted applied research in multi-modal AI combining semantic search with emotion-based filtering for intelligent recommendations, processing 7,000+ textual data points.",
    stack: [
      {
        id: "icon-1",
        icon: SiPython, // Python
        name: "Python",
      },
      {
        id: "icon-2",
        icon: SiOpenai, // Computer Vision/NLP
        name: "OpenAI",
      },
      {
        id: "icon-3",
        icon: SiLangchain, // Vector Search
        name: "LangChain",
      },
      {
        id: "icon-4",
        icon: SiHuggingface, // AI/ML
        name: "Hugging Face",
      },
    ],
  },
  {
    id: "project-3",
    title: "Medical RAG Chatbot with Smart Routing",
    github: "",
    link: "https://huggingface.co/spaces/DeathBlade020/MedicalQAChatBotRAG",
    image: "", // You'll need to add the image reference
    content: "Developed medical AI assistant with advanced RAG using FAISS vectorstore and BiomedNLP embeddings, processing 16K+ medical Q&A pairs with intelligent query routing.",
    stack: [
      {
        id: "icon-1",
        icon: SiPython, // Python
        name: "Python",
      },
      {
        id: "icon-2",
        icon: SiOpenai, // Computer Vision/NLP
        name: "OpenAI",
      },
      {
        id: "icon-3",
        icon: SiLangchain, // Vector Search
        name: "LangChain",
      },
      {
        id: "icon-4",
        icon: SiHuggingface, // AI/ML
        name: "Hugging Face",
      },
    ],
  },
  {
    id: "project-4",
    title: "VideoQuery AI",
    github: "",
    link: "https://videoqueryai-production.up.railway.app/",
    image: "", // You'll need to add the image reference
    content: "Engineered intelligent YouTube video analysis pipeline with automated caption extraction and Whisper transcription fallback, achieving 90% faster processing and supporting both real-time captions via YouTube Transcript API and offline audio processing.",
    stack: [
      {
        id: "icon-1",
        icon: SiPython, // Python
        name: "Python",
      },
      {
        id: "icon-2",
        icon: SiOpenai, // Computer Vision/NLP
        name: "OpenAI",
      },
      {
        id: "icon-3",
        icon: SiLangchain, // Vector Search
        name: "LangChain",
      },
      {
        id: "icon-4",
        icon: SiHuggingface, // AI/ML
        name: "Hugging Face",
      },
    ],
  },
  {
    id: "project-5",
    title: "Multi-Agent Voice AI Workflow System",
    github: "",
    link: "https://drive.google.com/file/d/1MiJflRc9R6JPOn3XqVV9jhSZ9xIZjf8E/view?usp=sharing",
    image: "", // You'll need to add the image reference
    content: "Architected autonomous multi-agent system using LangGraph with state management and tool orchestration for email, calendar, task management, and web search automation.",
    stack: [
      {
        id: "icon-1",
        icon: SiPython, // Python
        name: "Python",
      },
      {
        id: "icon-2",
        icon: SiOpenai, // Computer Vision/NLP
        name: "OpenAI",
      },
      {
        id: "icon-3",
        icon: SiLangchain, // Vector Search
        name: "LangChain",
      },
      {
        id: "icon-4",
        icon: SiHuggingface, // AI/ML
        name: "Hugging Face",
      },
    ],
  },
];

export default projects;

// Add links to blogs here
export const blogPosts = [
  {
    id: "post-1",
    title: "Blog Post 01 - Title",
    link: "#",
    date: new Date().toLocaleDateString(), // Can be edited to any string format
    image: "https://via.placeholder.com/600/92c952",
    tags: [
      {
        id: "tag-1",
        name: "tag 01",
      },
      {
        id: "tag-2",
        name: "tag 03",
      },
      {
        id: "tag-3",
        name: "tag 03",
      },
    ],
  },
  {
    id: "post-2",
    title: "Blog Post 02 - Title",
    link: "#",
    date: new Date().toLocaleDateString(),
    image: "https://via.placeholder.com/600/d32776",
    tags: [
      {
        id: "tag-1",
        name: "tag 01",
      },
      {
        id: "tag-2",
        name: "tag 03",
      },
      {
        id: "tag-3",
        name: "tag 03",
      },
    ],
  },
  {
    id: "post-3",
    title: "Blog Post 03 - Title",
    link: "#",
    date: new Date().toLocaleDateString(),
    image: "https://via.placeholder.com/600/771796",
    tags: [
      {
        id: "tag-1",
        name: "tag 01",
      },
      {
        id: "tag-2",
        name: "tag 03",
      },
      {
        id: "tag-3",
        name: "tag 03",
      },
    ],
  },
];

// Highlight your GitHub stats like - Organisation, Issues Opened, Pull Requests etc.
export const stats = [
  {
    id: "stats-1",
    title: "Organisations",
    value: "2+",
  },
  {
    id: "stats-2",
    title: "Issues Opened",
    value: "6+",
  },
  {
    id: "stats-3",
    title: "Pull Requests",
    value: "6+",
  },
];

// List out the extra curricular activities you have indulged in, like - student clubs, research groups etc.
export const extraCurricular = [
  {
    id: 1,
    organisation: "Devfolio",
    title: "UniDAO Lead",
    duration: "December 2021 - Present",
    content: [
      {
        text: "Selected among 5 students across the country to lead the initiative and grow the culture of Blockchain and Ethereum, powered by Devfolio.",
        link: "https://www.linkedin.com/feed/update/urn:li:activity:7097977924686942209/",
      },
      {
        text: "Led a cohort of 37 selected students over 6 weeks to learn and build in the Ethereum ecosystem.",
        link: "https://www.linkedin.com/feed/update/urn:li:activity:7095310520282480641/",
      },
    ],
    logo: devfolio,
  },
  {
    id: 2,
    organisation: "Google Developer Student Club, NITK",
    title: "Co-Chair",
    duration: "December 2021 - Present",
    content: [
      {
        text: "Started HackClub to promote and spread the culture of Hackathons in the college. 20+ hackathons particiaptions, 15+ wins over the year.",
        link: "",
      },
      {
        text: "Co-designed and developed the official website of Incident, NITK with 15K+ visitors",
        link: "https://incident.nitk.ac.in/",
      },
    ],
    logo: gdsc,
  },
  {
    id: 3,
    organisation: "Genesis, NITK",
    title: "Competitions Head",
    duration: "Sep 2021 - Present",
    content: [
      {
        text: "Qualified for the nationals of Indian Hip Hop Dance Championship",
        link: "",
      },
      {
        text: "Won 7 inter-college solo dance competitions",
        link: "",
      },
    ],
    logo: genesis,
  },
  {
    id: 4,
    organisation: "IRIS, NITK",
    title: "Tutor",
    duration: "Jan 2022 - Jan 2022",
    content: [
      {
        text: "Mentored 150+ students in a month-long Web Development and Ruby on Rails Bootcamp",
        link: "https://github.com/IRIS-NITK/IRIS-RoR-Bootcamp-2021",
      },
    ],
    logo: iris,
  },
  {
    id: 5,
    organisation: "E-Cell, NITK",
    title: "Executive Member",
    duration: "Sep 2021 - Apr 2022",
    content: [
      {
        text: "Organised the season 3 of the E-Cell NITK Podcast",
        link: "https://www.youtube.com/watch?v=uA-Yrk6bVDc",
      },
      {
        text: "Member of the Sponsorship and E-Talks team for E-Summit'22",
        link: "",
      },
    ],
    logo: ecell,
  },
];

// Links to your social media profiles
export const socialMedia = [
  {
    id: "social-media-1",
    icon: AiFillLinkedin,
    link: "https://www.linkedin.com/in/ravishankardas/",
  },
  {
    id: "social-media-2",
    icon: AiFillGithub,
    link: "https://github.com/ravishankardas",
  },
  {
    id: "social-media-3",
    icon: AiFillMail,
    link: "mailto:ravishankerdas020@gmail.com",
  },
  // {
  //   id: "social-media-4",
  //   icon: AiOutlineTwitter,
  //   link: "https://www.twitter.com/mittalparth_",
  // },
  // {
  //   id: "social-media-5",
  //   icon: AiFillInstagram,
  //   link: "https://www.instagram.com/mittalparth_",
  // },
];

// Your professional summary
export const aboutMe = {
  name: "Ravi Shankar Das",
  githubUsername: "ravishankardas",
  tagLine:
    "Machine Learning Engineer | IITK'23",
  intro:
    "Machine Learning Engineer specializing in building scalable AI solutions, with expertise in deep learning, NLP, and data-driven product development.",
};

// The maximum number of PRs to be displayed in the Open Source Contributions section.
export const itemsToFetch = 20;

// Add names of GitHub repos you'd like to display open source contributions from in the 'org/repo' format.
export const includedRepos = [
  "publiclab/plots2",
  "zulip/zulip",
  "paritytech/polkadot-sdk",
];
