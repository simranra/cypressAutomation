describe('Test the redux app', ()=>{

    it('end to end testing', ()=>{

        cy.visit('https://react-redux.realworld.io/');
        cy.get('.nav > li:nth-child(3)').click();
        // if u have a link which has a text but its difficult to find its root so 
        //that u can click it then use the below method:
        //cy.get('a').contains('sign up').click();

        cy.get("input[placeholder='Username']").type(user());
        cy.get("input[placeholder='Email']").type(user()+ '@gmail.com');
        cy.get("input[placeholder='Password']").type(user()+ '73837')

        cy.get('.btn').contains('Sign in').click();
        //cy.get('a').contains('Home');
    })

    function user(){
        var text="";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        for(var i=0;i<5;i++)
            text= text + possible.charAt(Math.floor(Math.random() * possible.length));

            return text;
        
    }
})