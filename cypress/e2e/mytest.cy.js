describe('my first test', () => {
  it('verify positive test', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com')
    cy.title().should('eq', 'OrangeHRM')
  })

  it('verify negative test', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com')
    cy.title().should('eq', 'OrangeHRM123')
  })
})