describe('Error', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/', {statusCode: 500})
    
    cy.visit(" http://localhost:3000/")
  
 
  })
  
  it('Should show an error if an error occurs', () => {
    cy.get('nav')
    .get('.search-button')
    .contains('Find A Movie').click()
    cy.get('#root > :nth-child(2)').contains('Oops! Something went wrong! Error reading: 500 undefined. I am so sorry for the inconvenience! The server is down. Please try again, later.')

  })

  it('Should show an error if an error occurs', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/', {statusCode: 404})
    cy.get('nav')
    .get('.search-button')
    .contains('Find A Movie').click()
    cy.get('#root > :nth-child(2)').contains('Oops! Something went wrong! Error reading: 500 undefined. I am so sorry for the inconvenience! The server is down. Please try again, later.')

  })
})

