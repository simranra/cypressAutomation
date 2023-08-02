describe("Login", ()=>{
    it("Login", ()=>{
        cy.visit("http://localhost:3000/signin")
        cy.viewport(1680,1050)
        // Sign-up
        cy.get("a").contains("Don't have an account? Sign Up").click();
        cy.get("#firstName").type("test-dummy")
        cy.get("#lastName").type("user")
        cy.get("#username").type("test-dummy")
        cy.get("#password").type("09876")
        cy.get("#confirmPassword").type("09876")
        cy.get(".MuiButtonBase-root > .MuiButton-label").click(); 
        cy.wait(2000)

        //Login
        cy.get("#username").type("test-dummy") //Simi123456
        cy.get("#password").type("09876") //123456
        cy.get(".MuiIconButton-label").click();
        cy.get(".MuiButton-label").click()
        cy.wait(2000)

        //Onboarding
        cy.get(".MuiButtonBase-root > .MuiButton-label").contains("Next").click();
        cy.get("#bankaccount-bankName-input").type("HDFC LTD");
        cy.get("#bankaccount-routingNumber-input").type("123456789")
        cy.get("#bankaccount-accountNumber-input").type("009877654326")
        cy.get(".MuiButtonBase-root > .MuiButton-label").contains("Save").click();
        cy.get(".MuiButtonBase-root > .MuiButton-label").contains("Done").click();
        cy.wait(2000)

        //Account details
        cy.get(".MuiButtonBase-root > .MuiListItemText-root").contains("My Account").click();
        cy.get("#user-settings-email-input").clear().type("testamazoncypress@gmail.com");
        cy.get("#user-settings-phoneNumber-input").clear().type(1234567890);
        cy.get(".MuiButtonBase-root > .MuiButton-label").contains("Save").click();
        cy.wait(2000)

        //Bank accounts
        cy.get(".MuiButtonBase-root > .MuiListItemText-root").contains("Bank Accounts").click();
        cy.get(".MuiButtonBase-root > .MuiButton-label").contains("Create").click();
        cy.get("#bankaccount-bankName-input").type("Axis LTD");
        cy.get("#bankaccount-routingNumber-input").type("987654321")
        cy.get("#bankaccount-accountNumber-input").type("009877654326")
        cy.get(".MuiButtonBase-root > .MuiButton-label").contains("Save").click();

        cy.get(".MuiButtonBase-root > .MuiButton-label").contains("Create").click();
        cy.get("#bankaccount-bankName-input").type("SBI LTD");
        cy.get("#bankaccount-routingNumber-input").type("987654321")
        cy.get("#bankaccount-accountNumber-input").type("009877654326")
        cy.get(".MuiButtonBase-root > .MuiButton-label").contains("Save").click();
        cy.wait(2000)

        //delete
        cy.get(".MuiListItem-root > .MuiGrid-root").eq(2).contains("Delete").click(); 

       
        //Crete transaction
        cy.get(".MuiButtonBase-root > .MuiListItemText-root").contains("Home").click();
        cy.get(".MuiButtonBase-root > .MuiButton-label").click();
        cy.get("#user-list-search-input").type("Simi123456" ,{force:true});
        cy.get(".MuiGrid-root > .MuiGrid-root").contains("Simi123456").click({force:true});
        cy.get("#amount").type("1000");
        cy.get("#transaction-create-description-input").type("Pay");
        cy.get(".MuiButtonBase-root > .MuiButton-label").contains("Pay").click();
        cy.get(".MuiGrid-root > .MuiTypography-root").contains("Paid")
        cy.wait(2000)

        cy.get(".MuiButtonBase-root > .MuiButton-label").contains("Create Another Transaction").click();
        cy.get("#user-list-search-input").type("Simi123456" ,{force:true});
        cy.get(".MuiGrid-root > .MuiGrid-root").contains("Simi123456").click({force:true});
        cy.get("#amount").type("1000");
        cy.get("#transaction-create-description-input").type("Request");
        cy.get(".MuiButtonBase-root > .MuiButton-label").contains("Request").click();
        cy.get(".MuiGrid-root > .MuiTypography-root").contains("Requested")

        cy.get(".MuiButtonBase-root > .MuiListItemText-root").contains("Logout").click();

        //Verify the payment
        cy.get("#username").type("Simi123456") //Simi123456
        cy.get("#password").type("123456") //123456
        cy.get(".MuiIconButton-label").click();
        cy.get(".MuiButton-label").click()

        cy.wait(2000
            )
        cy.get(".MuiTab-wrapper").contains("Mine").click();
        cy.get(".MuiTypography-root").contains("user").click();
        cy.get(".MuiButton-label").contains("Accept Request").click();
        cy.get("input[name='content']").type("appreciated");
        cy.get("a[role='button'] > .MuiIconButton-label").click();
        cy.get(".MuiButton-label").contains("Dismiss").click({force:true});
        cy.get(2000)

        //User settings
        cy.get(".MuiButtonBase-root > .MuiListItemText-root").contains("My Account").click();
        cy.get("#user-settings-firstName-input").clear().type("Dummy")
        cy.get(".MuiButtonBase-root > .MuiButton-label").contains("Save").click();

        //logout
        cy.get(".MuiButtonBase-root > .MuiListItemText-root").contains("Logout").click();


    })
})