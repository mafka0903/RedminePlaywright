### RedminePlaywright

### Summary

RedminePlaywright is a project for automated testing of the https://www.redmine.org/ website, created using the Playwright framework for testing web applications.

### Requirements

Node.js
npm
Playwright
Git

### Steps to install

1.  Clone the repository:

        git clone https://github.com/mafka0903/RedminePlaywright.git

2.  Navigate to the project folder:

        cd RedminePlaywright

3.  Install dependencies:

        npm install

### Steps to launch

1.  Run all tests:

        npx playwright test

2.  Run tests in headed mode:

        npx playwright test --headed

### Generating Report

After running tests, generate an HTML report:

npx playwright show-report

Report will open in browser, displaying test results.
