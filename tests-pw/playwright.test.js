// tests/playwright.test.js
const { test, expect } = require('@playwright/test');
test('Validate framework article title', async ({ page }) => {
  // Navigate to the website
  await page.goto('https://shaneofalltrades.com');
  // Click the specified link
  await page.click('text=The Top 5 Open-Source End-to-End Testing Frameworks of 2024');
  // Wait for navigation
  await page.waitForLoadState('networkidle');
  // Select the header element
  const header = await page.locator('#post-top-5-web-testing-frameworks-2024 > div > header > h2');
  // Assert the header contains the expected text
  await expect(header).toHaveText('The Top 5 Open-Source End-to-End Testing Frameworks of 2024');
});