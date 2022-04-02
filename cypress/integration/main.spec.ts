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
    cy.get(
      '.MuiGrid-grid-lg-3 > svg > [d="M7 5a4.5 4.5 0 0 1 4.473 4h.027a2.5 2.5 0 0 1 0 5H3a3 3 0 0 1-.247-5.99A4.502 4.502 0 0 1 7 5zm3.5 4.5a3.5 3.5 0 0 0-6.89-.873.5.5 0 0 1-.51.375A2 2 0 1 0 3 13h8.5a1.5 1.5 0 1 0-.376-2.953.5.5 0 0 1-.624-.492V9.5z"]'
    ).should('be.visible')
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
