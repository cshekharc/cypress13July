///<reference types="cypress"/>

describe("fill up the contact form", () => {
    beforeEach(function () {
        cy.visit("https://www.webdriveruniversity.com/")
        cy.get('#contact-us').invoke('removeAttr', 'target').click()
    })
    it("validate contact form with valid info", () => {
        // cy.visit("https://www.webdriveruniversity.com/")
        // cy.get('#contact-us').invoke('removeAttr', 'target').click()
        cy.get('input[name="first_name"]').should('have.class', 'feedback-input').type("Shekhar")
        cy.get('input[placeholder="Last Name"]').should('be.visible').and('have.class', 'feedback-input').type("Choudhari")
        cy.get('[name="email"]').type('test@test.com').should('have.value', 'test@test.com')
        cy.get('[placeholder="Comments"]').type('this is for test')
        cy.get('[type="submit"]').click()
        cy.get('#contact_reply h1').should('include.text', 'Thank You for your Message!')
    })
    it("validate contact form with blank submission", () => {
     
        cy.get('[type="submit"]').click()
        //cy.wait(5000)
        cy.get('body').should('include.text', 'Error: all fields are required')
    })
    it("validate contact form with invalid submission", () => {
        
        cy.get('input[name="first_name"]').should('have.class', 'feedback-input').type("Shekhar")
        cy.get('input[placeholder="Last Name"]').should('be.visible').and('have.class', 'feedback-input').type("Choudhari")
        cy.get('[name="email"]').type('test@test').should('have.value', 'test@test')
        cy.get('[placeholder="Comments"]').type('this is for test')
        cy.get('[type="submit"]').click()
        //cy.wait(5000)
        cy.get('body').should('include.text', 'Error: Invalid email address')
    })
})