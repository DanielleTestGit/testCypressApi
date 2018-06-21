import home from "./pages/home";
import join from "./pages/join";
import user from "./data/user";

describe('Login and Create Account Spotify', function() {

  before(function() {
    home.open();
  })

  it('login captcha exist', function() {
    home.login('blablabla','121212121');
    home.validateCaptcha();

   })

   it('create account without captcha validation', function() {
    var userData = new user.User();
    home.open();
    home.join();
    join.createUser(userData);
    join.validateError('Confirme que você não é um robô.');
    
   })

})
