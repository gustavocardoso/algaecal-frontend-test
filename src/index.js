// import {ProductBundles} from "./modules/ProductBundles";
import './styles/main.scss';
import loadSVGs from './modules/svg-replace';
import 'popper.js';
import 'bootstrap';
import app from './js/app';

document.addEventListener('DOMContentLoaded', () => {
  loadSVGs();
  app().handleProductsBoxes();
  app().handleOfficeHours();
});
