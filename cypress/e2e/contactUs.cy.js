///<reference types="cypress"/>

describe("fill up the contact form", ()=>{
    it("validate contact form with valid info", ()=>{
        cy.visit("https://www.webdriveruniversity.com/")
        cy.get('#contact-us').invoke('removeAttr', 'target').click()
        cy.get('input[name="first_name"]').type("Shekhar")
        cy.get('input[placeholder="Last Name"]').type("Choudhari")
        cy.get('[name="email"]').type('test@test.com')
        cy.get('[placeholder="Comments"]').type('this is for test')
        cy.get('[type="submit"]').click()
    })
})