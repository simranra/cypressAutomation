describe("find total no of iphobes", () => {

    let length 
    it("search iphones when length is unknown", () =>{
        cy.visit("https://www.tradeling.com/")
        cy.get("[placeholder='Search for Products']").type("iphone 14")
        //cy.get("button[type='submit']").click() // this did not work because there were many elements with same attribute, so be specific. for that use relative xpaths
        //cy.xpath("//div[@class='flex']//button[@type='submit']").click() // this did not work because use proper divs 
   cy.xpath("//div[contains(@data-test-id,'header-search-button')]//div[contains(@class,'flex')]").click()
 

// find length when you don't know the atual no. 
        cy.get("dl.chakra-stack")
        .find('>dd:contains("United Arab Emirates")')
        .then(($value) => {
            length = $value.length


            // length is known
            cy.get("dl.chakra-stack")
            .find('>dd:contains("United Arab Emirates")')
            .should("have.length", 40)

        })

    })
    it("Printing length", () => {
        cy.log("*** length obtained is *** " + length)

    })
    
})