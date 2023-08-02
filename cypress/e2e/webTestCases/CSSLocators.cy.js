describe('locators', () => {

    it("csslocators", () => {
        cy.visit("https://www.amazon.ae/")
        cy.get("#twotabsearchtextbox").type("iphone")
        cy.xpath("//input[@id='nav-search-submit-button']").click()
        //cy.get("[type='submit']").click()
        cy.get(".a-size-medium-plus").contains("Results") //assertions
    })
})