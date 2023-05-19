// import { templates } from "./settings.js";
// // import { select } from '../settings.js';

import { settings, } from './settings.js';

// const app = {
// }
// app.init();

// import { settings } from '../settings.js';
// const data = {
//   'products': [
//     {
//       'id': 1,
//       'description': 'Opis produktu 1',
//       'roasting': 'Stopień palenia 1',
//       'intensity': 'Intensywność 1',
//       'image': 'coffee-3'
//     },
//     {
//       'id': 2,
//       'description': 'Opis produktu 2',
//       'roasting': 'Stopień palenia 2',
//       'intensity': 'Intensywność 2',
//       'image': 'coffee-3'
//     },
//   ]
// };

// tutaj mam jeszcze pusty template
// document.addEventListener('DOMContentLoaded', function () {
//   // const productsTemplate = document.getElementById('products-template').innerHTML;
//   // console.log('productsTemplate:', productsTemplate);

//   // const compiledProductsTemplate = Handlebars.compile(productsTemplate);

//   // const generatedHtmlForProduct = compiledProductsTemplate(parsedResponse[i]);

//   // const generated2 = compiledProductsTemplate(parsedResponse[1]);

//   // console.log('generated2:', generated2);

//   const element = document.getElementById('test');

//   console.log(element);


//   //
// }
// );

function elo(htmlString) {
  let div = document.createElement('div');
  div.innerHTML = htmlString.trim();
  return div.firstChild;
}

function connectWithDataBase() {

  const url = settings.db.url + '/' + settings.db.products;

  fetch(url)
    .then(function (rawResponse) {
      return rawResponse.json();
    })
    .then(function (parsedResponse) {
      console.log(parsedResponse);

      for (let i = 0; i < parsedResponse.length; i++) {

        if (i % 2 === 0) {
          const productsTemplate = document.getElementById('products-template-right').innerHTML;

          const compiledProductsTemplate = Handlebars.compile(productsTemplate);

          const generatedHtmlForProduct = compiledProductsTemplate(parsedResponse[i]);

          const element = document.getElementsByClassName('container')[0];
          console.log('elements', element);

          element.appendChild(elo(generatedHtmlForProduct));
          console.log('generatedHtmlForProduct', generatedHtmlForProduct);
        }

        else {

          const productsTemplate = document.getElementById('products-template-left').innerHTML;

          const compiledProductsTemplate = Handlebars.compile(productsTemplate);

          const generatedHtmlForProduct = compiledProductsTemplate(parsedResponse[i]);

          const element = document.getElementsByClassName('container')[0];
          console.log('elements', element);

          element.appendChild(elo(generatedHtmlForProduct));
        }
      }
    });
}

connectWithDataBase();

