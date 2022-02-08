describe('Main Page', () => {
  beforeEach(() => {
    cy.visit(" http://localhost:3000")
  }) 

  it("User should see page name in navigation bar on page load", () => {
    cy.get('nav')
    .should('be.visible')
    .contains('Rancid Tomatillos')
  })

  it('User should see a button that says Main Page', () => {
    cy.get('button').contains('Main Page')
  })

  it('User should see a list of movies show a list of available movies', () => {
    cy.get('main').contains('2020-09-29')
  })

  
})