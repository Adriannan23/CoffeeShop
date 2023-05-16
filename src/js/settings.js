// tu bedziemy przechowywac selektory, nazwy klas, ustawienia (np link do serwera API)

export const select = {
  templateOf: {
    homePage: '#template-home-page',
    product: '#template-products',
    contactPage: '#template-contact-form'
  },
  containerOf: {
    home: '#home',
    products: '#products',
    contact: '#contact',
  }
};

export const templates = {
  allProducts: Handlebars.compile(document.querySelector(select.templateOf.product).innerHTML),
};