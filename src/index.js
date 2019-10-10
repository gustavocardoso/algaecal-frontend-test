// import {ProductBundles} from "./modules/ProductBundles";
import './styles/main.scss';
import loadSVGs from './modules/svg-replace';
import 'popper.js';
import 'bootstrap';
import app from './js/app';

document.addEventListener('DOMContentLoaded', async () => {
  loadSVGs();
  const application = await app();
  application.handleProductsBoxes();
  application.handleOfficeHours();
  application.handleHighlightVideo();
  application.handleGuaranteeModal();
});
