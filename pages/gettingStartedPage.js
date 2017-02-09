module.exports =  {
    url: function () {
        return this.api.launchUrl + 'getingstarted';
    },
    sections: {
        menu: {
            selector: '.nav.navbar-nav.navbar-right',
            elements: {
                home: {
                    selector: 'a[href="/"]'
                },
                gettingStart: {
                    selector: 'a[href="/getingstarted"]'
                }
            }
        }
    },
    elements: {
        nightWatch: {
            selector: '#overview-of-webdriver'
        }
    }
};