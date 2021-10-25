describe('Device Tests', () => {
  
	//Viewport & Devices Emulation
	it('720p', () => {
        cy.viewport(1280, 720)
		cy.visit('http://example.com/', { timeout: 10000 })
        cy.wait(3000)
	})

    it('1080p', () => {
        cy.viewport(1980, 1080)
		cy.visit('http://example.com/', { timeout: 10000 })
        cy.wait(3000)
	})

    it('iPhone X', () => {
        cy.viewport('iphone-x')
		cy.visit('http://example.com/', { timeout: 10000 })
        cy.wait(3000)
	})

    it('iPad Mini', () => {
        cy.viewport('ipad-mini')
		cy.visit('http://example.com/', { timeout: 10000 })
        cy.wait(3000)
	})

    it('Samsung Note 9', () => {
        cy.viewport('samsung-note9')
		cy.visit('http://example.com/', { timeout: 10000 })
        cy.wait(3000)
	})

})
