/// <reference types="cypress" />

describe('Login test', () => {
  beforeEach(() => {
    cy.visit('/login');
  });

  it('should display login page with enter button disabled', () => {
    cy.get('form').then((element) => {
      cy.wrap(element).matchImageSnapshot('login-form');
    });
  });

  it('should redirect to register page when click register button', () => {
    cy.get('button').contains('Cadastre-se').click();

    cy.url().should('eq', 'http://localhost:3000/register');
  });

  it('should enable enter button when all fields are filled', () => {
    cy.get('#userEmail').type('ale@alejandro.com');
    cy.get('#userPassword').type('theFameMonster');
  });
});
