describe("login via mouse over", () => {

    it("mouse over", () =>{

        cy.visit("https://www.amazon.com/")
        cy.get("#nav-logo").should("be.visible")
        cy.get("#nav-tools a").eq(1).trigger('mouseover')
        //cy.get("#nav-link-accountList").trigger("mouseover")
        cy.get('.nav-action-inner').contains("Sign in").click({multiple:true});
        
        cy.get("#ap_email").type("testamazoncypress@gmail.com")
        cy.get("#continue").click();
        cy.get("#ap_password").type("Testanazom@1");
        cy.get("#signInSubmit").click();

        // for testing purpose im using the receive-smss.com to get the otp but in org we will have paid services
    })
})