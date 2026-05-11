import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Home from './pages/Home';
import './styles/global.css';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // Refresh scroll trigger on mount
    ScrollTrigger.refresh();

    console.log(
        '%c Portfolio ready • Bytesage %c🚀',
        'font-family:"Space Grotesk",monospace;font-size:1.3em;color:#F2C49B;',
        ''
    );
    console.log('%c GSAP ' + gsap.version + ' • Full‑stack Web3 focus', 'color:#9E2F3D;font-weight:600;');
  }, []);

  return (
    <Home />
  );
}

export default App;
