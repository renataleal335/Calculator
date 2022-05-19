describe('Basic operations', () => {
    it('Sum operation', () => {
        cy.visit('index.html')
            .get('#one').click()
            .get('[value="+"]').click()
            .get('#two').click()
            .get('[value="="]').click()
            .get('#result').should('have.value', '3')

    })
    it('Sub operation', () => {
        cy.visit('index.html')
            .get('#one').click()
            .get('#three').click()
            .get('[value="-"]').click()
            .get('#one').click()
            .get('#four').click()
            .get('[value="="]').click()
            .get('#result').should('have.value', '-1')

    })
    it('Multi operation', () => {
        cy.visit('index.html')
            .get('#one').click()
            .get('#zero').click()
            .get('[value="/"]').click()
            .get('#five').click()
            .get('[value="="]').click()
            .get('#result').should('have.value', '2')

    })
    it('Division operation', () => {
        cy.visit('index.html')
            .get('#one').click()
            .get('#zero').click()
            .get('[value="/"]').click()
            .get('#five').click()
            .get('[value="="]').click()
            .get('#result').should('have.value', '2')

    })
    it('Negative number', () => {
        cy.visit('index.html')
            .get('[value="-"]').click()
            .get('#six').click()
            .get('[value="x"]').click()
            .get('[value="-"]').click()
            .get('#six').click()
            .get('[value="="]').click()
            .get('#result').should('have.value', '36')

    })



})