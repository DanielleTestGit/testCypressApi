module.exports = {

    User: function(){
        
        this.nameRandom = 'test' + Math.random().toString(36).replace(/[^a-z]+/g, '');
        this.dayBirthday = "10";
        this.yearBirthday = "1990";
        this.monthBirthday = "Abril";
        this.email = this.nameRandom + "test@mail.com";
        this.password = "password02"; 
    }
}
