import breakitdown from "./assets/images/breakitdownss.png";
import noteworthy from "./assets/images/desktopSS.png";
import quotemycar from "./assets/images/quotemycar.png";
const logotext = "ANDY";
const meta = {
  title: "Andy Ficek",
  description:
    "Full Stack Software Engineer",
};

const introdata = {
  title: "Andy Ficek",
  animated: {
    first: "AWS",
    second: "Full Stack",
    third: "Cloud Driven Solutions",
  },
  description: "Full Stack Software Engineer & AWS Cloud Practitioner",
  your_img_url: "",
};

const dataabout = {
  title: "Me",
  aboutme:
    "Born and raised in central Illinois. I have more than a year of " +
      "professional experience developing cloud solutions for all types of users using " +
      "AWS technology."
};
const worktimeline = [
  {
    jobtitle: "Image Annotations for Data Modeling Algorithms",
    where: "@ PrecisionPlanting AGCO",
    date: "Oct. 2022",
  },
  {
    jobtitle: "Apprentice Software Engineer",
    where: "@ PrecisionPlanting AGCO",
    date: "June 2023",
  },
  {
    jobtitle: "Software Engineer",
    where: "@ PrecisionPlanting AGCO",
    date: "Nov. 2023 ~",
  },
];

const skills = [
  {
    name: "TypeScript",
    value: 40,
  },
  {
    name: "MySQL/SQL",
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
    link: "https://github.com/andyficek/QuoteMyCar",
  },
  {
    img: `${noteworthy}`,
    description: "NoteWorthy: Simple and smooth note-taking web app.",
    link: "https://github.com/NoteWorthy-Team-MAA/NoteWorthy",
  },
];

const contactConfig = {
  YOUR_EMAIL: "me@andyficek.dev",
  description:
    "Interested in a chat? Let me know! I'll get back to you as soon as I can.",
  // creat an emailjs.com account
  // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
  YOUR_SERVICE_ID: "service_id",
  YOUR_TEMPLATE_ID: "template_id",
  YOUR_USER_ID: "user_id",
};

const socialprofils = {
  github: "https://github.com/andyficek",
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
