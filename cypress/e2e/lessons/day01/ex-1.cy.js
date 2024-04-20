describe('ex-1', () => {
    it('test01 enter value contact us', () => {
        cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html');
        cy.url().should('include', 'https://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.title().should('eq','WebDriver | Contact Us')
        cy.get('input[name="first_name"]').type("john")
        cy.get('input[name="last_name"]').type("Doe")
        cy.get('input[name="email"]').type("a@a.com")
        cy.get('textarea[name="message"]').type("test comment")
        cy.get('input[class="contact_button"][type="submit"]').click()
        cy.get('h1').should('have.text','Thank You for your Message!')
       
        
    });
});