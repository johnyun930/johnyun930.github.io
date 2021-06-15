import profile from '../assets/images/JongHunYun.jpg';
import styled from 'styled-components'
import { Link } from 'react-router-dom';
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
  color:  ${props=>props.theme.colors.blue};
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
    color:  ${props=>props.theme.colors.blue};;
`
const ShortIntroduction = styled.p`
  margin-top: 40px;
`
const IntroHeading = styled.h6`
  color: ${props=>props.theme.colors.blue};
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
  background-color: ${props=>props.color||props.theme.buttonColors.green};
  box-shadow: 3px 5px ${(props)=>props.theme.colors.lightblue};
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
          <Link to="/about"><DirectionButton >About</DirectionButton></Link>
          <Link to="/skills"><DirectionButton color={props=>props.theme.buttonColors.pink}>Skills</DirectionButton></Link>
          <Link to="/projects"><DirectionButton  color={props=>props.theme.buttonColors.purple}>Projects</DirectionButton></Link>
        </ShortIntroduction>
      </Introduction>
    </MainContainer>
    </>
  )
}
