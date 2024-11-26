// tests/nightwatch.test.js
module.exports = {
  'Validate Frameworks Article Title': function (browser) {
    browser
      .url('https://shaneofalltrades.com')
      .waitForElementVisible('body', 1000)
      // Click the specified link by its text
      .useXpath()
      .click("//a[text()='The Top 5 Open-Source End-to-End Testing Frameworks of 2024']")
      .useCss()
      // Wait for the header to be visible
      .waitForElementVisible('#post-top-5-web-testing-frameworks-2024 > div > header > h2', 1000)
      // Assert the header text
      .assert.containsText('#post-top-5-web-testing-frameworks-2024 > div > header > h2', 'The Top 5 Open-Source End-to-End Testing Frameworks of 2024')
      .end();
  }
};