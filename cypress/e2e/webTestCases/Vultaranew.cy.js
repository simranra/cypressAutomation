describe("create new module", ()=>{
    
    it("module", ()=>{
        cy.visit("http://localhost:4200//login");
        cy.viewport(1680, 1050)
        cy.get("[name='username']").type("simran_admin1")
        cy.get("[name='password']").type("abcdef")
        cy.get("[name='userLoginBtn']").click();

        //cy.get("span.mdc-button__label").contains("Project").click();
        //cy.wait(2000)
        //cy.get(".mdc-list-item__primary-text").eq(3).click();
        //cy.get(".mdc-list-item__content").eq(33).click();

        //cy.get("div[class='mat-mdc-dialog-actions mdc-dialog__actions'] button[class='mdc-button mdc-button--raised mat-mdc-raised-button mat-primary mat-mdc-button-base']").click({force:true});

        cy.get(".mdc-button__label").contains("Settings").click();
        //cy.get("button[aria-label='Modeling View'] > .mat-mdc-button-touch-target").click();
        cy.get(".mdc-list-item__primary-text").eq(2).click();

        //cy.get("button[class='mat-mdc-menu-trigger mdc-button mdc-button--raised mat-mdc-raised-button mat-unthemed mat-mdc-button-base']").click();

        //cy.get("span[class='mdc-list-item__primary-text']").contains(" Edit Module Category ").click();

        cy.get(".mdc-button__label").contains("Create New Module").click();
    
    
        //cy.get(".mat-mdc-form-field-infix > .mat-mdc-select").click().type('{enter}');
        cy.get('mat-select[role=combobox]').eq(40).click();
        cy.get(".mat-mdc-option > .mdc-list-item__primary-text").contains("TEST").click();
        
      //cy.get(".formfields > .mat-mdc-form-field > .mat-mdc-text-field-wrapper > .mat-mdc-form-field-flex > .mat-mdc-form-field-infix").eq(1).click().type("simi")
  //or this below line to get module name and type simi

        cy.get(".mat-mdc-form-field-infix > .mat-mdc-input-element:first-child").click().type("simi")
        cy.get("span[class='mdc-button__label']").contains("Confirm").click();

        cy.get(".mdc-tab__text-label").contains("Asset Library").click();
        cy.get(".mdc-button__label").contains("Create New Asset").click();
        cy.get(".formfields > .mat-mdc-form-field > .mat-mdc-text-field-wrapper > .mat-mdc-form-field-flex > .mat-mdc-form-field-infix > .mat-mdc-input-element").clear().type("Asset-simi", {force:true})
        cy.get(".formfields > .mat-mdc-form-field > .mat-mdc-text-field-wrapper > .mat-mdc-form-field-flex > .mat-mdc-form-field-infix > .mat-mdc-select").eq(0).click();
        cy.get(".mat-mdc-option").contains("Data At Rest").click();
        cy.get(".formfields > .mat-mdc-form-field > .mat-mdc-text-field-wrapper > .mat-mdc-form-field-flex > .mat-mdc-form-field-infix > .mat-mdc-select").eq(1).click({force:true});
        cy.get(".mat-mdc-option").contains("Code").click();
        cy.get(".mdc-button__label").contains("Confirm").click();
        cy.intercept('POST', 'http://localhost:4201/api/assets/assetlib').as('createAssetAPI');

        cy.intercept('GET', 'http://localhost:4201/api/assets/assetlib?searchTerm=&global=1&limit=20').as('getAssetAPI');

        let createMod = {};
        cy.wait('@createAssetAPI').then(({ response }) => {
            expect(response.statusCode).to.eq(200);
            createMod = response.body;
        })

        cy.wait('@getAssetAPI').then(({ response }) => {
            expect(response.statusCode).to.eq(200);
            let getMod = response.body;

        })

       cy.get(".mdc-tab__text-label").contains("Feature Library").click();
        cy.get(".mdc-button__label").contains("Create New Feature").click();
        cy.get(".mat-mdc-form-field-infix > .mat-mdc-select").click();
        cy.get(".mat-mdc-form-field-infix > .mat-mdc-input-element").type("Feature-simi", {force: true});
        cy.contains('mat-option', 'Logging').click()
        cy.get(".mdc-button__label").contains("Show More Assets").click();

        cy.get(".mat-mdc-form-field-infix > .mat-mdc-input-element").eq(1).type("simi", {force:true})
        cy.get("span[class='mdc-evolution-chip__text-label mat-mdc-chip-action-label']").should('include', "Asset-simi").click();

        cy.get(".mdc-button__label").contains("Add to Feature").click();
        cy.get(".mdc-button__label").contains("Add Application").click();
        cy.get(".mat-mdc-form-field-infix > .mat-mdc-select").eq(1).click();


    })
})


  
