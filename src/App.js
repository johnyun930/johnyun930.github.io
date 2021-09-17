import "tailwindcss/tailwind.css";
import { Route, Switch } from "react-router";
import Main from "./pages/main/Main";
import Navigation from "./pages/navigation/Navigation";
import Footer from "./pages/footer/Footer";
import { ThemeProvider } from "styled-components";
import { theme } from "./assets/theme/theme";
import About from "./pages/about/About";
import Skills from "./pages/skills/Skills";
import ProjectPage from "./pages/projects/Projects";
import Contact from "./pages/contact/Contact";
function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Navigation />
        <Switch>
          <Route path="/about" component={About}></Route>
          <Route path="/skill" component={Skills} />
          <Route path="/contact" component={Contact}></Route>
          <Route path="/project" component={ProjectPage}></Route>
          <Route path="/" component={Main} />
        </Switch>
        <Footer></Footer>
      </ThemeProvider>
    </>
  );
}

export default App;
