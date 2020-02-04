/// <reference types="cypress" />
import {
  addressSecondZoneFull,
  addressThirdZoneFull,
  ADDRESS_IN_SECOND_ZONE,
} from '@cypress/support/data/addresses';
import {
  addProductsToBasket,
  login,
  selectCardAndCheckOrder,
  setupTest,
  testSelector,
} from '@cypress/support/helpers';
import { testIds } from '@cypress/support/data/testids';

describe('Старый пользователь меняет адрес и заказывает продукты со старой картой', function() {
  it('1я зона доставки, время и дата по умолчанию', () => {
    setupTest();

    /* visit main page */
    cy.visit('/');

    cy.wait('@user');

    login();

    addProductsToBasket();

    /* go to basket page / order page */
    cy.visit('/order/checkout');
    cy.get(testSelector(testIds.Checkout_deliveryFlat)).type('11');

    /* submit order */
    cy.get(testSelector(testIds.BasketPageOrderButton))
      .scrollIntoView()
      .click({
        force: true,
      });

    selectCardAndCheckOrder();

    cy.end();
  });

  it('2я зона доставки, время и дата по умолчанию', () => {
    setupTest();

    /* visit main page */
    cy.visit('/');
    cy.wait('@user');

    login(addressSecondZoneFull);

    addProductsToBasket();

    /* go to basket page / order page */
    cy.visit('/order/checkout');
    cy.get(testSelector(testIds.Checkout_deliveryFlat)).type('11');

    /* submit order */
    cy.get(testSelector(testIds.BasketPageOrderButton))
      .scrollIntoView()
      .click({
        force: true,
      });

    selectCardAndCheckOrder();

    cy.end();
  });

  it('3я зона доставки, время и дата по умолчанию', () => {
    setupTest();

    /* visit main page */
    cy.visit('/');
    cy.wait('@user');

    login(addressThirdZoneFull);

    addProductsToBasket(10);

    /* go to basket page / order page */
    cy.visit('/order/checkout');
    cy.get(testSelector(testIds.Checkout_deliveryFlat)).type('11');

    /* submit order */
    cy.get(testSelector(testIds.BasketPageOrderButton))
      .scrollIntoView()
      .click({
        force: true,
      });

    selectCardAndCheckOrder();

    cy.end();
  });

  it('пользователь выбирает самовывоз', () => {
    setupTest();

    /* visit main page */
    cy.visit('/');
    cy.wait('@user');

    login();

    addProductsToBasket();

    /* go to basket page / order page */
    cy.visit('/order/checkout');
    cy.get(testSelector(testIds.Checkout_deliveryFlat)).type('11');
    cy.get(testSelector(testIds.Checkout_deliveryTypeTakeaway)).click({
      force: true,
    });

    /* submit order */
    cy.get(testSelector(testIds.BasketPageOrderButton))
      .scrollIntoView()
      .click({
        force: true,
      });
    selectCardAndCheckOrder();

    cy.end();
  });

  it('пользователь выбирает другой адрес на странице заказа', () => {
    setupTest();

    /* visit main page */
    cy.visit('/');
    cy.wait('@user');

    login();

    addProductsToBasket(6);

    /* go to basket page / order page */
    cy.visit('/order/checkout');
    cy.get(testSelector(testIds.Checkout_deliveryTypeCourier)).click({
      force: true,
    });
    cy.get(testSelector(testIds.Checkout_deliveryStreet)).click({
      force: true,
    });
    cy.get(testSelector(testIds.AddressSearchInput))
      .clear()
      .type(ADDRESS_IN_SECOND_ZONE);
    cy.wait('@address');

    cy.get(testSelector(testIds.AddressSearchInput)).type('{enter}');
    cy.get(testSelector(testIds.AddressSubmitButton)).click({ force: true });
    cy.get(testSelector(testIds.Checkout_deliveryFlat)).type('11');

    /* submit order */
    cy.get(testSelector(testIds.BasketPageOrderButton))
      .scrollIntoView()
      .click({
        force: true,
      });

    selectCardAndCheckOrder();

    cy.end();
  });
});

export default null;
