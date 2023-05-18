// import { templates } from "./settings.js";
// // import { select } from '../settings.js';

// const app = {
// }
// app.init();


const data = {
  'products': [
    {
      'id': 1,
      'description': 'Opis produktu 1',
      'roasting': 'Stopień palenia 1',
      'intensity': 'Intensywność 1',
      'image': 'coffee-3'
    },
    {
      'id': 2,
      'description': 'Opis produktu 2',
      'roasting': 'Stopień palenia 2',
      'intensity': 'Intensywność 2',
      'image': 'coffee-3'
    },
  ]
};

document.addEventListener('DOMContentLoaded', function () {
  const productsTemplate = document.getElementById('products-template').innerHTML;
  console.log('productsTemplate:', productsTemplate);

  const compiledProductsTemplate = Handlebars.compile(productsTemplate);

  const generatedHtmlForProduct = compiledProductsTemplate({
    'id': 1,
    'description': 'Opis produktu 1',
    'roasting': 'Stopień palenia 1',
    'intensity': 'Intensywność 1',
    'image': 'coffee-3'
  });

  const generated2 = compiledProductsTemplate(data.products[1]);

  console.log('generatedHtmlForProduct:', generated2);

  const element = document.getElementById('test');

  console.log(element);

  function elo(htmlString) {
    let div = document.createElement('div');
    div.innerHTML = htmlString.trim();
    console.log('zwroce takie cos', div.firstChild);
    return div.firstChild;
  }
  element.appendChild(elo(generatedHtmlForProduct));

}
);

function connectWithDataBase() {

  // let tabWithAllProducts = [];

  const url = 'http://localhost:3131/products';



  fetch(url)
    .then(function (rawResponse) {
      return rawResponse.json();
    })
    .then(function (parsedResponse) {
      return parsedResponse;
    });


  // for (let i = 0; i <= tabWithProducts.length; i++) {
  //   console.log(i);
  // }

}
connectWithDataBase();
