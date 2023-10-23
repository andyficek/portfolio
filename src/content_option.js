import breakitdown from "./assets/images/breakitdownss.png";
import noteworthy from "./assets/images/desktopSS.png";
import quotemycar from "./assets/images/quotemycar.png";
import profpic from "./assets/images/profPicBackdrop.svg";
const logotext = "ANDY";
const meta = {
  title: "Andy Ficek",
  description:
    "I’m Andy Ficek data scientist _ Full stack devloper,currently working in Bloomington",
};

const introdata = {
  title: "I’m Andy Ficek",
  animated: {
    first: "Passionate & self-driven dev",
    second: "I code full-stack websites",
    third: "Always looking to learn",
  },
  description: "Self-starting problem solver.",
  your_img_url: "",
};

const dataabout = {
  title: "Me",
  aboutme:
    "Born and raised in Central Illinois, I come from a long line of computer scientists. My brother and I are both software engineers and we strive to push eachother to achieve greater. I have about half a year of professional experience and am eager to get more!",
};
const worktimeline = [
  {
    jobtitle: "Image Annotations for Data Modelling",
    where: "@ Precision Planting",
    date: "Oct. 2022",
  },
  {
    jobtitle: "Apprentice Software Engineer",
    where: "@ Precision Planting",
    date: "June 2023",
  },
  {
    jobtitle: "Software Engineer",
    where: "@ Precision Planting",
    date: "Nov. 2023 ~",
  },
];

const skills = [
  {
    name: "JavaScript/TypeScript",
    value: 40,
  },
  {
    name: "SQL (ORM)",
    value: 10,
  },
  {
    name: "CSS/Tailwind/Bootstrap",
    value: 20,
  },
  {
    name: "React",
    value: 30,
  },
];

const services = [
  {
    title: "Full-Stack Web Apps",
    description:
      "As a full-stack web developer, I offer comprehensive services in creating modern web applications. Leveraging the robustness of TypeScript and the agility of React, I build user-friendly, performant, and reliable applications that cater to your specific needs.",
  },
];

const dataportfolio = [
  {
    img: `${breakitdown}`,
    description: "Break-It-Down: AI Taskmaster",
    link: "https://github.com/The-Aye-Team/Break-It-Down",
  },
  {
    img: `${quotemycar}`,
    description: "QuoteMyCar: Car Insurance Quote Estimator",
    link: "https://github.com/aficek703/QuoteMyCar",
  },
  {
    img: `${noteworthy}`,
    description: "NoteWorthy: Simple and smooth note-taking web app.",
    link: "https://github.com/NoteWorthy-Team-MAA/NoteWorthy",
  },
];

const contactConfig = {
  YOUR_EMAIL: "aficek@precisionplanting.com",
  YOUR_FONE: "(309)830-1851",
  description:
    "Interested in a chat? Let me know! I'll get back to you as soon as I can.",
  // creat an emailjs.com account
  // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
  YOUR_SERVICE_ID: "service_id",
  YOUR_TEMPLATE_ID: "template_id",
  YOUR_USER_ID: "user_id",
};

const socialprofils = {
  github: "https://github.com/aficek703",
  linkedin: "https://www.linkedin.com/in/anderson-ficek-305bab217/",
};
export {
  meta,
  dataabout,
  dataportfolio,
  worktimeline,
  skills,
  services,
  introdata,
  contactConfig,
  socialprofils,
  logotext,
};
