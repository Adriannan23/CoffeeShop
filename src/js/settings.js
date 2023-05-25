// tu bedziemy przechowywac selektory, nazwy klas, ustawienia (np link do serwera API)

export const select = {
  templateOf: {
    homePage: '#template-home-page',
    product_left: '#products-template-left',
    product_right: '#products-template-right',
    contactPage: '#template-contact-form'
  },
  containerOf: {
    home: '#home',
    products: '#products',
    contact: '#contact',
    pages: '#pages',
  },

  nav: {
    links: '.main-nav a',
  }
};

export const settings = {
  db: {
    url: '//localhost:3131',
    products: 'products',
  }

};

export const classNames = {
  nav: {
    active: 'active',
  },
  pages: {
    active: 'active',
  }
};

// export const templates = {
//   allProducts_left: Handlebars.compile(document.querySelector(select.templateOf.product_left).innerHTML),
//   allProducts_right: Handlebars.compile(document.querySelector(select.templateOf.product_right).innerHTML),
// };

