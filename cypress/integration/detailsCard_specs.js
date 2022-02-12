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

  it('User should be able to see a movie title', () => {
    cy.get('.movie-title').contains('Money Plane')
  })

  it('User should be able to see a tagline', () => {
    cy.get('.tagline').contains('Tagline: none.')
  })

  it('User should be able to see an overview', () => {
    cy.get('.over-view').contains(`A professional thief with $40 million in debt and his family's life on the line must commit one final heist - rob a futuristic airborne casino filled with the world's most dangerous criminals.`)
  })

  it('User should be able to see a runtime', () => {
    cy.get('.run-time').contains(82)
  })
  // check that main page button re-routes? Maybe just checking that it clicks?
})

