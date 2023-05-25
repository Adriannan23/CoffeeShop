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

  initPages: function () {
    const pages = document.querySelector(select.containerOf.pages).children;
    console.log('pages', pages);
    const navLinks = document.querySelectorAll(select.nav.links);
    console.log('navLinks', navLinks);
    const idFromHash = window.location.hash.replace('#', '');
    console.log('idFromHash', idFromHash);
    let pageMatchingHash = pages[0].id;
    console.log('pageMatchingHash', pageMatchingHash);

    for (let page of pages) {
      if (page.id == idFromHash) {
        pageMatchingHash = page.id;
        break;
      }
    }
    // activatePage(pageMatchingHash);

    //   for (let link of navLinks) {
    //     link.addEventListener('click', function (event) {
    //       const clickedElement = this;
    //       event.preventDefault();

    //       // get page id from href attribute
    //       const id = clickedElement.getAttribute('href').replace('#', '');

    //       // run thisApp.activatePage with that id
    //       activatePage(id);

    //       // change URL hash
    //       window.location.hash = '#/' + id;
    //     });
    //   }
    // },



    // activatePage: function (pageId) {


    //   /* add class "active" to matching pages, remove from non-matching */
    //   for (let page of pages) {
    //     page.classList.toggle(classNames.pages.active, page.id == pageId);
    //   }
    //   // if (page.id == pageId) {
    //   //   page.classList.add(classNames.pages.active);
    //   // }
    //   // else {
    //   //   page.classList.remove(classNames.pages.active);
    //   // }
    //   /* add class "active" to matching links, remove from non-matching */

    //   for (let link of navLinks) {
    //     link.classList.toggle(classNames.nav.active,
    //       link.getAttribute('href') == '#' + pageId
    //     );
    //   }
  },
};
app.initPages();
app.connectWithDataBase();

