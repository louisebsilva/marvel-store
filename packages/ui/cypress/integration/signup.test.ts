/// <reference types="cypress" />

describe('SignUp test', () => {
  beforeEach(() => {
    cy.visit('/register');
  });

  it('should display signup page with register button disabled', () => {
    cy.get('form').then((element) => {
      cy.wrap(element).matchImageSnapshot('signUp-form');
    });
  });

  it('should redirect to login page when click login button', () => {
    cy.get('button').contains('Login').click();

    cy.url().should('eq', 'http://localhost:3000/login');
  });

  it('should enable register button when all fields are filled', () => {
    cy.get('#username').type('Alejandro');
    cy.get('#userEmail').type('ale@alejandro.com');
    cy.get('#userPassword').type('theFameMonster');
    cy.get('#confirmPassword').type('theFameMonster');
  });
});
