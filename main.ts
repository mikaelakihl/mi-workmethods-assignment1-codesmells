import './src/style.scss';
import { createHtml } from './src/createHtml';
import { toggleLightMode } from './src/toggleDarkmode';

function init() {
  toggleLightMode();
  createHtml();
}

init();
