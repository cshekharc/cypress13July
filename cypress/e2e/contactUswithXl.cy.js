///<reference types="cypress"/>

describe("fill up the contact form", () => {
    const filePath = './cypress/fixtures/testData.xlsx'
    it("validate contact form with valid info", () => {
        cy.task('excelToJson', filePath).then((readData)=>{
            cy.visit("https://www.webdriveruniversity.com/")
            cy.get('#contact-us').invoke('removeAttr', 'target').click()
            cy.get('input[name="first_name"]').should('have.class', 'feedback-input').type(readData.Sheet1[1].A)
            cy.get('input[placeholder="Last Name"]').should('be.visible').and('have.class', 'feedback-input').type(readData.Sheet1[2].B)
            cy.get('[name="email"]').type(readData.Sheet1[3].C).should('have.value', readData.Sheet1[3].C)
            cy.get('[placeholder="Comments"]').type(readData.Sheet1[2].D)
            cy.get('[type="submit"]').click()
            cy.get('#contact_reply h1').should('include.text', 'Thank You for your Message!')
        })
     
    })
})