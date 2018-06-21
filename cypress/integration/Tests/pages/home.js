
const selectors = {
    entrarLink:"a[id='header-login-link']",
    loginUsername: "input[id='login-username']",
    loginPassword: "input[id='login-password']",
    loginButton: "button[id='login-button']",
    captcha: "div[id=,rc-imageselect']",
    siginLink: "a[id='nav-link-sign-up']"
};

module.exports = {

    open: function(){
        cy.visit("https://www.spotify.com/");
    },

    join: function(){
        cy.get(selectors.siginLink).should('contain','Inscrever-se').click();
        cy.contains('Inscrever-se').click();
    },

    login: function(username, password){
        cy.get(selectors.entrarLink).should('contain','Entrar').click();
        cy.get(selectors.loginUsername).type(username);
        cy.get(selectors.loginPassword).type(password);
        cy.get(selectors.loginButton).click();
    },

    validateCaptcha: function(){
        expect(selectors.captcha).to.exist;
    },
    validateError: function(errorText) {
        cy.get(selectors.errorMessage).should('contain', errorText);
    }
};

