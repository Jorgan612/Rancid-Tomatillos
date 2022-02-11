describe('Details Page', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/*', {fixture: 'details.json'}).as('getMovies')

    cy.visit("http://localhost:3000/")
    .get('.poster-button').contains('i').click()
  })

  it('User should be able to see movie image', () => {
    cy.get('img')
    .should('exist')
  })
})

//test for image
//title
//tagline
//overview
//runtime


//check that main page button re-routes? Maybe just checking that it clicks?

