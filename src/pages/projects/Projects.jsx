import React from "react";
import lifeway from "../../assets/images/lifewaygen.png";
import cinematic from "../../assets/images/cinematic.jpg";
import tourReview from "../../assets/images/tourReview.jpg";
import piggyBank from "../../assets/images/piggybank.png";
import league from "../../assets/images/leagueofDelivery.png";
import { Project } from "../../components/project/project.components";
import { ProjectContainer, Title, ViewButton } from "./projects.styles";
import { Fulldiv } from "../../components/utills.styles";
const info = [
  {
    year: "Jan 2021 - May 2021",
    projectTitle: "[Web] Lifeway Church APP",
    explaination:
      "This application is for Lifeway Generation Church which locates on Burnaby, BC. The client asked me to build the web application to share the sermons and some articles. I build this website with MERN stacks with TypeScript. I applied SSL for https, and passport.JS for authentication and login services. Also, created OTP functions to verify users to prevent indiscreet signup. Deploy this app with heroku for backend and netlify for the front end.",
    skillList: ["React", "Express", "TypeScript", "MongoDB"],
    image: lifeway,
    link: "https://lifewaygen.ga",
  },
  {
    year: "May 2020 - Oct 2020",
    projectTitle: "[Web] Movie Review APP",
    explaination:
      "This application is the first project as a full stack developer. Build own database for login, review, and comment services. For front end, create custom carousel sliders, drag & drop image, get data from own backend and third party api.",
    skillList: ["React", "Go", "MongoDB"],
    image: cinematic,
    link: "https://github.com/johnyun930/CinematicPlex",
  },
  {
    year: "Jan 2020 - Apr 2020",
    projectTitle: "[Design] League of Delivery",
    explaination:
      "This projected is based on how we improve the skip the dish UI/UX. Instead using real picture, this project is cartoontic. Whenevern users use the application, the app should be easy and comfortable. If you want to know more information about this, please click the button and watch the video please.",
    skillList: ["Just In Mind", "Vegas"],
    image: league,
    link: "https://www.youtube.com/watch?v=VvFFr-5t45c",
  },
  {
    year: "Oct 2019 - Dec 2020",
    projectTitle: "[App] Piggy Bank APP",
    explaination:
      "This application title is ‘Pig E Bank’. This app provides each individual accounts, summaries, and graph, so users can save the money easily with the purpose. Also, users can set up the plan because this app notices how many days left until the due date. Furthermore, they save money in the other accounts with different purposes. ",
    skillList: ["Java"],
    image: piggyBank,
    link: "https://github.com/johnyun930/PiggyBank-Android-Project-",
  },
  {
    year: "Oct 2019 - Dec 2020",
    projectTitle: "[Web] Tour Review App",
    explaination:
      "Ths project is for software engineering class. Applied scrum to develop this application. As a backend leader, I build up ER digram and database with MySQL. Also, create the connection with MySQL and NodeJs, build Restful API, and ",
    skillList: ["React", "NodeJS", "Express", "MySQL"],
    image: tourReview,
    link: "https://github.com/johnyun930/Tour-Review-Web-App",
  },
];

export default function ProjectPage() {
  return (
    <ProjectContainer>
      <Fulldiv>
        <Title>Project</Title>
      </Fulldiv>
      <Fulldiv direction={true}>
        <ViewButton href="https://github.com/johnyun930">
          View All Projects
        </ViewButton>
      </Fulldiv>
      {info.map((data) => {
        return <Project {...data} />;
      })}
    </ProjectContainer>
  );
}
