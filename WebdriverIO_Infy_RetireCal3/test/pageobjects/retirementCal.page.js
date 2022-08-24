

const Page = require('./page');

const CONSTANT_RET = require('../util/constant.data')
const ElementUtil = require('../util/elementUtil')

/**
 * sub page containing specific selectors and methods for a specific page
 */
class RetirementPage extends Page {
    /**
     * define selectors using getter methods
     */


     get inputRCurrentAge () {
        return $('#current-age'); //id
    }

    get inputRAgeToRetire () {
        return $('#retirement-age');
    }

    get inputRCurrentAnnualIncome () {
        return $('#current-income');
    }

    get inputSpouseAnnualIncome () {
        return $('#spouse-income');
    }

    get inputRCurrentRetirementSavingBal () {
        return $('#current-total-savings');
    }

    get inputRCurrentlyRetirementSavingEachYr () {
        return $('#current-annual-savings');
    }

    get inputREachYrIncrease () {
        return $('#savings-increase-rate');
    }

    get radioRSocialSecuritybenefitsYes () {
        //return $('#yes-social-benefits');
        return $('label[for="yes-social-benefits"]');        
    }

    get radioRSocialSecuritybenefitsNo () {
        return $('#no-social-benefits');
    }
    // if yes then 
    get inputSocialSecurityOverrideAmount () {
        return $('#social-security-override');
    }    

    // btn 
    get btnSubmitCalculate () {
        return $('button[onclick="calculateResults();"]');
    }

     /**
     * a method to encapsule automation code to interact with the page
     */
    async fillDataOnlyRequired (currentAge, targetRetirmentAge, isSocialSecurityIncomeAdded ) {
        ElementUtil.myLogger('On Retirment Page :');
        await this.inputRCurrentAge.setValue(currentAge);
        await this.inputRAgeToRetire.setValue(targetRetirmentAge);
        await this.inputRCurrentAnnualIncome.setValue('$9');
        await new Promise(r => setTimeout(r, 4000)); //delete  
        ///
        await browser.keys('\uE05A'); //"ArrowRight"
        await browser.keys('\uE05A');
        await browser.keys(['Meta', '\uE05A']);
        await browser.keys(['Meta', CONSTANT_RET.RETRIEMENT_PAGE_CINCOME]);
       // await browser.keys(['Meta', '77']);
        await browser.keys('\uE004');  // Tab
        await browser.keys('\uE004');
        //browser.execute();
        //await browser.keys('Enter');
                //var data = browser.execute(function() {
                // return window.data;
                //});
                // \uE058	"ArrowLeft" , \uE05A	"ArrowRight"
        
        await this.inputRCurrentRetirementSavingBal.setValue(CONSTANT_RET.RETRIEMENT_PAGE_SAVING_BAL);               
        await this.inputRCurrentlyRetirementSavingEachYr.setValue(CONSTANT_RET.RETRIEMENT_PAGE_SAVING_EACH_YR);
        await this.inputREachYrIncrease.setValue(CONSTANT_RET.RETRIEMENT_PAGE_INCRESE_ECH_YR);       
        if(isSocialSecurityIncomeAdded){ 
            ElementUtil.myLogger('On Retirment Page : YES on Social Security income');
            await new Promise(r => setTimeout(r, 3000));
            await this.radioRSocialSecuritybenefitsYes.click();
            await new Promise(r => setTimeout(r, 3000));
            await this.inputSocialSecurityOverrideAmount.setValue(CONSTANT_RET.RETRIEMENT_PAGE_SS_OVERRIDE_AMOUNT);   
        }  
        await this.btnSubmitCalculate.saveScreenshot(CONSTANT_RET.COMMON_SCR_PATH);    //Screen shot 
        await this.btnSubmitCalculate.click();
        await new Promise(r => setTimeout(r, 2000));
    }

    async fillDataAllFields(currentAge, targetRetirmentAge,isSocialSecurityIncomeAdded) {
        ElementUtil.myLogger('On Retirment Page : with  All Fields');
        //await new Promise(r => setTimeout(r, 2000));     
        await this.inputSpouseAnnualIncome.setValue(CONSTANT_RET.RETRIEMENT_PAGE_SP_INCOME);  
        //await new Promise(r => setTimeout(r, 4000)); 
        await this.fillDataOnlyRequired(currentAge, targetRetirmentAge,isSocialSecurityIncomeAdded )  
    }

     /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.openRetiremntApplication(CONSTANT_RET.RETRIEMENT_PAGE_PATH_URI);
    }

    myPromise (sec){
        new Promise(r => setTimeout(r, 1000 * sec));
    }
}

module.exports = new RetirementPage();
