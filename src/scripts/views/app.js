import DrawerInitiator from '../utils/drawer-initiator';
import UrlParser from '../routes/parser';
import routes from '../routes/routes';
import FallbackPage from './pages/fallback-page';

class App {
  constructor({ button, drawer, content }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;

    this._initializeAppShell();
  }

  _initializeAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
    });
  }

  async renderPage() {
    const url = UrlParser.parseCurrentUrlWithCombiner();
    const page = routes[url];

    try {
      this._content.innerHTML = await page.render();
      await page.afterRender();
    } catch (error) {
      console.log(error);
      this._content.innerHTML = '';
      await FallbackPage.render();
    }
  }
}

export default App;
