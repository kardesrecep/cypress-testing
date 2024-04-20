describe('temel test func', () => {
    it('visit,get,click,type,should kullanimi', () => {
        cy.visit('https://www.amazon.com.tr'); //given
        cy.get('#twotabsearchtextbox').type("tv") //when
        cy.get('#nav-search-submit-button').click() //when
        cy.url().should("contain","tv") //then

    });
});