/// <reference types="cypress" />

import mainAction from "../../SauceFunctions/mainAction";

// beforeEach(() => {
//   // Preserve cookie in every test
//   Cypress.Cookies.defaults({
//     preserve: (cookie) => {
//       return true;
//     },
//   });
//   cy.viewport(1280, 800);
// });

const action = new mainAction();
describe(" Verify the login page", () => {
  it("Login layout verification", () => {
    cy.visit("https://www.saucedemo.com/");
    cy.get(".login_logo").should("be.visible");
    cy.get("#user-name").should("be.visible");
    cy.get("#password").should("be.visible");
    cy.get("#login-button").should("be.visible");
    cy.get(".bot_column").should("be.visible");
    cy.get(".login_credentials_wrap-inner").should("be.visible");
  });

  it("Login Verification with the correct credential", () => {
    cy.visit("https://www.saucedemo.com/");
    action.Login(true);
  });

  it("Login Verification with the invalid credential", () => {
    cy.visit("https://www.saucedemo.com/");
    action.Login(false);
  });
});

describe(" Adding and remove verification", () => {
  it("Able to add to cart", () => {
    cy.visit("https://www.saucedemo.com/");

    action.Login(true);
    cy.get("#react-burger-menu-btn").should("be.visible");
    cy.wait(3000);
    cy.get("#add-to-cart-sauce-labs-bike-light").should("be.visible");
    cy.get("#add-to-cart-sauce-labs-bike-light").click({ force: true });
    cy.wait(1000);
    cy.screenshot("adding a product to cart");
    cy.get("#remove-sauce-labs-bike-light").should("be.visible");
    cy.get("#remove-sauce-labs-bike-light").click({ force: true });
    cy.wait(1000);
    cy.screenshot("remove a product from the cart");
  });
});
