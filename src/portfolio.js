/* Change this file to get your personal Portfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Ellen's E-Portfolio",
  description:
    "A soon-to-be MGEM graduate, a multi-disciplinary lifelong learner, a GISer, a trilingual, and a feminist",
  og: {
    title: "Ellen Wu E-Portfolio",
    type: "website",
    url: "http://ashutoshhathidara.com/",
  },
};

//Home Page
const greeting = {
  title: "Ellen Wu",
  logo_name: "Ellen Wu",
  subTitle:
    "A soon-to-be UBC MGEM graduate, a multi-disciplinary lifelong learner, a GISer, a trilingual, and a feminist.",
  portfolio_repository: "https://github.com/ellenwsw/E-Portfolio",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ellenwsw",
  // linkedin: "https://www.linkedin.com/in/sw-ellen/",
  // gmail: "ellenwushangwei@hotmail.com",

  {
    name: "Github",
    link: "https://github.com/ellenwsw",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/sw-ellen/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "email",
    link: "mailto:ellenwushangwei@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/envelope?f=classic&s=solid
    backgroundColor: "#ff0000", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "Remote Sensing & Environmental Analysis",
      titleStyle: {
        fontSize: "40px",
        textAlign: "center",
      },
      fileName: "DataScienceImg",
      skills: [
        "⚡ Processing and analyzing satellite and aerial imagery using Google Earth Engine and ESRI platforms to monitor land cover change, vegetation health, and other environmental indicators at scale",
        "⚡ Automating geospatial and environmental data workflows using Python and R, from raw data ingestion through to statistical analysis and visualization",
        "⚡ Conducting field surveys to collect ground-truth environmental data, combining in-situ observations with remote sensing outputs to validate and enrich spatial analysis",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "vscode-icons:file-type-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "R",
          fontAwesomeClassname: "simple-icons:r",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "ESRI",
          fontAwesomeClassname: "simple-icons:esri",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "Google Earth Engine",
          fontAwesomeClassname: "simple-icons:googleearthengine",
          style: {
            color: "#4285F4",
          },
        },
      ],
    },
    {
      title: "Cartography & Geospatial Analysis",
      titleStyle: {
        fontSize: "40px",
        textAlign: "center",
      },
      fileName: "FullStackImg",
      skills: [
        "⚡ Designing clear, visually compelling maps and infographics using Adobe Illustrator to communicate spatial data to both technical and general audiences",
        "⚡ Performing spatial queries, geoprocessing, and geographic modeling using ArcGIS and QGIS",
        "⚡ Combining cartographic design principles with analytical tools to produce publication-ready map products and spatial reports",
      ],
      softwareSkills: [
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "vscode-icons:file-type-ai",
          style: {
            color: "#FF9A00",
          },
        },
        {
          skillName: "ArcGIS Pro",
          fontAwesomeClassname: "simple-icons:arcgis",
          style: {
            color: "#2C7AC3",
          },
        },
        {
          skillName: "QGIS",
          fontAwesomeClassname: "simple-icons:qgis",
          style: {
            color: "#589632",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/layman_brother/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/layman_brother",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/ashutosh_1919",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "http://codeforces.com/profile/layman_brother",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@ashutosh391",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/laymanbrother",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "University of British Columbia",
      subtitle: "Master of Geomatics for Environmental Management (MGEM)",
      logo_path: "MGEM_logo.jpg",
      alt_name: "UBC MGEM",
      duration: "2025 - 2026",
      descriptions: [
        "⚡ Developed advanced geospatial programming skills through applied coursework, using Python for spatial data analysis and automation and R for remote sensing analysis and statistical modeling.",
        "⚡ Gained hands-on experience with GIS technologies and methodologies, including cloud-based platforms, spatial data science workflows, and environmental monitoring techniques.",
        "⚡ Completed a capstone project leveraging GPS location tracking data to model and forecast cattle habitat preferences, generating actionable insights for rangeland management and conservation planning.",
      ],
    },
    {
      title: "University of British Columbia",
      subtitle:
        "Bachelor of Arts in Environment and Sustainability, Minor in GIS",
      logo_path: "ubc_logo.png",
      alt_name: "University of British Columbia",
      duration: "2022 - 2025",
      descriptions: [
        "⚡ Built a foundational understanding of environmental management strategies, sustainability frameworks, and policy development, exploring how governance and planning shape environmental outcomes.",
        "⚡ Gained introductory knowledge in GIS and spatial thinking, establishing the groundwork for further technical development in geospatial analysis and mapping.",
        "⚡ Studied core concepts in biogeography, ecology, and species diversity, developing an understanding of how environmental systems function and how biodiversity is distributed across landscapes.",
      ],
    },
    {
      title: "University of Alberta",
      subtitle: "Bachelor of Commerce in Business Economics and Law",
      logo_path: "ua_logo_green_rgb.png",
      alt_name: "University of Alberta",
      duration: "2015 - 2019",
      descriptions: [
        "⚡ Developed a broad understanding of how businesses operate, spanning accounting, marketing, and economics, building a well-rounded foundation in commercial thinking and decision-making.",
        "⚡ Gained working knowledge of core business disciplines including financial principles and business communication, with experience presenting complex information clearly to professional audiences.",
        "⚡ Built specialized knowledge in contract law and international business law, developing an understanding of the legal frameworks that govern commercial relationships and global trade.",
      ],
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Machine Learning",
      subtitle: "- Andrew Ng",
      logo_path: "stanford_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
    {
      title: "Deep Learning",
      subtitle: "- Andrew Ng",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "ML on GCP",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "Data Science",
      subtitle: "- Alex Aklson",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Big Data",
      subtitle: "- Kim Akers",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
      alt_name: "Microsoft",
      color_code: "#D83B0199",
    },
    {
      title: "Advanced Data Science",
      subtitle: "- Romeo Kienzler",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Advanced ML on GCP",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "DL on Tensorflow",
      subtitle: "- Laurence Moroney",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "Fullstack Development",
      subtitle: "- Jogesh Muppala",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },
    {
      title: "Kuberenetes on GCP",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
    {
      title: "Cryptography",
      subtitle: "- Saurabh Mukhopadhyay",
      logo_path: "nptel_logo.png",
      certificate_link:
        "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
      alt_name: "NPTEL",
      color_code: "#FFBB0099",
    },
    {
      title: "Cloud Architecture",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
  ],
};

// Experience Page
const experience = {
  title: "Work Experience",
  description:
    "My work has spanned agricultural land use inventories, water demand modeling, and database management using ArcGIS Pro and ArcMap, with a strong emphasis on quality assurance and data integrity. These roles have given me practical experience translating technical geospatial requirements into reliable, production-ready deliverables within professional government contexts.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Machine Learning Engineer",
          company: "TikTok Inc.",
          company_url: "https://www.tiktok.com/en/",
          logo_path: "tiktok_logo.png",
          duration: "June 2023 - Present",
          location: "San Jose, CA, USA",
          description:
            "Improving ads ranking models on the core TikTok product. Experience working on modeling two-tower architectures like DeepFM, Wide & deep learning, etc. Working on Large Language Models (LLM) pretraining and Large Multi-modal Model (LMM) finetuning strategies.",
          color: "#000000",
        },
        {
          title: "Associate AI Engineer",
          company: "Legato Health Technology",
          company_url: "https://legatohealthtech.com/",
          logo_path: "legato_logo.png",
          duration: "June 2020 - Aug 2021",
          location: "Hyderabad, Telangana",
          description:
            "I am working on automating healthcare products. The projects involve automation for process improvements and for significantly enhancing the profits. I am currently working on Cancer Survival and Reoccurence Prediction. Our goal is to make AI system which scales and removes doctor dependency as much as possible.",
          color: "#0879bf",
        },
        {
          title: "Android and ML Developer",
          company: "Muffito Incorporation",
          company_url: "https://www.linkedin.com/company/muffito-inc/about/",
          logo_path: "muffito_logo.png",
          duration: "May 2018 - Oct 2018",
          location: "Pune, Maharashtra",
          description:
            "I have created complete Android Application for locating Pub, Bar and beverage shops around you. I have also worked on implementation of algorithms for Face Detection, Text extraction from Image. I was involved in a team for creating complete software architecure of mobile and web application as well as admin panel for company.",
          color: "#9b1578",
        },
        {
          title: "Android Developer",
          company: "FreeCopy Pvt. Ltd.",
          company_url: "https://www.linkedin.com/company/freecopy/about/",
          logo_path: "freecopy_logo.png",
          duration: "Nov 2017 - Dec 2017",
          location: "Ahmedabad, Gujarat",
          description:
            "FreeCopy is the Start up from Indian Institute of Management, Ahmedabad. I have changed the integration of the whole app from Google to Firebase. I learnt the efﬁcient ways of Data communications like Retroﬁt, Eventbus etc. I experienced the real time start up. I learnt the Design thinking of UI on perspective of People.",
          color: "#fc1f20",
        },
      ],
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_ashutosh.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    link: "https://blogs.ashutoshhathidara.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Saratoga Ave, San Jose, CA, USA 95129",
    locality: "San Jose",
    country: "USA",
    region: "California",
    postalCode: "95129",
    streetAddress: "Saratoga Avenue",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/NvYZqa34Wye4tpS17",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  contactPageData,
};
