///<reference types="cypress"/>

describe('autosuggetions', () => {
    it('select a food item from the list', () => {
        cy.visit("https://www.webdriveruniversity.com/")
        cy.get('#autocomplete-textfield').invoke('removeAttr', 'target').click()
        cy.get('input#myInput').type('a')
        cy.get('#myInputautocomplete-list > div').each((foodItem)=>{
            let itemText = foodItem.text()
            if(itemText === 'Avacado'){
                cy.wrap(foodItem).click()
                cy.get('#submit-button').click()
                cy.url().should('include', 'Avacado')
            }
        })
    })
})