//https://www.freecodecamp.org/challenges/validate-us-telephone-numbers

function telephoneCheck(str) {
    return /(?=.*\(.*)^(1?) ?\((\d{3})\) ?(\d{3})[ -]?(\d{4})$|^(1?) ?(\d{3})[ -]?(\d{3})[ -]?(\d{4})$/g.test(str);
}

telephoneCheck("555-555-5555");

//check out explanation and other tests here: https://regex101.com/r/oS6dR0/32