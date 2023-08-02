describe('dummy', ()=>{
    it('dummy', ()=>{
        cy.visit("http://localhost:4200//login");
        cy.viewport(1680, 1050)
        cy.get("[name='username']").type("simran_admin1")
        cy.get("[name='password']").type("abcdef")
        cy.get("[name='userLoginBtn']").click();
        cy.get(".mdc-button__label").contains("Settings").click();
        cy.get(".mdc-list-item__primary-text").eq(2).click();
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

    })
})