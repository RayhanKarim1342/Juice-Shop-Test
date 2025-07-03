describe('Language Change and Text Verification Tests', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.contains('mat-icon', 'language').click();
    cy.get('#mat-input-0').type('fra');
    cy.get('input[id^="mat-radio-"]').first().click({ force: true });
    cy.wait(5000); // wait for the language to load
  });

  it('verifies "Compte" button is visible', () => {
    cy.contains('button', 'Compte').should('be.visible');
  });

  it('verifies "Tous les produits" text is visible', () => {
    cy.get('div').contains('Tous les produits').should('be.visible');
  });

  it('opens menu and verifies text "Avis de clients"', () => {
    cy.get('mat-icon').contains('menu').click();
    cy.get('span').contains('Avis de clients').should('be.visible');
  });
});