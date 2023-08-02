describe('Make appointment', ()=>{
    it('Visit the url', ()=>{

        cy.visit("https://katalon-demo-cura.herokuapp.com/");
        // when running from jenkins we provide the url from command line so here we 
        // need to specify the baseurl and on the terminal u need to write this command
        // cypress run --env baseurl="https://katalon-demo-cura.herokuapp.com/" --spec cura.cy.js --browser=chrome
        //cy.visit(Cypress.env('baseurl'))
        cy.get('#btn-make-appointment').click();
        cy.get('h2').contains('Login').should('be.visible');
        cy.get('#txt-username').type('John Doe');
        cy.get('#txt-password').type('ThisIsNotAPassword');
        cy.get('#btn-login').click();

        cy.get('#combo_facility').select('Hongkong CURA Healthcare Center');
        cy.get('#chk_hospotal_readmission').check();
        cy.get('#radio_program_medicaid').check();
        cy.get('#txt_visit_date').type('07/07/2023');
        cy.get('#txt_comment').click({force:true});
        cy.get('#txt_comment').type('This is a dummy appointment')
        cy.get('#btn-book-appointment').click();

        cy.get('h2').contains('Appointment Confirmation');
        cy.get('#comment').contains('This is a dummy appointment');
        cy.get('#menu-toggle').click();
        cy.get('#sidebar-wrapper > .sidebar-nav > li:nth-child(6)').click();

    })
})