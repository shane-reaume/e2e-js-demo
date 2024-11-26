// tests/testcafe.test.js
import { Selector } from 'testcafe';
fixture `Validate Frameworks Article Title`
  .page `https://shaneofalltrades.com`;
test('Navigate and validate the article title', async t => {
  // Click the specified link by its text
  await t
    .click(Selector('a').withText('The Top 5 Open-Source End-to-End Testing Frameworks of 2024'))
    .expect(Selector('#post-top-5-web-testing-frameworks-2024 > div > header > h2').innerText)
    .eql('The Top 5 Open-Source End-to-End Testing Frameworks of 2024');
});