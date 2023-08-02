describe('modeling view', ()=>{
    it('model', ()=>{
        cy.visit("http://localhost:4200//login");
        cy.viewport(1680, 1050)
        cy.get("[name='username']").type("simran_admin1")
        cy.get("[name='password']").type("abcdef")
        cy.get("[name='userLoginBtn']").click();
        cy.get("span.mdc-button__label").contains("Project").click();
        cy.wait(2000)
        cy.get(".mdc-list-item__primary-text").eq(3).click();
        cy.get(".mdc-list-item__content").eq(24).click();

        cy.get("div[class='mat-mdc-dialog-actions mdc-dialog__actions'] button[class='mdc-button mdc-button--raised mat-mdc-raised-button mat-primary mat-mdc-button-base']").click({force:true});

        cy.get("button[aria-label='Modeling View'] > .mat-mdc-button-touch-target").click();
        cy.get("#HMlVOEoKMM").rightclick();
        //cy.get(".mat-mdc-text-field-wrapper").eq(3).click();
        cy.get(".mat-mdc-form-field-infix > .mat-mdc-select").click();
        //cy.xpath("(//mat-option[@id='mat-option-679'])[1]").click();
       cy.get(".mat-mdc-option > .mdc-list-item__primary-text").contains(" ADAS Domain Controller").click();
       
        
    })
})

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
        //cy.get(".mat-mdc-list > .featureItemClass > .feature-name").contains("simran_feature").get(".mdc-button").click({multiple:true});
        cy.get(".mdc-button__label").contains("Create New Feature").click();  
        cy.get(".mat-mdc-form-field-infix > .mat-mdc-input-element").type("Feature-simi", {force:true});
        cy.get(".mat-mdc-form-field-infix > .mat-mdc-select").click();
        cy.contains('mat-option', 'Logging').click()
        cy.get("..mdc-button__label").click();