class BookStorePage {
  constructor(page) {
    this.page = page;
    this.searchInput = '#searchBox';
    this.searchResult = '.rt-tbody'; // Table body that shows search results
    this.firstBookRow = '.rt-tr-group:first-child'; // For getting first book details
  }

  async goToBookStore() {
    await this.page.goto('https://demoqa.com/books', {
      waitUntil: 'domcontentloaded',
      timeout: 60000
    });
  }

  async searchBook(bookName) {
    await this.page.fill(this.searchInput, bookName);
    await this.page.waitForTimeout(1000);
  }

  async getSearchResultText() {
    const text = await this.page.locator(this.searchResult).textContent();
    return text.trim();
  }

  async validateSearchResult(expectedBook) {
    const text = await this.getSearchResultText();
    if (!text.includes(expectedBook)) {
      throw new Error(`Search validation failed. Expected: ${expectedBook}, Found: ${text}`);
    }
  }

  async getBookDetails() {
    const firstRow = this.page.locator(this.firstBookRow);
    const title = await firstRow.locator('.rt-td:nth-child(2)').textContent();
    const author = await firstRow.locator('.rt-td:nth-child(3)').textContent();
    const publisher = await firstRow.locator('.rt-td:nth-child(4)').textContent();

    return {
      title: title.trim(),
      author: author.trim(),
      publisher: publisher.trim()
    };
  }
}

module.exports = { BookStorePage };
