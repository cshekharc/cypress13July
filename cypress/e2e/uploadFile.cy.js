///<reference types="cypress"/>

describe("Alert handling", function () {
    it("uploading a file",function () {
        cy.visit("https://www.webdriveruniversity.com/")
        cy.get('#file-upload').invoke('removeAttr', 'target').click()

        cy.get('[name="filename"]').selectFile('cypress/fixtures/testFile.txt')

        cy.get('[type="submit"]').click()

        cy.on('window:alert', (str)=>{
            expect(str).to.include('Your file has now been uploaded!')
        })
    })
})