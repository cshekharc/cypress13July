///<reference types="cypress"/>

describe("Alert handling", function () {
    beforeEach(function () {
        cy.visit("https://www.webdriveruniversity.com/")
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click()
    })

    it("Alert handling using window:alert", function (){
        cy.get('.btn.btn-default.btn-lg.dropdown-toggle').first().click()
        
        cy.on('window:alert',(str)=>{
            expect(str).to.include('I am an alert box!')
        })
    })

    it("Alert handling using window:confirm - Ok", function (){
        cy.get('.btn.btn-default.btn-lg.dropdown-toggle').last().click()

        cy.on('window:confirm', (str)=>{
            expect(str).to.include('Press a button')
            return true
        })
        cy.get('#confirm-alert-text').should('have.text', 'You pressed OK!')
    })

    it.only("Alert handling using window:confirm - Cancel", function (){
        cy.get('.btn.btn-default.btn-lg.dropdown-toggle').last().click()

        cy.on('window:confirm', (str)=>{
            expect(str).to.include('Press a button')
            return false
        })
        cy.get('#confirm-alert-text').should('have.text', 'You pressed Cancel!')
    })
})