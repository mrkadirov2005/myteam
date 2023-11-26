import { useSelector } from 'react-redux';
import './App.css';
import Contact from './components/contactForm/Contact';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import { initialState, myteam } from './features/headerToggler/headerPart';
import rootReducer from './features/rootReducer';
import { useEffect } from 'react';
import Index from './components/myTeam/Container/Index';
import Aboutindex from './components/about/Container/Aboutindex';
import ContactsContainer from './components/contactPart/container/ContactsContainer';
import ContentPart from './content';

function App() {
  
 
  

  return (
    <section className="App">

      <Header />
      <ContentPart/>
      {/* <MiddlePart/> */}
      {/* <Index/>
      <Aboutindex/>
      <ContactsContainer/>
      <Contact /> */}
      <Footer />
    </section>
  );
}

export default App;
