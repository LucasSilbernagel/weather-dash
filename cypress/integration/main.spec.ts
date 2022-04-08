describe('Main page', () => {
  it('Checks that the main page renders and updates correctly', () => {
    cy.visit('http://localhost:3000/')
    /* ==== Generated with Cypress Studio ==== */
    cy.get('#citySelect-label').should('have.text', 'City')
    cy.get('.Mui-selected').should('have.text', 'Celsius')
    cy.get('[value="imperial"]').should('have.text', 'Fahrenheit')
    cy.get('.Mui-selected').should('have.class', 'Mui-selected')
    cy.get('[value="imperial"]').click()
    cy.get('.Mui-selected').should('have.class', 'Mui-selected')
    cy.get('[value="metric"]').click()
    cy.get(
      '.css-80wlp8-MuiGrid-root > :nth-child(1) > .MuiGrid-root > .MuiTypography-root'
    ).should('have.text', 'Today')
    cy.get('.css-1b8bt6v-MuiGrid-root > .MuiTypography-body1').should(
      'have.text',
      'Built by Lucas Silbernagel'
    )
    cy.get(
      '.css-lqk01d-MuiGrid-root > .css-13i4rnv-MuiGrid-root > .MuiTypography-body1'
    ).should('have.text', 'API: OpenWeatherMap')
    cy.get('#citySelect').clear()
    cy.get('#citySelect').type('Tokyo')
    cy.wait(3000)
    cy.get('#citySelect-option-0').click()
    cy.get('#citySelect').should('have.value', 'Tokyo, Japan')
    cy.get('[data-testid="CloseIcon"] > path').click()
    cy.get('#citySelect').should('have.value', 'Toronto, Ontario, Canada')
    /* ==== End Cypress Studio ==== */
  })
})
