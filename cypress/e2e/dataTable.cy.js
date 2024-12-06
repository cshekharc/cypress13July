///<reference types="cypress"/>
describe("data table handling", function(){
    it("validating age of particular user", function(){
        cy.visit('https://www.webdriveruniversity.com/')
        cy.get('#data-table').invoke('removeAttr', 'target').click()

        cy.get('#thumbnail-1 tr').each((userDetails) => {
            // cy.log(userDetails)
            // cy.get('#thumbnail-1 tr td:nth-child(1)').then((firstName)=>{ fitsrName.text()})
            const firstName = userDetails.find('td:nth-child(1)').text()
            const lastName = userDetails.find('td:nth-child(2)').text()

            if(firstName === 'Jason' && lastName === 'Jones'){
                const age = userDetails.find('td:nth-child(3)').text()
                expect(age).to.equal('27')
                // break
            }else{
                cy.log('something went wrong')
            }
        })
    })
})