///<reference types="cypress"/>

describe("fill up the contact form", () => {
    let data
    before(()=>{
        cy.fixture('data').then((fixData)=>{
            data = fixData
            //cy.log(fixData)
        })
    })
    it("validate contact form with valid info", () => {
        cy.visit("https://www.webdriveruniversity.com/")
        cy.get('#contact-us').invoke('removeAttr', 'target').click()
        cy.get('input[name="first_name"]').should('have.class', 'feedback-input').type(data.firstName)
        cy.get('input[placeholder="Last Name"]').should('be.visible').and('have.class', 'feedback-input').type(data.lastName)
        cy.get('[name="email"]').type(data.emailId).should('have.value', data.emailId)
        cy.get('[placeholder="Comments"]').type(data.comment)
        cy.get('[type="submit"]').click()
        cy.get('#contact_reply h1').should('include.text', 'Thank You for your Message!')
    })
})