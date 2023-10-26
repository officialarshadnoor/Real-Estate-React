import Companies from './components/Companies/Companies';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import GetStarted from './components/GetStarted/GetStarted';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Recidencies from './components/Recidencies/Recidencies';
import Value from './components/Value/Value';
import './App.css'


function App() {
  return (
    <div className='App'>
      <div>
        <div className='white-gradient'/>
      <Header/>
      <Hero/>
      </div>
      <Companies/>
      <Recidencies/>
      <Value/>
      <Contact/>
      <GetStarted/>
      <Footer/>
    </div>
  );
}

export default App;
