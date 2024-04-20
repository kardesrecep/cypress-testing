describe('testing kitapyurdu', () => {
    it('main command', () => {
        cy.visit('https://www.kitapyurdu.com/');
        cy.contains("Yazarlar").click(); 
        cy.url().should("contain","yazarlar");

    });
});