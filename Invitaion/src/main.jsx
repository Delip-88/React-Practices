import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
    duration: 1000,  // Duration of the animation in milliseconds
    offset :150,
    easing: 'ease-in-out',  // Easing function to use
    once: true,  // Whether animation should happen only once - while scrolling down
    mirror: false,  // Whether elements should animate out while scrolling past them
});


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
