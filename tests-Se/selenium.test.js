// tests/selenium.test.js
const { Builder, By, until } = require('selenium-webdriver');
const assert = require('assert');
(async function validateArticleTitle() {
  // Initialize the WebDriver (using Chrome in this example)
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    // Navigate to the website
    await driver.get('https://shaneofalltrades.com');
    // Locate the link by its text and click it
    const link = await driver.findElement(By.linkText('The Top 5 Open-Source End-to-End Testing Frameworks of 2024'));
    await link.click();
    // Wait until the header is located
    const headerLocator = By.css('#post-top-5-web-testing-frameworks-2024 > div > header > h2');
    await driver.wait(until.elementLocated(headerLocator), 10000);
    // Get the header text
    const header = await driver.findElement(headerLocator).getText();
    // Assert the header text
    assert.strictEqual(header, 'The Top 5 Open-Source End-to-End Testing Frameworks of 2024');
    console.log('Test Passed: Header text is correct.');
  } catch (error) {
    console.error('Test Failed:', error);
  } finally {
    // Quit the driver
    await driver.quit();
  }
})();