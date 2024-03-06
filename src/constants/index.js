import {   rentnest, pairbytes, alienhu, proffitify } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
   
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    

    {
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Three.js_Icon.svg/1200px-Three.js_Icon.svg.png",
        name: "Three.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: "https://static-00.iconduck.com/assets.00/angular-icon-icon-1931x2048-p3tn507e.png",
        name: "Angular",
        type: "Frontend",
    },
];

export const experiences = [
    {
        title: "Founder & CEO",
        company_name: "RentNest",
        icon: rentnest,
        iconBg: "#fff",
        date: "June 2023 - January 2024",
        points: [
            "Developed startup website to search rooms, PG or PG roommates, and Flats for Rent in Bangalore. Which is one of the problem-solving industries we took.",
            "Used React.js frontend framework to make impressive web design and user-friendly..",
            "All data stored in backend MongoDB, Owner can create, edit, delete, and update the details of rooms.",
            "Developed login and signup functionality using JWT Authentication and Firebase.",
            "Added functionality such as user can search the rooms based on location area in Bangalore and also filter the rooms with particular conditions.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Managed 8 members of the team, participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "SDE - I (Frontend Developer)",
        company_name: "PairBytes Software",
        icon: pairbytes,
        iconBg: "#fff",
        date: "June 2023 - September 2023",
        points: [
            "Developed a fully functional Shopify Theme e-commerce website from scratch using React.js.",
            "Implemented responsive design by using Tailwind CSS and optimized the website for various devices, resulting in a 90\% increase in mobile conversions.",
            "Utilized Redux for state management, ensuring seamless data flow and improved performance.",
            "Contributed to the Upsidon project, an educational platform designed to enhance learning experiences for students",
            "Implemented various small features and enhancements using Angular, contributing to the platform's overall functionality."
        ],
    },
    {
        title: "Full-Stack Software Engineer and Marketing Tech",
        company_name: "AlienHu Private Limited",
        icon: alienhu,
        iconBg: "#fff",
        date: "April 2022 - April 2023",
        points: [
            "Developed, tested, and implemented software programs for various Industries including Salon, Retail, and Restaurant Billing using Angular.",
            "Contributed 2 essential features for all products: bulk import from Excel sheets and WhatsApp Integration.",
            "Provided exceptional customer service to 50+ clients, resolving issues via live chat. Handled customer inquiries and supported sales and marketing efforts.",
            "Created 30+ WordPress pages and authored 40+ blogs across various categories.",
            "Marketing Tech : Working on Google Ads, Utilized Google Ads tools and analytics to track campaign performance and make data-driven optimizations to improve ROI. Also working on keyword research to identify relevant and high-converting keywords for the company's business website."
        ],
    },
    {
        title: "Front-End Developer",
        company_name: "Proffitify",
        icon: proffitify,
        iconBg: "#fff",
        date: "November 2021 - March 2022",
        points: [
            "Build a business website for company products using Angular.",
            "Lazy Loading in Angular Framework : This functionality is very helpful for the marketing field, by lazy loading we can improve the performance and SEO of a website",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Extensively utilized Angular framework and gained expertise in key concepts including Lazy Loading, Routers, Reactive Forms, Services, and Observable.",
        ],
    },
    {
        title: "Software Development Engineer Intern",
        company_name: "AlienHu Private Limited",
        icon: alienhu,
        iconBg: "#fff",
        date: "August 2021 - October 2021",
        points: [
            "Automation Testing : Worked on E2E Automation Testing For Angular.js Framework based Application using Protractor & Selenium.",
            "Website Development : Developed a company Business Website from scratch using Front-end Framework i.e Angular & also developed Landing Pages.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/sidram403',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/sidramm',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Crypto Currency Price Tracker',
        description: 'Developed a user-friendly application enabling real-time tracking of cryptocurrency prices by market cap.',
        link: 'https://crypto-currancy.netlify.app/',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Real-Estate Application',
        description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
        link: 'https://www.rentnest.in',
    },
    {
        iconUrl: "https://cdn-icons-png.flaticon.com/512/57/57589.png",
        theme: 'btn-back-blue',
        name: 'E-commerce Website',
        description: 'Developed one of the shopify theme for e-commerce platform.',
        link: 'https://shopify-theme-dxtm.vercel.app/',
    },
    {
        iconUrl: "https://static.vecteezy.com/system/resources/previews/013/471/460/original/3d-internet-icon-for-website-free-png.png",
        theme: 'btn-back-pink',
        name: 'iPhone 3D Website',
        description: 'Developed a 3D website optimized for iPhone using Three.js and GSAP.',
        link: 'https://i-phone-3-d-website-mu.vercel.app/',
    },
    {
        iconUrl: "https://static.vecteezy.com/system/resources/previews/013/471/460/original/3d-internet-icon-for-website-free-png.png",
        theme: 'btn-back-pink',
        name: 'Apple Vision Pro Website Clone',
        description: 'Created Apple Vision Pro clone using HTML, CSS, Javascript, WebGL and GSAP.',
        link: 'https://apple-vision-pro-two.vercel.app/',
    },
    {
        iconUrl: "https://static.vecteezy.com/system/resources/previews/013/471/460/original/3d-internet-icon-for-website-free-png.png",
        theme: 'btn-back-pink',
        name: '3D Shopping Website',
        description: 'Created 3D Shopping Website using Three.js integrated with OpenAI',
        link: 'https://3d-shopping-website.netlify.app/',
    },
    
];