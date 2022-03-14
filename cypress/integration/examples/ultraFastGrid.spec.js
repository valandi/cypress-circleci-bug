describe("AppTest", () => {

    it(`circleCiTest`, function () {
        // Navigate to the url we want to test
        // ⭐️ Note to see visual bugs, run the test using the above URL for the 1st run.
        // but then change the above URL to https://demo.applitools.com/index_v2.html
        // (for the 2nd run)
        cy.visit('https://demo.applitools.com');

        // Call Open on eyes to initialize a test session
        cy.eyesOpen({
            appName: 'circleci App - Cypress',
            testName: 'circleci Test - Cypress',
        })


        cy.get('#log-in').click()

        // Check the app page
        cy.eyesCheckWindow({
            tag: "App Window",
            target: 'window',
            fully: true
        });

        // Call Close on eyes to let the server know it should display the results
        cy.eyesClose()
    });

});
