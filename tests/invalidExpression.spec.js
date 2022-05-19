describe('Invalid Expression', () => {
    it('Two operators in a row', () => {
        cy.visit('index.html')
        cy.get('#eight')
            .click()
            .get('[value="/"]')
            .click()
            .get('[value="/"]')
            .click()
            .get('#two')
            .click()
            .get('[value="="]')
            .click()
            .get('#result').should('have.value', 'Invalid expression!')

    })
    it('Divided by zero', () => {
        cy.visit('index.html')
            .get('#nine')
            .click()
            .get('[value="/"]')
            .click()
            .get('#zero')
            .click()
            .get('[value="="]')
            .click()
            .get('#result').should('have.value', 'Invalid expression!')

    })
    it('Two operators in a row', () => {
        cy.visit('index.html')
            .get('#nine')
            .click()
            .get('[value="/"]')
            .click()
            .get('[value="x"]')
            .click()
            .get('#three')
            .click()
            .get('[value="="]')
            .click()
            .get('#result').should('have.value', 'Invalid expression!')

    })
    it('Two operators in a row', () => {
        cy.visit('index.html')
            .get('#nine')
            .click()
            .get('[value="x"]')
            .click()
            .get('[value="/"]')
            .click()
            .get('#three')
            .click()
            .get('[value="="]')
            .click()
            .get('#result').should('have.value', 'Invalid expression!')

    })
    it('Divided by nothing', () => {
        cy.visit('index.html')
            .get('#nine')
            .click()
            .get('[value="/"]')
            .click()
            .get('[value="="]')
            .click()
            .get('#result').should('have.value', 'Invalid expression!')

    })






})