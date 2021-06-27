import React from 'react';
import styled from 'styled-components';
import lifeway from '../assets/images/lifewaygen.png';


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
    line-height: 1.5;
    font-size: 1.1rem;
    margin-top: 40px;
    white-space: pre-line;
    font-weight: lighter;
`

const SkillAdopted = styled.p`
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
    height: 75%;
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
        { year: "Jan 2021 - May 2021", projectTitle: "[Web] Lifeway Church APP", explaination: "sfsdfsdf", skillList: ["React", "Express", "TypeScript", "MongoDB"], image: lifeway, link: "#" },
        { year: "May 2020 - October 2020", projectTitle: "[Web] Movie Review APP", explaination: "asdasdsdsa", skillList: ["React", "Go", "MongoDB"], image: "", link: "#" },
        { year: "Jan 2020 - April 2020", projectTitle: "[Design] League of Delivery", explaination: "sdfsdf", skillList: ["Just In Mind", "Vegas"], image: "", link: "#" },
        { year: "Oct 2019 - Dec 2020", projectTitle: "[App] Piggy Bank APP", explaination: "ssdfdsdsf", skillList: ["Java"], image: "", link: "#" },
        { year: "Oct 2019 - Dec 2020", projectTitle: "[Web] Tour Review App", explaination: "dfsfdsfsd", skillList: ["React", "NodeJS", "Express", "MySQL"], image: "", link: "#" },
    ]

    return (
        <ProjectContainer>
            <Fulldiv>
                <Title>Project</Title>
            </Fulldiv>
            <Fulldiv direction={true}>
                <ViewButton>View All Projects</ViewButton>
            </Fulldiv>
            {info.map((data) => {
                return <SingleProject year={data.year} projectTitle={data.projectTitle} explaination={data.explaination} skillList={data.skillList} image={data.image} link={data.link}></SingleProject>
            })}

        </ProjectContainer>
    )
}