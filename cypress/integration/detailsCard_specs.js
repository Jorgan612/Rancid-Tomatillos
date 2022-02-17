describe('Details Page', () => {
  beforeEach(() => {
    cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies/*', {fixture: 'details.json'})
    
    cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies/', {fixture: 'example.json'})

    cy.visit("http://localhost:3000/")
    .get('.poster-button').contains('i').click()
  })
  
  it("User should see page name in navigation bar on page load", () => {
    cy.get('nav')
    .should('be.visible')
    .contains('Rancid Tomatillos')
  })

  it('User should see search field in the navBar', () => {
    cy.get('nav')
    .contains('Rancid Tomatillos')
    cy.get('input').type('Rogue')
  })

  it('User should be able to use search field to find a movie by name', () => {
    cy.get('nav')
    cy.get('input').type('Rogue')
    cy.get('.search-button').click()
  })

  it('User should be able to see movie image', () => {
    cy.get('img')
    .should('exist')
  })

  it('User should be able to see a movie title', () => {
    cy.get('.movie-title').contains('Money Plane')
  })

  it('User should be able to see a tagline', () => {
    cy.get('.tagline').contains('Tagline: none')
  })

  it('User should be able to see an overview', () => {
    cy.get('.over-view').contains(`A professional thief with $40 million in debt and his family's life on the line must commit one final heist - rob a futuristic airborne casino filled with the world's most dangerous criminals.`)
  })

  it('User should be able to see a runtime', () => {
    cy.get('.run-time').contains(82)
  })

  it('User should see a button that says Main Page and be able to click it to return to main page', () => {
    cy.get('button').contains('Main Page')
    cy.get('button').contains('Main Page').click()
    .url().should('eq', 'http://localhost:3000/')
    cy.get('.movie-container')
      .children('div')
      .should('have.length', 5)
  })

})

