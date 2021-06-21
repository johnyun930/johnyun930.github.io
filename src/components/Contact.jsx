import React from 'react';
import styled from 'styled-components';

const ContactContainer = styled.div`
    width: 70%;
    height: 100vh;
    margin: 70px auto 0;
` 

const Title = styled.h1`
    font-size: 3rem;
    color: ${(props)=>props.theme.colors.blue};
    font-weight: bold;

`
const InnerContainer =styled.div`
    width: 100%;
    height: 90%;
    display: grid;
    grid-template-columns: 1fr 1fr;
`
const Fulldiv = styled.div`
    width:100%;
    height: 100%;

`

const SubTitle = styled.h6`
    font-size:1rem;
    padding-left: 5px;
    font-weight: bold;
    color: ${(props)=>props.theme.colors.blue};
`
const ContactList = styled.div`
    margin-top: 100px;
    width: 100%;
`
const ContactColumn = styled.div`
    margin-bottom: 40px;
    width: 100%;
`
const ContactTitle = styled.h2`
    font-size: 1.5rem;
    font-weight: bold;
    color: ${(props)=>props.theme.colors.lightblue};
`
const ContactContext = styled.h3`
    font-size: 1.2rem;
    font-weight: bold;
    color: ${(props)=>props.theme.colors.blue};
`
const Formtitle = styled.h3`
    font-size: 1.4rem;
    font-weight: bold;
    color: ${(props)=>props.theme.colors.blue};
`
const Label = styled.label`
    font-weight: bold;
    display: block;
    margin-bottom: 10px;
    font-size: 1.4rem;
    color: ${(props)=>props.theme.colors.lightblue};
`
const Input = styled.input`
    width: 250px;
    height: 50px;
    box-shadow: 5px 5px 3px #536EB7;
    background-color: #DAE3FA;
`

const Form = styled.form`
    width: 100%;
    height: 70%;
    margin-top: 100px;
`
const InputContainer =styled.div`
    width: 100%;
    height: 40%;
    display:grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
`
const TextAreaContainer = styled.div`
    width: 100%;
    height: 40%;
    display: grid;
    grid-template-columns: 60% 30%;
`
const TextArea = styled.textarea`
    width: 350px;
    height: 200px;
    resize: none;
    box-shadow: 5px 5px 3px #536EB7;
    background-color: #DAE3FA;
`

const SubmitButton = styled.button`
    height:100%;
    font-size: 2.5rem;
    color: ${(props)=>props.theme.colors.lightblue};
    font-weight: bold;
    
`


export default function Contact(){

    return(
        <ContactContainer>
            <Title>Questions?</Title>
            <InnerContainer>
                <Fulldiv>
                    <SubTitle>Looking forward to hearing from you!</SubTitle>
                    <ContactList>
                        <ContactColumn>
                            <ContactTitle>Phone</ContactTitle>
                            <ContactContext>236-869-1001</ContactContext>
                        </ContactColumn>
                        <ContactColumn>
                            <ContactTitle>Phone</ContactTitle>
                            <ContactContext>236-869-1001</ContactContext>
                        </ContactColumn><ContactColumn>
                            <ContactTitle>Phone</ContactTitle>
                            <ContactContext>236-869-1001</ContactContext>
                        </ContactColumn>
                    </ContactList>
                </Fulldiv>
                <Fulldiv>
                    <Formtitle>Simply leave a message</Formtitle>
                    <Form>
                        <InputContainer>
                            <Fulldiv>
                                <Label>First Name</Label>
                                <Input type="text"></Input>
                            </Fulldiv>
                            <Fulldiv>
                                <Label>First Name</Label>
                                <Input type="text"></Input>
                            </Fulldiv>
                            <Fulldiv>
                                <Label>First Name</Label>
                                <Input type="text"></Input>
                            </Fulldiv>
                            <Fulldiv>
                                <Label>First Name</Label>
                                <Input type="text"></Input>
                            </Fulldiv>
                        </InputContainer>
                        <TextAreaContainer>
                            <Fulldiv>
                            <Label>Message</Label>
                            <TextArea></TextArea>
                            </Fulldiv>
                            <Fulldiv>
                                <SubmitButton>Submit</SubmitButton>
                            </Fulldiv>
                        </TextAreaContainer>
                    </Form>
                </Fulldiv>
            </InnerContainer>
        </ContactContainer>
    )

}