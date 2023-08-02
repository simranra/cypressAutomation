describe("login", () => {


    it('login', () =>{
        cy.visit("https://www.tradeling.com/")
        cy.get("[data-test-id='tradeling-header-logo']").should('be.visible')
       // cy.xpath("//a").should('have.length', '200')
        cy.get("p[class='text-[12px]']").trigger('mouseover').click(); // this will find the account button
        cy.get(".flex a").eq(1).click({force:true}); // this will click the login button (use force true) to click hidden elements

        //verify the login page heading
        cy.get(".css-115khcb").should('contain','Log in to your account');

        //verify login page title
        cy.title().should('contain', 'Login')

        //login via email radio button
        cy.get("input#radio-1").check({force:true});
        cy.get("#emailAddress").type("testamazoncypress@gmail.com");
        cy.get("button[type='submit']").click();

        //check the password dialog box heading
        cy.get(".css-jpnb56").should('be.visible')

        //enter password
        cy.get("#password").type("Testamazon@1")

        cy.get("[data-testid='login-verification']").contains("LOG IN").click();

        // click on register link (registaer as a buyer)
        //cy.get(".chakra-stack a").click();
        //cy.get(".flex").eq(1).click()

        cy.get("p[class='ps-[5px] text-[12px]']").trigger('mouseover').click();
        cy.wait(1000);
        cy.get("div[class='rounded-[3px]']").click({multiple:true, force:true});
        cy.get('a').contains("Log out").click();
    })
      
    /*it('registration as a buyer', () =>{
        cy.visit("https://www.tradeling.com/")
        cy.get("p[class='text-[12px]']").trigger('mouseover').click(); // this will find the account button
        cy.get(".flex a").eq(3).click({force:true}); 
        // verify the title
        cy.get("h2.text-center").should('contain','Registration')

        //click on register via as a buyer
        cy.get(".flex").eq(0).click()

        //verify correct registertaion page is opened by checking the heading
        cy.get("h2[font='heading']").should('be.visible')

        // register by email
        cy.get("input#radio-1").check({force:true});
        cy.get("#emailAddress").type("");
        cy.get("button[type='submit']").click();

       
    })*/
        

})