describe('Fixtures and Keyboard', () => {

	//Fixtures & Static Test Data
	it('should try to login', () => {
		cy.visit('http://zero.webappsecurity.com/login.html', { timeout: 10000 })
		cy.url().should('include', 'zero')

		//returns the value of the user json file
		cy.fixture('user').then(user => {
			const username = user.username
			const password = user.password

			cy.get('#user_login').clear()
			cy.get('#user_login').type(username)
			cy.get('#user_password').clear()
			cy.get('#user_password').type(password)
		})
	})

	//Keyboard Press Simulation
	it('should press enter', () => {
		cy.visit('http://zero.webappsecurity.com/index.html', { timeout: 10000 })
		cy.url().should('include', 'index')

		cy.get('#searchTerm').type('Online Banking {enter}')
		cy.contains('Search Results:')
	})
})
