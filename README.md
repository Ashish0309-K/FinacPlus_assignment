## FinacPlus Automation Assignment

UI and API automation framework built using Playwright.

## Tech Stack
- Playwright
- JavaScript (Node.js)
- Playwright Test Runner

## Test Coverage
### UI Tests
- Login validation
- Book Store page automation
- Screenshot capture

### API Tests
- Create User (POST)
- Get User (GET)
- Update User (PUT)

## Note on API Response
- API tests use **https://reqres.in**, a public mock API.  
- At times it may return **403 (Forbidden)** due to rate limits or restrictions.

## Run UI tests
npx playwright test ui-tests/tests/bookstore.spec.js

## Run API tests
npx playwright test api-tests/userApi.spec.js

## View Report
npx playwright show-report
Scrrenshorts are added in playright report and zip file also
