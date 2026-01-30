const { test } = require('@playwright/test');
const user = require('../test-data/user.json');
const { LoginPage } = require('../pages/LoginPage');
const { BookStorePage } = require('../pages/BookStorePage');
const { writeBookDetails } = require('../utils/fileWriter');

test('Book Store UI Automation', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const bookStore = new BookStorePage(page);

  await loginPage.navigate();
  await loginPage.login(user.username, user.password);
  await loginPage.validateLogin(user.username);

  await bookStore.goToBookStore();
  await bookStore.searchBook('Learning JavaScript Design Patterns');
  await bookStore.validateSearchResult();

  const details = await bookStore.getBookDetails();
  writeBookDetails(details);

  await loginPage.logout();
});
