let question1 = [
    {
        name: 'appName',
        type: 'input',
        message: 'Enter your App\'s name: ',
        validate( value ) {
            if (value.length) {
                return true;
            } else {
                return 'Please Enter your App\'s name';
            }
        }
    }
];

let question2 = [
    {
        name: 'modules',
        type: 'input',
        message: 'Enter your module \'s name, using an array for more modules: ',
        validate(value) {
            if (value.length) {
                return true;
            } else {
                return 'Please enter your module\'s name';
            }
        }
    }
];

module.exports = {
    question1: question1,
    question2: question2
};