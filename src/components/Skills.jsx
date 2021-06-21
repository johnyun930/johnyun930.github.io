import React from 'react';
import styled from 'styled-components';

const SkillContainer = styled.div`
    width: 100%;
    height: 70vh;
    margin-top: 40px;
`

const Title = styled.h1`
    text-align: center;
    font-size: 3rem;
    font-weight: bold;
    color: ${(props)=>props.theme.colors.blue};
`
const MainContainer =styled.div`
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
    font-size: 1.5rem;
    margin-bottom: 10px;
`
const SkillContext = styled.p`
    font-size: 1rem;
`



export default function Skills(){

    return(
        <SkillContainer>
        <Title>John Yun's Skills</Title>
        <MainContainer>
            <ItemBox>
                <Fulldiv>
                    <Icon></Icon>
                </Fulldiv>
                <Fulldiv>
                    <SkillTitle>JavaScript</SkillTitle>
                    <SkillContext>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora vitae nulla minus corrupti natus? Repellendus molestiae reprehenderit ratione nemo vitae iure? Libero reiciendis culpa nobis neque quam et officiis tempora!</SkillContext>
                </Fulldiv>
            </ItemBox>
            <ItemBox>
                <Fulldiv>
                    <Icon></Icon>
                </Fulldiv>
                <Fulldiv>
                    <SkillTitle>JavaScript</SkillTitle>
                    <SkillContext>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora vitae nulla minus corrupti natus? Repellendus molestiae reprehenderit ratione nemo vitae iure? Libero reiciendis culpa nobis neque quam et officiis tempora!</SkillContext>
                </Fulldiv>
            </ItemBox><ItemBox>
                <Fulldiv>
                    <Icon></Icon>
                </Fulldiv>
                <Fulldiv>
                    <SkillTitle>JavaScript</SkillTitle>
                    <SkillContext>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora vitae nulla minus corrupti natus? Repellendus molestiae reprehenderit ratione nemo vitae iure? Libero reiciendis culpa nobis neque quam et officiis tempora!</SkillContext>
                </Fulldiv>
            </ItemBox><ItemBox>
                <Fulldiv>
                    <Icon></Icon>
                </Fulldiv>
                <Fulldiv>
                    <SkillTitle>JavaScript</SkillTitle>
                    <SkillContext>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora vitae nulla minus corrupti natus? Repellendus molestiae reprehenderit ratione nemo vitae iure? Libero reiciendis culpa nobis neque quam et officiis tempora!</SkillContext>
                </Fulldiv>
            </ItemBox>
        </MainContainer>
        </SkillContainer>
    )

}