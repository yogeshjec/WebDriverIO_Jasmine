const RetirmentPage = require('../pageobjects/retirementCal.page');
const ResultPage = require('../pageobjects/result.page');
const AdjustDefaultValuePage = require('../pageobjects/adjustDefaulValues.page');
const CONSTANT_RETIRE = require('../util/constant.data')


describe('My Retirement application', () => {
    it('TC01 - should calculate basis on the required fields', async () => {
        await RetirmentPage.open();
        await RetirmentPage.fillDataOnlyRequired(CONSTANT_RETIRE.RETRIEMENT_PAGE_CAGE, CONSTANT_RETIRE.RETRIEMENT_PAGE_RETIREAGE,false);
        await expect(ResultPage.resultMessage).toBeExisting();
        //-//await expect(ResultPage.resultMessage).toHaveTextContaining('In order to retire by');
    });

    it('TC02 - should calculate basis on the required fields with Yes for Social Security income', async () => {
         await RetirmentPage.open();
         await RetirmentPage.fillDataOnlyRequired(CONSTANT_RETIRE.RETRIEMENT_PAGE_CAGE, CONSTANT_RETIRE.RETRIEMENT_PAGE_RETIREAGE,true);
         await expect(ResultPage.resultMessage).toBeExisting();
       //-//await expect(ResultPage.resultMessage).toHaveTextContaining('In order to retire by');
    });

    it('TC03 - should calculate basis on the all fields with Yes for Social Security income', async () => {
         await RetirmentPage.open();
         await RetirmentPage.fillDataAllFields(CONSTANT_RETIRE.RETRIEMENT_PAGE_CAGE, CONSTANT_RETIRE.RETRIEMENT_PAGE_RETIREAGE, true);
         await expect(ResultPage.resultMessage).toBeExisting();
       //-//await expect(ResultPage.resultMessage).toHaveTextContaining('In order to retire by');
    });

    it('TC04 - should calculate basis on the required fields with No for Social Security income with Adjust default values ', async () => {
         await RetirmentPage.open();
         await AdjustDefaultValuePage.doClickPageLink();
         await AdjustDefaultValuePage.fillDataOnAdjustDefaulValuesPage();
         await RetirmentPage.fillDataOnlyRequired(CONSTANT_RETIRE.RETRIEMENT_PAGE_CAGE, CONSTANT_RETIRE.RETRIEMENT_PAGE_RETIREAGE,false);
         await expect(ResultPage.resultMessage).toBeExisting();

       //-//await expect(ResultPage.resultMessage).toHaveTextContaining('In order to retire by');
     });



});


