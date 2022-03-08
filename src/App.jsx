import { useContext } from "react";
import Intro from "./components/intro/intro";
import About from "./components/about/About";
import ProjectList from "./components/projectList/ProjectList";
import Contact from "./components/contact/Contact";
import { ThemeContext } from "./context.js";
import Toggle from './components/toggle/Toggle';
import Footer from './components/footer/Footer';

const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      style={{
        backgroundColor: darkMode ? "#222" : "white",
        color: darkMode && "white",
      }}
    >
      <Intro />
      <About />
      <ProjectList />
      <Contact />
      <Toggle />
      <Footer />
    </div>
  );
};

export default App;
