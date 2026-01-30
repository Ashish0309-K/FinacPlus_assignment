const fs = require('fs');

function writeBookDetails(details) {
  const content = `
Title: ${details.title}
Author: ${details.author}
Publisher: ${details.publisher}
  `;
  fs.writeFileSync('output/book-details.txt', content);
}

module.exports = { writeBookDetails };
