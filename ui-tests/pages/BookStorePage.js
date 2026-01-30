class BookStorePage {
  constructor(page) {
    this.page = page;
    this.searchBox = '#searchBox';
    this.bookTitle = 'text=Learning JavaScript Design Patterns';
    this.titleCell = '(//div[@class="rt-tr-group"])[1]//a';
    this.authorCell = '(//div[@class="rt-tr-group"])[1]//div[3]';
    this.publisherCell = '(//div[@class="rt-tr-group"])[1]//div[4]';
  }

  async goToBookStore() {
    await this.page.getByRole('button', { name: 'Book Store' }).click();
  }

  async searchBook(bookName) {
    await this.page.fill(this.searchBox, bookName);
  }

  async validateSearchResult() {
    await this.page.waitForSelector(this.bookTitle);
  }

  async getBookDetails() {
    return {
      title: await this.page.textContent(this.titleCell),
      author: await this.page.textContent(this.authorCell),
      publisher: await this.page.textContent(this.publisherCell)
    };
  }
}

module.exports = { BookStorePage };
