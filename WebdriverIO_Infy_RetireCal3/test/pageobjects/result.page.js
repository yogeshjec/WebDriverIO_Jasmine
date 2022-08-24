

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ResultPage extends Page {
    /**
     * define selectors using getter methods
     */
    get resultTitle () {
        return $('#result-message');
    }

    get resultMessage () {
        return $('#calculator-results-container');
    }
}

module.exports = new ResultPage();
