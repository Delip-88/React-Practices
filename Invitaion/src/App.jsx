import React, { useRef, useState, useEffect } from 'react';
import './App.css';
import HomePage from './Components/HomePage';
import Nav from './Components/Nav';
import Card from './Components/Card';
import Bride from './Components/Bride';
import Countdown from './Components/Coutdown'
import Story from './Components/Story';
import Ourlove from './Components/Ourlove';
import Events from './Components/Events';
import Groomsmen from './Components/Groomsmen';
import RSVP from './Components/RSVP';
import Thank from './Components/Thank';
import Gallery from './Components/Gallery';
import Preloader from './Components/Preloader';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Refs for scrolling
  const homeRef = useRef(null);
  const brideRef = useRef(null);
  const storyRef = useRef(null);
  const eventsRef = useRef(null);
  const groomsmenRef = useRef(null)
  const galleryRef = useRef(null);
  const rspvRef = useRef(null);

  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  useEffect(() => {
    // Simulate loading delay
    setTimeout(() => {
      setIsLoading(false);
    }, 500); // Adjust delay time as needed
  }, []);

  return (
    <>
      {isLoading ? (
        <Preloader />
      ) : (
        <>
          <Nav
            homeRef={homeRef}
            brideRef={brideRef}
            storyRef={storyRef}
            eventsRef={eventsRef}
            groomsmenRef={groomsmenRef}
            galleryRef={galleryRef}
            rspvRef={rspvRef}
          />
          <HomePage ref={homeRef} />
          <Bride ref={brideRef} />
          <Card />
          <Countdown />
          <Story ref={storyRef} />
          <Ourlove />
          <Events ref={eventsRef} />
          <Groomsmen ref={groomsmenRef} />
          <Gallery ref={galleryRef} />
          <RSVP ref={rspvRef} />
          <Thank />
        </>
      )}
    </>
  );
}

export default App;
