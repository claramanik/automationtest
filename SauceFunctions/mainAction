class mainAction {
  Login(valid) {
    if (valid) {
      cy.get(".login_wrapper-inner").should("be.visible");
      cy.get("#user-name").clear().type("standard_user", { force: true });
      cy.get("#password").clear().type("secret_sauce", { force: true });
      cy.get("#login-button").click({ force: true });
      cy.get(".header_secondary_container").should("be.visible");
    } else {
      cy.get("#user-name").clear().type("standard_user", { force: true });
      cy.get("#password").clear().type("secret_sauceee", { force: true });
      cy.get("#login-button").click({ force: true });
      cy.get(".error-button").should("be.visible");
    }
  }
}
export default mainAction;
