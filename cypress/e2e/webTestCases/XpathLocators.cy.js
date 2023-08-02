describe('xpath locators' ,() => {

it('find no of products' , () => {

    cy.visit("https://www.amazon.ae/")
    cy.get("#twotabsearchtextbox").type("iphone 14 pro max")
    cy.get("[type='submit']").click()
    
})
})