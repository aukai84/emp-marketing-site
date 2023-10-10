describe('sample render test', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('displays the home nav link', () => {
    cy.get('a').contains('Home');
  });
});
