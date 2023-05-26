import { settings, select } from './settings.js';


const app = {

  elo: function (htmlString) {
    let div = document.createElement('div');
    div.innerHTML = htmlString.trim();
    return div.firstChild;
  },

  connectWithDataBase: function () {

    const url = settings.db.url + '/' + settings.db.products;

    fetch(url)
      .then((rawResponse) => rawResponse.json())
      .then((parsedResponse) => {
        for (let i = 0; i < parsedResponse.length; i++) {
          if (i % 2 === 0) {
            const productsTemplate = document.getElementById('products-template-right').innerHTML;
            const compiledProductsTemplate = Handlebars.compile(productsTemplate);
            const generatedHtmlForProduct = compiledProductsTemplate(parsedResponse[i]);
            const element = document.getElementsByClassName('container')[0];
            element.appendChild(this.elo(generatedHtmlForProduct));
          } else {
            const productsTemplate = document.getElementById('products-template-left').innerHTML;
            const compiledProductsTemplate = Handlebars.compile(productsTemplate);
            const generatedHtmlForProduct = compiledProductsTemplate(parsedResponse[i]);
            const element = document.getElementsByClassName('container')[0];
            element.appendChild(this.elo(generatedHtmlForProduct));
          }
        }
      });
  },

  hideTabs: function () {

    const sectionProducts = document.querySelector('.section-products');

    const sectionAboutUs = document.querySelector('.about-us');

    const sectionContactUs = document.querySelector('.contact-form');

    sectionContactUs.classList.add('inactive');
    sectionProducts.classList.remove('inactive');
    sectionAboutUs.classList.remove('inactive');

    this.navLinks = document.querySelectorAll(select.nav.links);

    for (let link of this.navLinks) {
      link.addEventListener('click', function (event) {
        const clickedElement = this;
        event.preventDefault();

        const id = clickedElement.getAttribute('href').replace('#', '');
        window.location.hash = id;

        if (clickedElement.getAttribute('href') == '#home') {

          sectionContactUs.classList.add('inactive');
          sectionProducts.classList.remove('inactive');
          sectionAboutUs.classList.remove('inactive');

        }

        if (clickedElement.getAttribute('href') == '#contact') {
          sectionContactUs.classList.remove('inactive');
          sectionProducts.classList.add('inactive');
          sectionAboutUs.classList.add('inactive');
        }
        if (clickedElement.getAttribute('href') == '#products') {
          sectionContactUs.classList.add('inactive');
          sectionProducts.classList.remove('inactive');
          sectionAboutUs.classList.add('inactive');
        }
      });
    }
  },
};

app.connectWithDataBase();
app.hideTabs();

