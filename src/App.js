import { useSelector } from 'react-redux';
import './App.css';
import Contact from './components/contactForm/Contact';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import { initialState, myteam } from './features/headerToggler/headerPart';
import rootReducer from './features/rootReducer';
import { useEffect } from 'react';
import MyTeam from './components/myTeam/parts/talent/MyTeam';


function App() {

  
  const infoA=useSelector((state)=>state.header.header.value)
 

  return (
    <section className="App">
    
      <Header />
      <MyTeam/>
      <Contact />
      <Footer />
    </section>
  );
}

export default App;
