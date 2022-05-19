describe('Operation with two or more operators', () => {
    it('Sum and sub', () => {
        cy.visit('index.html')
            .get('#one').click()
            .get('[value="+"]').click()
            .get('#two').click()
            .get('[value="-"]').click()
            .get('#one').click()
            .get('[value="="]').click()
            .get('#result').should('have.value', '2')
    })
    it('Sum,sub,multi and div', () => {
        cy.visit('index.html')
            .get('#nine').click()
            .get('[value="+"]').click()
            .get('#nine').click()
            .get('[value="-"]').click()
            .get('#two').click()
            .get('[value="x"]').click()
            .get('#nine').click()
            .get('[value="/"]').click()
            .get('#three').click()
            .get('[value="="]').click()
            .get('#result').should('have.value', '12')
    })
    it('Div and multi', () => {
        cy.visit('index.html')
            .get('#nine').click()
            .get('[value="/"]').click()
            .get('#three').click()
            .get('[value="/"]').click()
            .get('#two').click()
            .get('[value="x"]').click()
            .get('#nine').click()
            .get('[value="="]').click()
            .get('#result').should('have.value', '13.5')
    })
    it('Negative number', () => {
        cy.visit('index.html')
            .get('[value="-"]').click()
            .get('#one').click()
            .get('[value="-"]').click()
            .get('#two').click()
            .get('[value="-"]').click()
            .get('#one').click()
            .get('[value="="]').click()
            .get('#result').should('have.value', '-4')
    })





})