describe('/#/administration UI', () => {
  beforeEach(() => {
    cy.login({
      email: 'admin',
      password: 'admin123'
    })
    cy.visit('/#/administration')
  })

  it('should display the administration page title', () => {
    cy.get('h1').should('contain.text', 'Administration')
  })

  it('should list at least one user in the user table', () => {
    cy.get('table').should('exist')
    cy.get('table tbody tr').its('length').should('be.gte', 1)
  })

  it('should have a feedback section visible', () => {
    cy.contains('Feedback').should('be.visible')
  })
})