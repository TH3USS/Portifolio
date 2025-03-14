import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contacts from './components/Contacts';
import Experience from './components/Experience';
import Skills2 from './components/Skills2';

function App() {
  return (
    <main>
      <NavBar/>
      <Home/>
      <Skills/>
      <Skills2/>
      <Experience/>
      <Projects/>
      <Contacts />
      
    </main>
  );
}

export default App;
