describe('Browser actions', () => {
  
	//Load Url
	it('should load correct url', () => {
		// specify timeout locally
		cy.visit('http://example.com/', { timeout: 10000 })
	})

	//Assertions
	it('should check correct url', () => {
		cy.url().should('include', 'example.com')
	})

	it('should check for correct & visible element on the page', () => {
		cy.get('body > :nth-child(1) > :nth-child(2)').should('be.visible')
	})

	it('should check for correct & visible element on the page', () => {
		cy.get('h1').should('be.visible')
	})

	/*it('should check for correct element on the page', () => {
		cy.get('h6').should('be.visible')
	})*/

	//Implicit waits, Pause, Debug
	it('should wait for 3 seconds', () => {
		cy.wait(3000)
	})

	it('should pasue the execution', () => {
		cy.pause()
	})
})
