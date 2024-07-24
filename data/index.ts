export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently deepening my roots into Software Development",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "3D Solar System Planets to Explore",
    des: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "/ui.earth.com",
  },
  {
    id: 2,
    title: "Yoom - Video Conferencing App",
    des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "/ui.yoom.com",
  },
  {
    id: 3,
    title: "AI Image SaaS - Canva Application",
    des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "/ui.aiimg.com",
  },
  {
    id: 4,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "/ui.apple.com",
  },
];

export const testimonials = [
  {
    quote:
      "It takes me a great pleasure in recommending Mr. Avval Narang, an individual who has demonstrated remarkable dedication and expertise in the realm of programming, specifically in the area using diverse machine learning models and presenting them with a minimalist yet beautiful UI. I am confident that Avval's endeavours will further multiply to yield fruitful outcomes and significant contribution in the field of Computer Science. If you'd like to further discuss Avval's educational and software development capabilities or have any further questions in this regard, please feel free to reach out to me any time.",
    name: "Dr. Ankita Gupta",
    title: "Assistant Professor, Dept. of CSE, MAIT",
    img: "dr-ankita-gupta.png",
  },
  {
    quote:
      "Avval Narang has been a commendable member of fundraising team in Saday Sadev from 04th November 2022 to 04th April 2023. Throughout his time at Saday Sadev, he looked after multiple responsibilities and completed all the tasks assigned to him on time. He has been an active and hardworking member of the organization who engaged in group discussions and demonstrated great work ethics throughout his time here. His passion for bringing a change in society is evident through his work at our organization. We highly recommend him and wish him the very best in his future endeavors.",
    name: "Aditi Bansal",
    title: "Organization head, Saday Sadev NGO",
    img: "aditi-bansal.png",
  },
];

export const companies = [
  {
    id: 1,
    name: "Maharaja Agrasen Institute of Technology",
    img: "/mait.png",
    nameImg: "",
  },
  {
    id: 2,
    name: "Saday Sadev NGO",
    img: "/sadaysadev.png",
    nameImg: "",
  },
  {
    id: 3,
    name: "Innov8 Labs",
    img: "",
    nameImg: "/innov8labs.png",
  },
  {
    id: 4,
    name: "The Curious Bunny Studios",
    img: "/thecuriousbunny.png",
    nameImg: "",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Freelance Software Developer Intern",
    desc: "Led the development of multiple websites ranging for both internal projects and clients, delievered from initial setup to deployment.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 2,
    title: "ML Engineer Intern",
    desc: "Developed a Document Classification micro SaaS using NLP and machine learning techniques, achieving an 81% accuracy rate.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp4.svg",
  },
  {
    id: 3,
    title: "Growth Consultant Intern",
    desc: "Researched and designed 10 campaigns and initiatives to secure financial support for NGO programs.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/itsTodFod",
  },
  {
    id: 2,
    img: "/leet.png",
    link: "https://leetcode.com/avvalnarang2k4/",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://linkedin.com/in/avval",
  },
];
