import ReactGA from 'react-ga';

// Inicializa Google Analytics ID
const initializeAnalytics = () => {
    ReactGA.initialize('G-WC4DFM35XJ'); //ID de medición
    ReactGA.pageview(window.location.pathname + window.location.search); // Registra la vista de página inicial
};

export default initializeAnalytics;
