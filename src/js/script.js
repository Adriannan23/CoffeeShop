// import { templates, select } from './settings';
// import { utils } from '../utils.js';

// import { select } from '../settings.js';
const app = {
  init: function () {

    fetch('http://localhost:3131/products')
      .then(response => {
        console.log('response', response);
        return response.json();
      }).then(responseJson => console.log('response json?', responseJson));
  }
  // render: function () {
  //   const thisProduct = this;
  //   const generatedHTML = templates.allProducts();
  //   thisProduct.element = utils.createDOMFromHTML(generatedHTML);
  //   const productsContainer = document.querySelector(select.containerOf.product);
  //   productsContainer.appendChild(thisProduct.element);
  // },
};

app.init();