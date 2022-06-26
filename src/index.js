module.exports = function toReadable (number) {
    let e = Math.floor(number % 10);
    let d = Math.floor(number / 10 % 10);
    let s = Math.floor(number / 100);
    let str ="";
    switch (s) {
        case 1: 
            str += "one hundred";
            break;
        case 2: 
            str += "two hundred";
            break;
        case 3:
            str += "three hundred";
            break;
        case 4:
            str += "four hundred";
            break;
        case 5: 
            str += "five hundred";
            break;
        case 6:
            str += "six hundred";
            break;
        case 7:
            str += "seven hundred";
            break;
        case 8:
            str += "eight hundred";
            break;
        case 9:
            str += "nine hundred";
            break;    
    }

    if (s != 0 && d != 0) {
        str += " ";
    }

    switch (d) {
        case 1: 
            let r = Math.floor(number % 100);
            switch (r) {
                case 10:
                    str += "ten";
                    return str;
                case 11:
                    str += "eleven";
                    return str;
                case 12:
                    str += "twelve";
                    return str;
                case 13:
                    str += "thirteen";
                    return str;
                case 14:
                    str += "fourteen";
                    return str;
                case 15: 
                    str += "fifteen";
                    return str;
                case 16: 
                    str += "sixteen";
                    return str;
                case 17:
                    str += "seventeen";
                    return str;
                case 18:
                    str += "eighteen";
                    return str;
                case 19: 
                    str += "nineteen";
                    return str;
            }
        case 2: 
            str += "twenty";
            break;
        case 3:
            str += "thirty";
            break;
        case 4:
            str += "forty";
            break;
        case 5: 
            str += "fifty";
            break;
        case 6:
            str += "sixty";
            break;
        case 7:
            str += "seventy";
            break;
        case 8:
            str += "eighty";
            break;
        case 9:
            str += "ninety";
            break;    
    }

    if ((s != 0 && e != 0) || (d != 0 && e != 0)){
        str += " ";
    }

    switch (e) {
        case 1: 
            str += "one";
            break;
        case 2: 
            str += "two";
            break;
        case 3:
            str += "three";
            break;
        case 4:
            str += "four";
            break;
        case 5: 
            str += "five";
            break;
        case 6:
            str += "six";
            break;
        case 7:
            str += "seven";
            break;
        case 8:
            str += "eight";
            break;
        case 9:
            str += "nine";
            break;    
    }

    return str;
}
