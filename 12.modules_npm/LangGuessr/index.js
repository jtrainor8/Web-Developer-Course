const franc = require('franc');
const langs = require('langs');
const colors = require('colors');

// franc('এটি একটি ভাষা একক IBM স্ক্রিপ্ট') //=> 'ben'
// franc('Alle menneske er fødde til fridom') //=> 'nno'
// langCode = franc('Alle menslike wesens word vry') //=> afr


langCode = franc(process.argv[2]);
if(langCode == 'und') {
    console.log("Sorry, we could not detect the language of the input given".red);
} else {
    const nameCode = langs.where("3", langCode);
    if (nameCode) {
        console.log(nameCode.name.green);
    } else {
        console.log("Sorry, we could not detect the language of the input given".red);
    }
}

