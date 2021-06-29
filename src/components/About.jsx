import React from 'react';
import styled from 'styled-components';
import coding from '../assets/images/coding.jpg';

const info = {
    title: "About John Yun",
    Context: `John Yun, moved to Vancouver, BC during adolescence. He quickly found his interest in programming and computer science when he was at his secondary school. He often enjoyed spending his free time surfing websites and opening developer mode to understand how they were constructed. To pursue his interest, he attended Douglas College and reinforced professional knowledge. During his college studies, his passion for programming led him to become a full stack developer.

    In 2020, John graduated from Douglas College with a dipoloma in Computer Studies and Information.

    He has studied and learnt extra programming some practical projects, so he is proficient at React and NodeJS.

    He is constantly working on improving his knowledge and skills on a daily basis, by subscribing Udemy and developing own projects especially on AREA. Nowaday, he is studying SocketIO, pythons for djanngo, AWS for clouding database.
    
    John's main stacks are MERN(React, NodeJS, Express, MongoDB), TypeScript, MySQL, JAVA. He is fluent in both English and Korean.`,
    img:coding
}

const   AboutContainer = styled.div`
    width:70%;
    height: auto;
    margin: 60px auto 0;
    display:grid;
    grid-template-columns: repeat(2,1fr);
` 
const AboutColumn = styled.div`
    width: 90%;
    height: 100%;
    margin: 100px auto 0;

`

const Title = styled.h1`
    font-family: ${props=>props.theme.font.title};
    color: ${(props)=>props.theme.colors.blue};
    font-size: 3rem;
    font-weight: 600;
`
const Context = styled.p`
    font-family: ${props=>props.theme.font.context};
    margin-top: 100px;
    font-size: 1.2rem;
    line-height: 1.9;
    white-space: pre-wrap;
`

const ResumeButton = styled.a`
    display:inline-block;
    width: 250px;
    height: 60px;
    background-color: ${props=>props.theme.buttonColors.green};
    border-radius: 20px;
    box-shadow: 3px 5px ${(props)=>props.theme.colors.lightblue};
    text-align: center;
    line-height: 2.5;
    color: ${props=>props.theme.colors.white};
    font-size: 1.4rem;
    &:hover{
        background-color: ${props=>props.theme.buttonColors.purple};
    }
`
const ButtonBox = styled.div`
    width: 100%;
    text-align: right;
`
const ImageBox = styled.div`
    width: 80%;
    margin-top: 100px;
    margin-left: 120px;
    height: 40vh;
    

`
const Image = styled.img`
    width: 100%;
    height: 100%;
`

export default function About(){


    return(
        <AboutContainer>
            <AboutColumn>
                <Title>{info.title}</Title>
                <Context>{info.Context}</Context>
            </AboutColumn>
            <AboutColumn>
                <ButtonBox>
                <ResumeButton  href="https://drive.google.com/file/d/1zvyl9WuO788Rs8SEweTsVN54jgTgZSxr/view?usp=sharing">Download Resume</ResumeButton>
                </ButtonBox>
                <ImageBox>
                    <Image src={info.img}></Image>
                </ImageBox>
            </AboutColumn>
        </AboutContainer>
    )
}