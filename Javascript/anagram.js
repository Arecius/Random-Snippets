let isAnagram = ( firstWords, secondWords ) => {
    
    let result = [];

    while( firstWords.length > 0 && secondWords.length > 0 ){

        let firstWord = firstWords.pop().replace(/\s/g,'');
        let secondWord = secondWords.pop().replace(/\s/g,'');
        
        if( firstWord.length !== secondWord.length || firstWord.split('').sort().join() !== secondWord.split('').sort().join() ){
            result.push(0);
        }else {
            result.push(1);
        }

    }
    console.log( result.join('\n') );
};

let firstWords = [
    'cinema',
    'host', 
    'aba',
    'train',
    'the earthquakes',
    'debit card',
    'school master'
];
let secondWords = [
    'iceman',
    'shot',
    'bab',
    'rain',
    'that queer shake',
    'bad credit',
    'the classroom'
];


let start = new Date().getTime();

isAnagram( [...firstWords], [...secondWords] );

let end = new Date().getTime();

console.log("Call to isAnagram took " + (end - start) + " milliseconds.");


let longFirst = [];

while( longFirst.length < 20000) longFirst = [ ...longFirst, ...firstWords];

let longSecond = [];

while( longSecond.length < 20000) longSecond = [...longSecond,...secondWords];

start = new Date().getTime();

isAnagram( longFirst, longSecond );

end = new Date().getTime();

console.log("Long Call to isAnagram took " + (end - start) + " milliseconds.")
