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

  it('User should see a list of movies show a list of available movies', () => {
    cy.get('.movie-container')
      .children('div')
      .should('have.length', 5)
  })

  it('User should see an image on the poster cards', () => {
    cy.get('.movie-container')
    .children('div')
    .eq(2)
    .get('img').should('exist')
  })
  
  it('User should see a release date', () => {
    cy.get('.movie-container')
    .children('div')
    .eq(2)
    .get('p').contains('2020-08-20')
  })
  
  it('User should see a rating', () => {
    cy.get('.movie-container')
    .children('div')
    .eq(2)
    .get('h5').contains(5.4)
  })

  it('Should see info on each individual movie poster on click of info button (i)', () => {
    cy.get('.movie-container')
    .children('div')
    .eq(2)
    .children('.poster-button-div')
    .contains('i').click()
  })


})