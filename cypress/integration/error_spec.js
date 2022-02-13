describe('Error', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/', {statusCode: 404})
    
    cy.visit(" http://localhost:3000")
  
  })
  //   cy.intercept(
  //     {
  //       method: 'GET',
  //       url: '/movies/'
  //     },
  //     []
  //   )
  // })
    it('Should show an error if an error occurs', () => {
      
      // cy.fixture('error.json').then(() => {

      // })
    })
})

// describe('Error', () => {
//   beforeEach(() => {
//     cy.intercept(
//       {
//         method: 'GET',
//         url: '/movies/'
//       },
//       []
//     )
    // cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/', {fixture: 'error.json'}).as('getMovies')
    
    // cy.visit(" http://localhost:3000")
//   })

// })

// describe('app', () => {
//   // but then fails the test
//   it('catches an error', () => {
//     cy.visit('http://localhost:3000')
//     cy.get('.pokemonName-input').type('unknown')
//     cy.contains('Submit').click()
//     // currently fails
//     cy.contains('Try again').should('be.visible')
//   })

//   it('catches an error and all is good', () => {
//     cy.visit('http://localhost:3000')
//     cy.get('.pokemonName-input').type('unknown')
//     cy.contains('Submit').click()
//     // you can click "Try again manually"
//   })
// })