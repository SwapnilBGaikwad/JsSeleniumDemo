module.exports = {
    before: function (browser) {

    },
    after: function (browser) {
        browser.end();
    },
    // 'Demo test Google' : function (browser) {
    //     browser
    //         .url('http://www.google.com')
    //         .waitForElementVisible('body', 1000)
    //         .setValue('input[type=text]', 'nightwatch')
    //         .waitForElementVisible('button[name=btnG]', 1000)
    //         .click('button[name=btnG]')
    //         .pause(1000)
    //         .assert.containsText('#main', 'Night Watch')
    //         .end();
    // },
    // 'new test': function (browser) {
    //     let page = browser.page.homePage();
    //     page
    //         .navigate()
    //         .waitForElementVisible('@gettingStarted', 1000)
    //         .click('@gettingStarted');
    // },
    // 'check question test': function (browser) {
    //     let page = browser.page.gettingStartedPage();
    //         page.navigate()
    //             .waitForElementVisible('@nightWatch' , 1000)
    //             .expect.element('@nightWatch')
    //             .text
    //             .which.contains("Overview of WebDriver");
    // },
    // 'Menu Section test': function (browser) {
    //     let startPage = browser.page.gettingStartedPage();
    //     startPage.navigate();
    //
    //     startPage.expect.section('@menu')
    //         .to.be.visible;
    //
    //     let menuSection = startPage.section.menu;
    //
    //     menuSection.expect
    //         .element('@home')
    //         .to.be.visible;
    //
    //     menuSection.expect
    //         .element('@gettingStart')
    //         .to.be.visible;
    //
    //     menuSection.click('@home');
    // }

    'test google': function (browser) {
        let google = browser.page.googlePage();
        google.navigate();
        google.setValue('@searchBar' , 'night watch')
            .submit();
    }
};