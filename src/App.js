import logo from './logo.svg';
import "tailwindcss/tailwind.css"
import { Route, Switch } from 'react-router';
import Main from './components/Main'
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import {ThemeProvider} from 'styled-components';
import { theme } from './assets/theme/theme';
import About from './components/About';
import Skills from './components/Skills';
function App() {
 
  return (
    <>
    <ThemeProvider theme={theme}>
    <Navigation/>
    <Switch>
    <Route  path="/about" component={About}></Route>
    <Route  path="/skill" component={Skills}/>
    <Route  path="/" component={Main}/>

    </Switch>
    <Footer></Footer>
    </ThemeProvider>
    </>
    );
}

export default App;
