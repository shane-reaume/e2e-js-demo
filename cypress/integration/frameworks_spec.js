// cypress/integration/frameworks_spec.js
describe('Validate Frameworks Article Title', () => {
  it('should navigate and validate the article title', () => {
    // Visit the website
    cy.visit('https://shaneofalltrades.com');
    // Click the specified link by its text
    cy.contains('a', 'The Top 5 Open-Source End-to-End Testing Frameworks of 2024').click();
    // URL should include the link's href
    cy.url().should('include', '/2024/11/21/top-5-web-testing-frameworks-2024/');
    // Validate the header text
    cy.get('#post-top-5-web-testing-frameworks-2024 > div > header > h2')
      .should('have.text', 'The Top 5 Open-Source End-to-End Testing Frameworks of 2024');
  });
});