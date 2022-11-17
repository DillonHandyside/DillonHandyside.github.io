import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import ReactGA from 'react-ga';

const TRACKING_ID = "UA-164501681-1"; // YOUR_OWN_TRACKING_ID
ReactGA.initialize(TRACKING_ID);
ReactGA.pageview(window.location.pathname + window.location.search);

const root = createRoot(document.getElementById("root"));
root.render(<App tab="home" />);