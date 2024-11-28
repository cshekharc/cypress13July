///<reference types="cypress"/>

describe('dropdown, radio buttons and checkboxes', () => {
    beforeEach(()=>{
        cy.visit("https://www.webdriveruniversity.com/")
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click()
    })
    it("dropdown",()=>{
        cy.get('#dropdowm-menu-2').select('JUnit')
        cy.get('#dropdowm-menu-2').should('have.value', 'junit')
        cy.get('#dropdowm-menu-2').select('maven')
        cy.get('#dropdowm-menu-2').should('include.text', 'Maven')
        cy.get('#dropdowm-menu-2').select(2)
        cy.get('#dropdowm-menu-2').should('have.value', 'testng')
    })

    it("check box",()=>{
        cy.get('[value="option-1"]').check()
        cy.get('[value="option-1"]').should('be.checked')
        cy.get('[value="option-3"]').should('be.checked')
        cy.get('[value="option-3"]').uncheck()
        cy.get('[value="option-3"]').should('be.not.checked')
    })

    it.only('radio button',()=>{
        cy.get('[value="yellow"]').check()
        cy.get('[value="yellow"]').should('be.checked')
        cy.get('[value="purple"]').should('not.be.checked')
    })
})