import { settings, } from './settings.js';

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

      for (let i = 0; i < parsedResponse.length; i++) {

        if (i % 2 === 0) {
          const productsTemplate = document.getElementById('products-template-right').innerHTML;

          const compiledProductsTemplate = Handlebars.compile(productsTemplate);

          const generatedHtmlForProduct = compiledProductsTemplate(parsedResponse[i]);

          const element = document.getElementsByClassName('container')[0];

          element.appendChild(elo(generatedHtmlForProduct));
        }

        else {

          const productsTemplate = document.getElementById('products-template-left').innerHTML;

          const compiledProductsTemplate = Handlebars.compile(productsTemplate);

          const generatedHtmlForProduct = compiledProductsTemplate(parsedResponse[i]);

          const element = document.getElementsByClassName('container')[0];

          element.appendChild(elo(generatedHtmlForProduct));
        }
      }
    });
}

connectWithDataBase();

