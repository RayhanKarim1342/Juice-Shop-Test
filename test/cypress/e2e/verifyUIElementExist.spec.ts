describe('HomepageUIVerify', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should display the Juice Shop logo', () => {
    cy.get('img[alt="OWASP Juice Shop"]').should('be.visible')
  })

  it('should have a navigation bar', () => {
    cy.get('mat-icon').contains('menu').should('exist')
  })

  it('should display a search bar', () => {
    cy.get('mat-icon').contains('search').should('exist')
  })

  it('should have a link to the login page', () => {
    cy.contains('Login').should('have.attr', 'href').and('include', '/login')
  })

  it('should have the company name', () => {
    cy.contains('OWASP Juice Shop').should('exist')
  })
})