describe('Main Page', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/', {fixture: 'example.json'}).as('getMovies')
    
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
    cy.get('.movie-container')
      .children('div')
      .should('have.length', 5)
  })

  

  it('Should see info on each individual movie poster on click of info button (i)', () => {
    cy.get('.movie-container')
    .children('div')
    .eq(2)
    .children('.poster-button-div')
    .contains('i').click()
  })

})