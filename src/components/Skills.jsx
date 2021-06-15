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


export default function Skills(){

    return(
        <SkillContainer>
        <Title>John Yun's Skills</Title>
        </SkillContainer>
    )

}