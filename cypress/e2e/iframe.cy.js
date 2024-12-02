///<reference types="cypress"/>

describe("Iframe autoamtion",() =>{
    it('validate the popup message in iframe',() =>{
        cy.visit('https://www.webdriveruniversity.com/')
        cy.get('#iframe').invoke('removeAttr', 'target').click()

        cy.get('#frame').then((iframeInfo)=>{
            const iframeBody = iframeInfo.contents().find('body')
            cy.wrap(iframeBody).as('insideIframe')
            cy.wrap(iframeBody).find('[class="col-sm-8 col-lg-8 col-md-8"] .caption').eq(0).should('include.text', 'Lorem ipsum dolor sit amet')
            cy.get('@insideIframe').find('[data-target="#myModal"]').click()
            cy.get('@insideIframe')
                .find('.modal-body p')
                .should('include.text','Welcome to webdriveruniversity.com we sell a wide range of electrical goods')
            cy.get('@insideIframe').find('.btn.btn-default').contains('Find Out More').should('be.visible')
            cy.get('@insideIframe').find('.btn.btn-default').contains('Close').click()
            //cy.get('@insideIframe').find('[class="close"]').click()
        })
    })
})