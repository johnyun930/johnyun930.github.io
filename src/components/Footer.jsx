import React from 'react';
import styled from 'styled-components';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';


const info = [
    {title:"Phone",context:"236-869-1001"},
    {title:"Email",context:"johnyun930@gmail.com"},
    {title:"Follow Me",context:<><a href="https://github.com/johnyun930"><GitHubIcon   /></a><a href="https://www.linkedin.com/in/jonghunyun"> <LinkedInIcon    fontSize="large"/></a></>},
]

const FooterContainer = styled.div`
    width: 90%;
    height: 20vh;
    border-top: 1px solid #C7C7C7;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(4,1fr);
    
`
const FooterColumn = styled.div`
    width: 100%;
    height: 100%;
    padding-top: 30px;
`

const Title = styled.h5`
    font-size: 1.2rem;
    font-weight: bold;
    color: ${props=>props.theme.colors.blue};
`
const Context = styled.p`
    font-size: 0.9rem;
`

export default function Footer() {

    return(
        <FooterContainer>
            {info.map((footer)=>{
               return <FooterColumn>
                    <Title>{footer.title}</Title>
                    <Context>{footer.context}</Context>
                </FooterColumn>  
            }
            )}
            <FooterColumn>
                <p>
                © 2021 By John Yun. All Rights Reserved.
                </p>
            </FooterColumn>
        </FooterContainer>
    )
}