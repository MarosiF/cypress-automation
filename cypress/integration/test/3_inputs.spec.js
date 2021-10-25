describe('Working with inputs', () => {
	//Load Url
	it('should load books url', () => {
		cy.visit('http://zero.webappsecurity.com/login.html', { timeout: 10000 })
		cy.url().should('include', 'zero')
		//Clear cookies & local storage, cypress automatically clears cookies between tests
		cy.clearCookies({log: true})
		cy.clearLocalStorage({log: true})
	})

	//Clear & type text into Inputs
	it('should fill username', () => {
		//targeting an id, use #id_name
		//make sure input is clear, input should be blank
		cy.get('#user_login').clear()
		cy.get('#user_login').type('Moin')
	})

	it('should fill password', () => {
		//Variables and Aliases
		cy.get('#user_password').as('pw')
		cy.get('@pw').clear()
		//Wait between typing
		cy.get('@pw').type('moin moin moin', { delay: 100 })
	})

	it('should submit login form', () => {
		cy.contains('Sign in').click()
	})

	it('should display error', () => {
		cy.get('.alert-error').should('be.visible')
	})

	//Chaining Assertion
	it('should display error message', () => {
		cy.get('.alert-error').should('be.visible').and('contain', 'Login and/or password are wrong.')
	})


	//Interacting witg Checkbox
	it('should mark checkbox', () => {
		//targeting an attribute, use #id_name
		//make sure input is clear, input should be blank
		cy.get('input[type="checkbox"]').click()
	})
})
