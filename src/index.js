const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
   let numLetters = expr.match(/.{10}/g);
   numLetters = numLetters.map(item => {
       if(item === '**********') {
           return ' ';
       }
       let morseLetter = '';
       item.match(/.{2}/g).forEach((el, i) => {
        if(el === '10') {
            morseLetter += '.';
        } else if(el === '11') {
            morseLetter += '-';
        }
       });
       let letter;
       for(key in MORSE_TABLE) {
           if(key === morseLetter) {
            letter = MORSE_TABLE[key];
           }
       }
       return letter;
   });
   return numLetters.join('');
}

module.exports = {
    decode
}