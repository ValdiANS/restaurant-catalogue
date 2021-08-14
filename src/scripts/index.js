import 'regenerator-runtime';
import '../styles/main.css';
import './views/component/restaurant-item';
import './views/component/restaurant-detail-component';
import './views/component/fallback-page-component';
import swRegister from './utils/sw-register';
import App from './views/app';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const hamburgerMenu = document.querySelector('#hamburgerMenu');
const navBar = document.querySelector('#navBar');
const restaurantsContainer = document.querySelector('.restaurants');

const app = new App({
  button: hamburgerMenu,
  drawer: navBar,
  content: restaurantsContainer,
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
