describe('Navigation', () => {
  describe('Authentication pages', () => {
    it('should navigate to the about page', () => {
      // Start from the index page
      cy.visit('/');

      // The index page should contain an h1
      cy.findByRole('heading', {
        name: 'Welcome to Web OAuth',
      });

      // Find a link containing "About" text and click it
      cy.findByRole('link', { name: 'Users' }).click();

      // The new url should include "/about"
      cy.url().should('include', '/users');

      // The new page should contain two "lorem ipsum" paragraphs
      cy.findAllByText('REQRES USERS LIST', { exact: true }).should('have.length', 1);
    });
  });
});
