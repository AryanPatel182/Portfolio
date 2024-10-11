import './App.css';
import { Header } from './Components/Header';
import { Footer } from './Components/Footer';
import { Profile } from './Components/Profile';
import { Projects } from './Components/Projects';
import { Introduction } from './Components/Introduction';
import { Education } from './Components/Education';
import { Experience } from './Components/Experience';
import { Skills } from './Components/Skills';
import { Contact } from './Components/Contact';

function App() {
  return (
    <>      
      <Header title="Aryan Patel" searchBar={false}/> 
      <Profile/>             
      <Introduction/>
      <Education/>
      <Skills/>
      <Contact/>
      <Footer/>   
    </>
  );
}

export default App;
