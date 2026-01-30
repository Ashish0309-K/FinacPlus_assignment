class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameInput = '#userName';
    this.passwordInput = '#password';
    this.loginButton = '#login';
    this.loggedUserName = '#userName-value';
    this.logoutButton = '#submit';
  }

  async navigate() {
    await this.page.goto('https://demoqa.com/login', {
      waitUntil: 'domcontentloaded',
      timeout: 60000
    });

    await this.page.getByText('Book Store Application').click();
  }


  async login(username, password) {
    await this.page.fill(this.usernameInput, username);
    await this.page.fill(this.passwordInput, password);
    await this.page.click(this.loginButton);
  }

  async validateLogin(expectedUsername) {
  await this.page.waitForSelector(this.loggedUserName);

  const actualUsername = await this.page.textContent(this.loggedUserName);

  if (actualUsername.trim().toLowerCase() !== expectedUsername.toLowerCase()) {
    throw new Error(
      `Username validation failed. Expected: ${expectedUsername}, Found: ${actualUsername}`
    );
  }

  await this.page.waitForSelector(this.logoutButton);
}



  async logout() {
    await this.page.click(this.logoutButton);
  }
}

module.exports = { LoginPage };
