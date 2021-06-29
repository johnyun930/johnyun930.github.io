import React from 'react';
import styled from 'styled-components';
import lifeway from '../assets/images/lifewaygen.png';
import cinematic from '../assets/images/cinematic.jpg';
import tourReview from '../assets/images/tourReview.jpg';
import piggyBank from '../assets/images/piggybank.png';
import league from '../assets/images/leagueofDelivery.png';


const ProjectContainer = styled.div`
    width: 70%;
    margin: 40px auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 100px 1fr 1fr 1fr 1fr;
    gap: 150px 0;
    padding-bottom: 50px;
    
`

const ViewButton = styled.a`
    display: inline-block;
    width: 230px;
    margin-right: 20px;
    margin-top: 20px;
    height: 55px;
    background-color: ${props => props.theme.buttonColors.pink};
    box-shadow: 3px 5px ${props => props.theme.colors.lightblue};
    text-align: center;
    line-height: 3.3rem;
    color: white;
    font-size: 1.2rem;
    border-radius: 20px;
`
const YearText = styled.h3`
    padding-top: 10px;
    font-size:1.3rem;
`

const Title = styled.h1`
    font-size: 3rem;
    font-weight:bold;
    color: ${props => props.theme.colors.blue};;
    
`
const ContextContainer = styled.div`
    width:100%;
    height: 100%;
    display: grid;
    grid-template-columns: 30% 60%;

`
const Fulldiv = styled.div`
    width:100%;
    height:100%;
    text-align: ${(({ direction }) => direction ? "right" : "left")};
`
const ProjectTitle = styled.h2`
    font-size: 2rem;
    font-weight: bold;

`
const ProjectExplaination = styled.p`
    line-height: 1.8;
    font-size: 1.1rem;
    margin-top: 40px;
    font-family: ${props=>props.theme.font.context};
    white-space: pre-line;
    font-weight: lighter;
`

const SkillAdopted = styled.p`
    font-family: ${props=>props.theme.font.context};
    margin-top: 40px;
    font-size: 1.1rem;
    font-weight: lighter;
`
const SkillBox = styled(Fulldiv)`
    height:auto;
    
    margin: 40px 0;
`
const SkillList = styled.li`
    font-size: 1.4rem;
    list-style-type: square;
    list-style-position: inside;
`
const ProjectImage = styled.img`
    width: 70%;
    height: 400px;
    background-color: white;
    position: relative;
    left: 200px;
`

const SingleProject = (props) => {
    return (
        <>
            <ContextContainer>
                <Fulldiv>
                    <YearText>{props.year}</YearText>
                </Fulldiv>
                <Fulldiv>
                    <ProjectTitle>{props.projectTitle}</ProjectTitle>
                    <ProjectExplaination>{props.explaination}</ProjectExplaination>
                    <SkillAdopted>Critical Skills adopted:</SkillAdopted>
                    <SkillBox>
                        <ul>
                            {props.skillList.map(skill => <SkillList>{skill}</SkillList>)}
                        </ul>
                    </SkillBox>
                    <ViewButton as="a" href={props.link} >View this Project</ViewButton>
                </Fulldiv>
            </ContextContainer>
            <Fulldiv>
                <ProjectImage src={props.image}></ProjectImage>
            </Fulldiv>
        </>
    )
}

export default function Project() {
    const info = [
        { year: "Jan 2021 - May 2021", projectTitle: "[Web] Lifeway Church APP", explaination: "This application is for Lifeway Generation Church which locates on Burnaby, BC. The client asked me to build the web application to share the sermons and some articles. I build this website with MERN stacks with TypeScript. I applied SSL for https, and passport.JS for authentication and login services. Also, created OTP functions to verify users to prevent indiscreet signup. Deploy this app with heroku for backend and netlify for the front end.", skillList: ["React", "Express", "TypeScript", "MongoDB"], image: lifeway, link: "https://lifewaygen.ga" },
        { year: "May 2020 - Oct 2020", projectTitle: "[Web] Movie Review APP", explaination: "This application is the first project as a full stack developer. Build own database for login, review, and comment services. For front end, create custom carousel sliders, drag & drop image, get data from own backend and third party api.", skillList: ["React", "Go", "MongoDB"], image: cinematic, link: "https://github.com/johnyun930/CinematicPlex" },
        { year: "Jan 2020 - Apr 2020", projectTitle: "[Design] League of Delivery", explaination: "This projected is based on how we improve the skip the dish UI/UX. Instead using real picture, this project is cartoontic. Whenevern users use the application, the app should be easy and comfortable. If you want to know more information about this, please click the button and watch the video please.", skillList: ["Just In Mind", "Vegas"], image: league, link: "https://www.youtube.com/watch?v=VvFFr-5t45c" },
        { year: "Oct 2019 - Dec 2020", projectTitle: "[App] Piggy Bank APP", explaination: "This application title is ‘Pig E Bank’. This app provides each individual accounts, summaries, and graph, so users can save the money easily with the purpose. Also, users can set up the plan because this app notices how many days left until the due date. Furthermore, they save money in the other accounts with different purposes. ", skillList: ["Java"], image: piggyBank, link: "https://github.com/johnyun930/PiggyBank-Android-Project-" },
        { year: "Oct 2019 - Dec 2020", projectTitle: "[Web] Tour Review App", explaination: "Ths project is for software engineering class. Applied scrum to develop this application. As a backend leader, I build up ER digram and database with MySQL. Also, create the connection with MySQL and NodeJs, build Restful API, and ", skillList: ["React", "NodeJS", "Express", "MySQL"], image: tourReview, link: "https://github.com/johnyun930/Tour-Review-Web-App" },
    ]

    return (
        <ProjectContainer>
            <Fulldiv>
                <Title>Project</Title>
            </Fulldiv>
            <Fulldiv direction={true}>
                <ViewButton href="https://github.com/johnyun930">View All Projects</ViewButton>
            </Fulldiv>
            {info.map((data) => {
                return <SingleProject year={data.year} projectTitle={data.projectTitle} explaination={data.explaination} skillList={data.skillList} image={data.image} link={data.link}></SingleProject>
            })}

        </ProjectContainer>
    )
}