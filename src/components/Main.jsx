import Navigation from './Navigation'
import profile from '../assets/images/JongHunYun.jpg';
import styled from 'styled-components'
const MainContainer = styled.div`

  width: 55%;
  height: 80vh;
  display: grid;
  gap: 30px;
  padding-top: 50px;
  margin: 20px auto 0;
  grid-template-columns: 1.3fr 1fr;
` 
const ProfileImage = styled.img`
  width: 500px;
  height: 500px;
  border-radius: 50%;
`
const Introduction = styled.div`
  width: 100%;
  height: 100%;
`
const Greeting = styled.h1`
  display: inline;
  color: #3C4F73;
  font-size: 5rem;
  font-weight: bold;
  background-color: #FACE70;
  text-shadow: 6px 2px 2px white;
`

const JobTitle = styled.h3`
    font-size: 2.5rem;
    font-weight: bold;
    line-height: 1.2;
    margin-top: 40px;
    color: #3C4F73;
`
const ShortIntroduction = styled.p`
  margin-top: 40px;
`
const IntroHeading = styled.h6`
  color: #3C4F73;
  font-size: 1.2rem;
  font-weight: bold;
`
const Context = styled.p`
  font-size: 1rem;
  color: #000000;
`
const DirectionButton = styled.button`
  width: 120px;
  margin-right: 20px;
  margin-top: 20px;
  height: 50px;
  font-size: 1rem;
  background-color: ${props=>props.color||"#BADA55"};
  box-shadow: 3px 5px #566FB8;
  color: white;
  font-size: 0.9rem;
  border-radius: 20px;
`

export default function Main() {
  return (
    <>
    <MainContainer>
      <ProfileImage src={profile}>

      </ProfileImage>
      <Introduction>
        <Greeting>Hello,</Greeting>
        <JobTitle>I'm a Full Stack Devleoper</JobTitle>
        <ShortIntroduction>
          <IntroHeading>A Bit About Me</IntroHeading>
          <Context>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad dolor magni omnis repudiandae? Consectetur autem, ad dicta ullam sequi iusto sunt quaerat possimus recusandae assumenda labore deleniti, rem corporis sed.
          </Context>
          <DirectionButton>About</DirectionButton>
          <DirectionButton color={"#b86383"}>Skills</DirectionButton>
          <DirectionButton  color={"#9064bb"}>Projects</DirectionButton>
        </ShortIntroduction>
      </Introduction>
    </MainContainer>
    </>
  )
}
