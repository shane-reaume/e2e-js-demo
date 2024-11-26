import puppeteer from 'puppeteer';
import { strict as assert } from 'assert';
// Launch the browser
const browser = await puppeteer.launch({ headless: false });
const page = await browser.newPage();
try {
  // Navigate to the website
  await page.goto('https://shaneofalltrades.com', { waitUntil: 'networkidle2' });
  // Click the specified link using the 'locator' API
  await page.locator('a[href="/2024/11/21/top-5-web-testing-frameworks-2024/"]').click();
  // Wait for navigation
  await page.waitForNavigation({ waitUntil: 'networkidle2' });
  // Wait for the header element to be visible
  const headerSelector = '#post-top-5-web-testing-frameworks-2024 > div > header > h2';
  await page.waitForSelector(headerSelector, { visible: true });
  // Get the header text using $eval(selector, pageFunction, args)
  const headerText = await page.$eval(headerSelector, el => el.textContent.trim());
  // Assert the header text
  assert.strictEqual(
    headerText,
    'The Top 5 Open-Source End-to-End Testing Frameworks of 2024'
  );
  console.log('Test Passed: Header text is correct.');
} catch (error) {
  console.error('Test Failed:', error);
} finally {
  // Close the browser
  await browser.close();
}
