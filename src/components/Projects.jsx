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

const ViewButton = styled.button`
    width: 230px;
    margin-right: 20px;
    margin-top: 20px;
    height: 55px;
    background-color: ${props=>props.theme.buttonColors.pink};
    box-shadow: 3px 5px ${props=>props.theme.colors.lightblue};
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
    color: ${props=>props.theme.colors.blue};;
    
`
const ContextContainer =styled.div`
    width:100%;
    height: 100%;
    display: grid;
    grid-template-columns: 30% 60%;

`
const Fulldiv = styled.div`
    width:100%;
    height:100%;
    text-align: ${(({direction})=>direction?"right":"left")};
`
const ProjectTitle = styled.h2`
    font-size: 2rem;
    font-weight: bold;

`
const ProjectExplaination = styled.p`
    line-height: 1.5;
    font-size: 1.3rem;
    margin-top: 40px;
    white-space: pre-line;
    font-weight: lighter;
`

const SkillAdopted = styled.p`
    margin-top: 40px;
    font-size: 1.3rem;
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
const ProjectImage =styled.img`
    margin-top: 40px;
    width: 90%;
    height: 75%;
    background-color: white;
`

const SingleProject = ()=>{
    return(
        <>
        <ContextContainer>
        <Fulldiv>
              <YearText>2021 Jan - Present</YearText>
          </Fulldiv>
          <Fulldiv>
              <ProjectTitle>[Web] Lifeway Church</ProjectTitle>
              <ProjectExplaination>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, in veritatis repellat distinctio quidem officia tempore iure vero ex, iusto labore, totam tenetur facilis tempora id impedit sapiente? Rerum, atque!</ProjectExplaination>
              <SkillAdopted>Critical Skills adopted:</SkillAdopted>
              <SkillBox>
                  <ul>
                      <SkillList>JavaScript</SkillList>
                  </ul>
              </SkillBox>
              <ViewButton>View this Project</ViewButton>
          </Fulldiv>
        </ContextContainer>
        <Fulldiv>
          <ProjectImage src={lifeway}></ProjectImage>
        </Fulldiv>
        </>
    )
}

export default function Project(){


    return(
      <ProjectContainer>
          <Fulldiv>
            <Title>Project</Title>
          </Fulldiv>
          <Fulldiv direction={true}> 
            <ViewButton>View All Projects</ViewButton>
          </Fulldiv>
          <SingleProject></SingleProject>

            <SingleProject></SingleProject>
            <SingleProject></SingleProject>
            <SingleProject></SingleProject>

      </ProjectContainer>
    )
}