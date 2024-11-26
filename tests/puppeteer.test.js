// tests/puppeteer.test.js
const puppeteer = require('puppeteer');
const assert = require('assert');
(async () => {
  // Launch the browser
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  try {
    // Navigate to the website
    await page.goto('https://shaneofalltrades.com', { waitUntil: 'networkidle2' });
    // Click the specified link by its text
    await page.click('a[href="/2024/11/21/top-5-web-testing-frameworks-2024/"]');
    // Wait for navigation
    await page.waitForNavigation({ waitUntil: 'networkidle2' });
    // Select the header element
    const headerSelector = '#post-top-5-web-testing-frameworks-2024 > div > header > h2';
    await page.waitForSelector(headerSelector);
    // Get the header text
    const headerText = await page.$eval(headerSelector, el => el.textContent.trim());
    // Assert the header text
    assert.strictEqual(headerText, 'The Top 5 Open-Source End-to-End Testing Frameworks of 2024');
    console.log('Test Passed: Header text is correct.');
  } catch (error) {
    console.error('Test Failed:', error);
  } finally {
    // Close the browser
    await browser.close();
  }
})();