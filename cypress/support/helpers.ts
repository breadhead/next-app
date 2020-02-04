import { SelfRootStore } from '@app/stores/root/Root';
import { OrderHistoryResponse } from '@app/types/order/OrderHistoryResponse';
import { OrderItemRequest, OrderRequest } from '@app/types/order/OrderRequest';
import { OrderItemResponse } from '@app/types/order/OrderResponse';
import { isEqual } from 'lodash';
import { getSnapshot } from 'mobx-state-tree';
import { addressFirstZoneFull } from './data/addresses';
import { values } from './data/values';

export const testSelector = (testId: string) => `[data-testid=${testId}]`;

export const login = (address = addressFirstZoneFull) => {
  let phoneCode = '';

  cy.window()
    .then((window: any) => {
      return window.store.user.resetAuthCode(values.existingPhone);
    })
    .then(() => cy.wait('@resetCode'))
    .then(({ response: { body } }) => (phoneCode = body as string))
    .then(() => cy.window())
    .then((window: any) =>
      window.store.user.login({
        code: `${phoneCode}`,
        phone: values.existingPhone,
      }),
    )
    .then(() => cy.window())
    .then((window: any) => window.store.address.saveAddress(address))
    .then(() => cy.window())
    .then((window: any) => window.store.order.resetOrderKeepAddress());
};

export const selectCard = () => {
  cy.get('.simple-card.ui-card').click({ force: true });
  cy.get('.simple-card__cvc input').type(values.card.cv2);
  cy.get('.sbersafe-pay-button').click({ force: true });
  cy.get('.sbersafe-pay-button').click({ force: true });
  cy.get('.value input[type=password]').type(values.card.sms).type;
  return cy.get('input[type=submit]').click({ force: true });
};

export const setupTest = () => {
  cy.log('clearing cookies');
  cy.clearCookies();

  cy.server();
  cy.viewport(1440, 1000);

  cy.route('GET', `**/user**`).as('user');
  cy.route('POST', `**/auth/reset-code-without-confirm`).as('resetCode');
  cy.route('PUT', `**/order/order`).as('updateOrder');
  cy.route('GET', `**/order/final/**`).as('finalOrder');
  cy.route('POST', `**/order/order`).as('createOrder');
  cy.route('POST', 'https://dadata.ru/api/v2/suggest/address').as('address');
};

export const selectCardAndCheckOrder = () => {
  let order;
  let code = '';
  cy.wait('@createOrder')
    .then(({ response: { body }, requestBody }) => {
      order = requestBody;
      return (code = (body as any).code);
    })
    .then(() => selectCard())
    .then(() => cy.visit(`/order/final/${code}`))
    .then(() => cy.window())
    .then((window: any) => {
      const store = window.store as SelfRootStore;
      const orderResponse =
        store.orderHistory.order && getSnapshot(store.orderHistory.order);
      expect(
        compareOrderRequestAndResponse(
          order as OrderRequest,
          orderResponse as any,
        ),
      ).to.eql(true);
    });
};

const compareOrderRequestAndResponse = (
  req: OrderRequest,
  res?: OrderHistoryResponse,
) => {
  if (!res) return false;
  return (
    req.code === res.code &&
    req.deliveryDate === res.deliveryDate &&
    isEqual(req.deliveryTime, res.deliveryTime) &&
    req.flatwareAmount === res.flatwareAmount &&
    req.comment === res.comment &&
    req.deliveryCode === res.delivery?.code &&
    req.paymentCode === res.payment?.code &&
    req.alternativeAction === res.alternativeAction &&
    req.userPhone === res.userPhone &&
    req.userName === res.userName &&
    req.items.every((reqItem, i) => compareOrderItems(reqItem, res.items[i])) &&
    req.address?.latitude === res.address?.latitude &&
    req.address?.longitude === res.address?.longitude &&
    req.address?.street === res.address?.street &&
    req.address?.flat === res.address?.flat
  );
};

const compareOrderItems = (
  itemReq: OrderItemRequest,
  itemRes: OrderItemResponse,
) => {
  return (
    itemReq.product === itemRes.product.code &&
    itemReq.quantity === itemRes.quantity &&
    isEqual(itemReq.foodServices, itemRes.foodServices)
  );
};

export function addProductsToBasket(quantity = 6) {
  cy.window().then((window: any) => {
    const products = window.store.common.mainPage.entity.products.products;
    window.store.order.changeCountByProduct(products[0], quantity);
  });
  cy.wait('@updateOrder');
}

export function inputTestCard() {
  cy.get('#cardnumber').type(values.card.cardNumber);
  cy.get('#expiry').type(values.card.validThru);
  cy.get('#cvc').type(values.card.cv2);
  cy.get('.sbersafe-pay-button').click({ force: true });
  cy.get('.value input[type=password]').type(values.card.sms).type;
  cy.get('input[type=submit]').click({ force: true });
}
