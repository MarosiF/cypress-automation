describe('Browser actions', () => {
	//Load Url
	it('should load books url', () => {
		cy.visit('http://books.toscrape.com/index.html', { timeout: 10000 })
		cy.url().should('include', 'index.html')
		//Cypress log
		cy.log('Before reload')
		//Browser refresh/reload
		cy.reload()
		cy.log('After reload')
	})

	//Interaction with Buttons
	it('should click on poetry category', () => {
		//targeting an html element
		cy.get('a').contains('Poetry').click()
	})

	/*it('should click on Olio book detail', () => {
		//targeting an html element
		cy.get('a').contains('Moin Bene the unicorn').click()
	})
	*/

	it('should have correct price tag', () => {
		//targeting a class
		cy.get('.price_color').contains('£23.88')
	})
	
	it('should have correct price tag', () => {
		//targeting a class
		cy.get('.price_color').contains('£23.88')
	})
	

	it('should click on Home', () => {
		//targeting an html element
		cy.get('.breadcrumb > :nth-child(1) > a').click()
	})

	it('should click on Travel category', () => {
		//targeting an html element
		cy.get('a').contains('Travel').click()
		cy.get('h1').contains('Travel')
	})

	//Validating count of elements on the page
	it('should display correct number of books', () => {
		//targeting a class, use .class_name
		cy.get('.product_pod')
			//grab its length
			.its('length')
			//it should equal 11
			.should('eq', 11)
	})

	it('should take a snapshot', () => {
		cy.screenshot();
	})

})
