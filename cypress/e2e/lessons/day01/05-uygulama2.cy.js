describe('Uygulama 2', () => {
    it('amazon test', () => {
        cy.visit('https://www.amazon.com.tr');
        cy.get('#twotabsearchtextbox').type("iphone 15 pro max")
        cy.get('#nav-search-submit-button').click()
        cy.get('.a-color-state').should("contain","iphone 15 pro max")
    });
});