import React from 'react';
import styled from 'styled-components';
import coding from '../assets/images/coding.jpg';

const info = {
    title: "About John Yun",
    Context: `John Yun, moved to Vancouver, BC during adolescence. He quickly found his interest in programming and computer science when he was at his secondary school. He often enjoyed spending his free time surfing websites and opening developer mode to understand how they were constructed. To pursue his interest, he attended Douglas College and reinforced professional knowledge. His major strength in AAA made him successfully achieve school projects such as B,B, and B.  During his college studies, his passion for ABC led him to become a full stack developer.

    In 2019, John graduated from Douglas College with a degree in Information and Computer Engineering.

    In 2020, he designed and created his first public website for Lifeway Generation Church and published a demo. He is constantly working on improving his knowledge and skills on a daily basis, by subscribing Udemy and developing own projects especially on AREA.

    John's expertise is Javascript, Python and C#. He is fluent in both English and Korean.`,
    img:coding
}

const   AboutContainer = styled.div`
    width: 60%;
    height: 90vh;
    margin: 60px auto 0;
    display:grid;
    grid-template-columns: repeat(2,1fr);
` 
const AboutColumn = styled.div`
    width: 90%;
    height: 100%;
    margin: 0 auto;

`

const Title = styled.h1`
    color: ${(props)=>props.theme.colors.blue};
    font-size: 2rem;
    font-weight: bold;
`
const Context = styled.p`
    margin-top: 100px;
    line-height: 1.9;
    white-space: pre-wrap;
`

const ResumeButton = styled.button`
    width: 200px;
    height: 50px;
    background-color: ${props=>props.theme.buttonColors.green};
    border-radius: 20px;
    box-shadow: 3px 5px ${(props)=>props.theme.colors.lightblue};
    text-align: center;
    line-height: 3;
    color: ${props=>props.theme.colors.white};
    font-size: 1rem;
    &:hover{
        background-color: ${props=>props.theme.buttonColors.purple};
    }
`
const ButtonBox = styled.div`
    width: 100%;
    text-align: end;
`
const ImageBox = styled.div`
    width: 100%;
    margin-top: 100px;
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
                <ResumeButton>Download Resume</ResumeButton>
                </ButtonBox>
                <ImageBox>
                    <Image src={info.img}></Image>
                </ImageBox>
            </AboutColumn>
        </AboutContainer>
    )
}