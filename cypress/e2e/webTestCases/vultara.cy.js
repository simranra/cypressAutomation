describe("login", ()=>{
    it("login", ()=>{
        cy.visit("http://localhost:4200//login");
        cy.get("[name='username']").type("simran_admin1")
        cy.get("[name='password']").type("abcdef")
        cy.get("[name='userLoginBtn']").click();

        cy.get(".mdc-button__label").eq(0).click();
        cy.get(".mdc-list-item__primary-text").eq(3).click();
        cy.get(".mdc-list-item__content").eq(38).click();
        
        cy.wait(1000);
        cy.get("div[class='mat-mdc-dialog-actions mdc-dialog__actions'] button[class='mdc-button mdc-button--raised mat-mdc-raised-button mat-primary mat-mdc-button-base']").click({force:true});

        cy.get("button[aria-label='Modeling View'] > .mat-mdc-button-touch-target").click();

        const dataTransfer = new DataTransfer

        // cy.get('div.sideTools>a.item').eq(0)
        //     .trigger('dragstart', { dataTransfer, force: true });

        // cy.get('#modelViewContent>#drawingCanvas')
        //     .trigger('drop', { dataTransfer, force: true, clientX: 200, clientY: 200 });

        // cy.get('div.sideTools>a.item').eq(0)
        //     .trigger('dragend', { force: true, clientX: 200, clientY: 200 });

        //   cy.get('div.sideTools>a.item').eq(2)
        //     .trigger('dragstart', { dataTransfer, force: true });

        // cy.get('#modelViewContent>#drawingCanvas')
        //     .trigger('drop', { dataTransfer, force: true, clientX: 325, clientY: 200 });

        // cy.get('div.sideTools>a.item').eq(2)
        //     .trigger('dragend', { force: true, clientX: 325, clientY: 200 });

        // cy.get('#drawingCanvas>div.micro-container').should('be.visible');
        // cy.get('polyline').should('be.visible');
        // cy.wait(3000);

        //cy.get('circle.lineStartTerminal').click().mouseDown().mouseMove(-200, 0).get('#drawingCanvas>div.micro-container').mouseUp();


        //my code for drag and drop using trigger
        //cy.get("#microcontroller").trigger('dragstart', {dataTransfer, force:true});
        //cy.get("#drawingCanvas").trigger('drop', {dataTransfer, force:true, clientX:200, clientY:200});
        //cy.get("#microcontroller").trigger('dragend', {force:true, clientX:200, clientY:200});

        // my code using drag plugin

        cy.get("#microcontroller").drag("#svgViewBox");
    })
})