import './App.css';
import Banner from './components/banner/banner';
import NavBar from './components/navBar/navBar';
import ParticlesBackground from './particlesBackground';
import SkillCarousel from './components/skillCarousel/skillCarousel';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <SkillCarousel/>
      <ParticlesBackground/>
    
   
    

    </div>
  );
}

export default App;
