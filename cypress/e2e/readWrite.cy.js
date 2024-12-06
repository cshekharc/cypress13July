///<reference types="cypress"/>

describe("read and write file",()=>{
    it('write a file',()=>{
        cy.writeFile('./cypress/fixtures/testJson.json',
            {
                firstName : "John",
                lastName : "Doe"
            }
        )

        cy.writeFile('./cypress/fixtures/testDt.txt', 'This is test file by using writeFile method')
    })

    it.only('read the file',()=>{
        cy.readFile('./cypress/fixtures/testDt.txt').should('contains', 'This is test file')

        cy.readFile('./cypress/fixtures/testJson.json').should('have.property', 'firstName')
    })
})