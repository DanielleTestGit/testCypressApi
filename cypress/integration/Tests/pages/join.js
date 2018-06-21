
const selectors = {
    email:"input[id='register-email']",
    confirmEmail:"input[id='register-confirm-email']",
    password:"input[id='register-password']",
    displayname: "input[id='register-displayname']",
    daybirthday: "input[id='register-dob-day']",
    monthbirthday: "select[id='register-dob-month']",
    yearbirthday: "input[id='register-dob-year']",
    gendermale: "input[id='register-male']",
    terms: "input[id='register-terms']",
    privacy: "input[id='register-privacy']",
    buttonSignin: "a[id='register-button-email-submit']",
    errorMessage: "label[for='captcha-hidden']",
    termsFacebook: "input[id='register-terms-facebook']",
    privacyFacebook: "input[id='register-privacy-facebook']"
};

module.exports = {

    createUser: function(user){
        cy.get(selectors.termsFacebook).click();
        cy.get(selectors.privacyFacebook).click();
        cy.get(selectors.email).type(user.email);
        cy.get(selectors.confirmEmail).type(user.email);
        cy.get(selectors.password).type(user.password);
        cy.get(selectors.displayname).type(user.nameRandom);
        cy.get(selectors.daybirthday).type(user.dayBirthday);
        cy.get(selectors.monthbirthday).select(user.monthBirthday).should('have.value','04');
        cy.get(selectors.yearbirthday).type(user.yearBirthday);
        cy.get(selectors.gendermale).click();
        cy.get(selectors.terms).click();
        cy.get(selectors.privacy).click();
        cy.get(selectors.buttonSignin).click();

    },

    validateError: function(errorText) {
        cy.get(selectors.errorMessage).should('contain', errorText);
    }

};

