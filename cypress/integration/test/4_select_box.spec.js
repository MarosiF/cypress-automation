describe('Select Box', () => {
    //Load Url
    it('should load website with select box', () => {
        cy.visit('https://devexpress.github.io/testcafe/example/', { timeout: 10000 })
        cy.url().should('include', 'testcafe')
    })

    //Interaction with select box
    it('should select an option from select box', () => {
        //targeting an html element
        cy.get('#preferred-interface').select('JavaScript API')
        cy.get('#preferred-interface').should('have.value', 'JavaScript API')

        cy.wait(5000)
    })

    //Interaction with select box
    it('should select an option from select box', () => {
        //targeting an html element
        cy.get('#preferred-interface').select('Both')
        cy.get('#preferred-interface').should('have.value', 'Both')

    })

    //Interaction with select box
    it('should select an option from select box', () => {
        //targeting an html element
        cy.get('.col-1 > :nth-child(2) > :nth-child(2)').click()
        cy.get('[data-testid="tried-testcafe-checkbox"]').click()

        cy.get('[data-testid="comments-area"]').type('Moin')

    })

    //Scroll
    it('should scroll down and up on the page', () => {
       cy.get('#submit-button').scrollIntoView()
       cy.wait(5000)
       cy.get('header').scrollIntoView()


    })

})
