var googleCommands = {
    submit: function() {
        this.api.pause(1000);
        return this.waitForElementVisible('@submitButton' , 1000)
            .click('@submitButton');
    }
};
module.exports = {
    url: 'http://localhost:8080',
    commands: [googleCommands],
    elements: {
        searchBar: {selector: 'input[type=text]'},
        submitButton: {selector: 'button[name=btnG]'}
    }
};