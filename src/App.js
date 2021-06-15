import logo from './logo.svg';
import "tailwindcss/tailwind.css"
import { Route, Switch } from 'react-router';
import Main from './components/Main'
import styled from 'styled-components';
import Navigation from './components/Navigation';
import Project from './components/Projects';
import Contact from './components/Contact';
function App() {
 
  return (
    <>
    <Navigation/>
    <Switch>
      <Route to="/" component={Contact}/>
    </Switch>
    </>
    );
}

export default App;
