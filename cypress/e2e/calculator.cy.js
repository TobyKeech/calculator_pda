describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })


it('running total should update', () => {
  cy.get('#number2').click();
  cy.get('#number3').click();
  cy.get('#number5').click();
  cy.get('.display').should('contain', '235')

})
it ('should be able to chain multiple operations together', () => {
  cy.get('#number2').click();
  cy.get('#operator_add').click();
  cy.get('#number2').click();
  cy.get('#operator-equals').click()
  cy.get('.display').should('contain', '4')

})
it ('should be able to chain multiple operations together', () => {
  cy.get('#number2').click();
  cy.get('#operator_add').click();
  cy.get('#number2').click();
  cy.get('#operator-subtract').click();
  cy.get('#number1').click();
  cy.get('#operator-equals').click()
  cy.get('.display').should('contain', '3')

})

it('should have a positive number displayed' , () => {
  cy.get('#number2').click();
  cy.get('#operator_add').click();
  cy.get('#number2').click();
  cy.get('#operator-multiply').click();
  cy.get('#number5').click();
  cy.get('#operator-equals').click()
  cy.get('.display').should('contain', '20')


})
it('should have a negative number displayed' , () => {
  cy.get('#number2').click();
  cy.get('#operator-subtract').click();
  cy.get('#number5').click();
  cy.get('#operator-equals').click()
  cy.get('.display').should('contain', '-3')

})

it('should have a decimal number displayed' , () => {
  cy.get('#number2').click();
  cy.get('#operator-divide').click();
  cy.get('#number5').click();
  cy.get('#operator-equals').click()
  cy.get('.display').should('contain', '0.4')

})

it('should be able to display very large numbers', () => {
  
  cy.get('#number5').click();
  cy.get('#number5').click();
  cy.get('#number5').click();
  cy.get('#number5').click();
  cy.get('#operator-multiply').click();
  cy.get('#number8').click();
  cy.get('#number8').click();
  cy.get('#number8').click();
  cy.get('#operator-equals').click()
  cy.get('.display').should('contain', '4932840')
})

it('should show `Not a number` when asked to divide a number by 0', () => {
 cy.get('#number9').click();
 cy.get('#operator-divide').click();
 cy.get('#number0').click();
 cy.get('#operator-equals').click();
 cy.get('.display').should('contain', 'this is not a number')
})

})