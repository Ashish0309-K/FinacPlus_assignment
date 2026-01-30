const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  reporter: [['html', { open: 'never' }]],
  outputDir: 'pw-output',
  preserveOutput: 'always',
  timeout: 60000,
  use: {
    headless: false,
    browserName: 'chromium',
    baseURL: 'https://demoqa.com',
    screenshot: 'on',
    video: 'retain-on-failure'
  }
});
