describe('uygulama test', () => {
    it('test asamalari', () => {
        cy.visit('https://www.kitapyurdu.com/');
        cy.get('.register > a').click();
        cy.get('#register-name').type("john").should("have.value","john");	


        

    });
});