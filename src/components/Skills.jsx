import React from 'react';
import styled from 'styled-components';
import Node from '../assets/images/nodejs.png';
import Database from '../assets/images/database.png';
import TypeScript from '../assets/images/typescript.png';
import react from '../assets/images/atom.png';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
const SkillContainer = styled.div`
    width: 100%;
    height: 70vh;
    margin-top: 40px;
`

const Title = styled.h1`
    text-align: center;
    font-size: 3rem;
    font-weight: bold;
    color: ${(props) => props.theme.colors.blue};
`
const MainContainer = styled.div`
    width:80%;
    height: 70%;
    display: grid;
    margin: 100px auto 0;
    gap: 20px;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
`
const ItemBox = styled.div`
    width:100%;
    height: 100%;
    display: grid;
    grid-template-columns: 10% 80%;

`
const Fulldiv = styled.div`
    width: 100%;
    height: 100%;
`

const Icon = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 10px;
    margin-top: 5px;
`
const SkillTitle = styled.h2`
    font-family: ${props=>props.theme.font.title};
    font-size: 1.5rem;
    margin-bottom: 10px;
`
const SkillContext = styled.p`
    font-size: 1rem;
`



export default function Skills() {
    const info = [
        {image:react,title:"React",proficient:4},
        {image:Node,title:"NodeJS",proficient:4},
        {image:TypeScript,title:"TypeScript",proficient:3},
        {image:Database,title:"MongoDB&MySQL",proficient:3}
    ]
    return (
        <SkillContainer>
            <Title>John Yun's Main Skills</Title>
            <MainContainer>
                {info.map((data)=>{
                    let stars = [];
                    for(let i=0;i<5;i++){
                        if(i<data.proficient){
                            stars.push(<StarIcon/>);
                        }else{
                            stars.push(<StarBorderIcon/>);
                        }
                    }
                    return (
                    <ItemBox>
                    <Fulldiv>
                        <Icon src={data.image}></Icon>
                    </Fulldiv>
                    <Fulldiv>
                        <SkillTitle>{data.title}</SkillTitle>
                        <SkillContext>{stars}</SkillContext>
                    </Fulldiv>
                </ItemBox>
                    )
                })}
                
              
            </MainContainer>
        </SkillContainer>
    )

}