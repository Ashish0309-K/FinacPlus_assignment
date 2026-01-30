const { test, expect } = require('@playwright/test');
const user = require('../test-data/user.json');
const validators = require('../test-data/validators.json');
const { LoginPage } = require('../pages/LoginPage');
const { BookStorePage } = require('../pages/BookStorePage');
const { writeBookDetails } = require('../utils/fileWriter');

test('Book Store UI Automation - Assignment Ready', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const bookStore = new BookStorePage(page);

  await loginPage.navigate();
  await loginPage.login(user.username, user.password);
  await loginPage.validateLogin(user.username);
  console.log('Login successful');

  
  await bookStore.goToBookStore();
  for (const book of validators.search.books) {
    await bookStore.searchBook(book);

    // Validate that search result contains the book
    const resultText = await bookStore.getSearchResultText();
    expect(resultText).toContain(book);
    console.log(`Search validated for book: ${book}`);
  }

  await bookStore.searchBook(validators.search.books[0]);
  const details = await bookStore.getBookDetails();
  writeBookDetails(details);
  console.log(`Book details written for: ${validators.search.books[0]}`);

  // Screenshot before logout
  await page.screenshot({ path: 'pw-output/logout-screenshot.png', fullPage: true });

  // Logout using text from validators.json
  const logoutButtonText = validators.buttons.logoutText;
  const logoutButton = page.getByText(logoutButtonText);

  await logoutButton.click();

  // Validate logout by checking login button exists
  await expect(page.locator('#login')).toBeVisible({ timeout: 10000 });
  console.log('Logout successful');
});
