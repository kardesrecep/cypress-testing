describe('automation test', () => {
    it('test2', () => {
        cy.visit('https://automationteststore.com/');
        cy.url().should("eq", "https://automationteststore.com/")
        cy.get('#customer_menu_top > li').click()
        cy.get('#loginFrm_loginname').type("techpro")
        cy.get('#loginFrm_password').type("techpro!")
        cy.get('#loginFrm > fieldset > .btn').click()
        cy.get('#customer_menu_top > :nth-child(1) > .top > .menu_text').should("contain","Welcome back UI Testing")
        
    });
});