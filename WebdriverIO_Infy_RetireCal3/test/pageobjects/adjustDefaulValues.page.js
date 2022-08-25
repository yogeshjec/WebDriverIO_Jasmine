

const Page = require('./page');
const CONSTANT_ADJUSTD = require('../util/constant.data');
const ElementUtil = require('../util/elementUtil')


/**
 * sub page containing specific selectors and methods for a specific page
 */
class AdjustDefaultValuesPage extends Page {
    /**
     * define selectors using getter methods
     */

    get inputYearsDependentOn () {
        return $('input[data-inputmask-alias="retirementDuration"]');
    }

    // link 
    get linkAdjustDefaultValues () {
        return $('a[data-target="#default-values-modal"]');
    }

    //btn
    get btnSavePersonalizedValues() {
        return $('button[onclick="savePersonalizedValues();"]');
    }
   
    /**
     * a method to encapsule automation code to interact with the page
     */
    async fillDataOnAdjustDefaulValuesPage ( ) {
        ElementUtil.myLogger('On Adjust Default Values Page :');  
        await this.inputYearsDependentOn.setValue(CONSTANT_ADJUSTD.ADJUST_DEFAULT_PAGE_YR_DEP);    
        await this.btnSavePersonalizedValues.click();
        await this.waitForExists(3); 
    }

    async doClickPageLink ( ) {
        ElementUtil.myLogger('On Adjust Default Values Page :');  
        await this.linkAdjustDefaultValues.click();
        await this.waitForExists(3); 
        //await new Promise(r => setTimeout(r, 4000));
    }

    async waitForExists (sec){
        await new Promise(r => setTimeout(r, 1000 * sec));
    }
}
module.exports = new AdjustDefaultValuesPage();
