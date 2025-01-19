import './src/style.scss';
import { createHtml } from './src/createHtml';
import { toggleLightMode } from './src/toggleDarkmode';

function init() {
  // kallar på funktionerna på startsidan
  toggleLightMode();
  createHtml();
}

init();
