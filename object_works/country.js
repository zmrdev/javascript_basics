var india=[
    {
      "name": "India",
      "topLevelDomain": [
        ".in"
      ],
      "alpha2Code": "IN",
      "alpha3Code": "IND",
      "callingCodes": [
        "91"
      ],
      "capital": "New Delhi",
      "altSpellings": [
        "IN",
        "Bhārat",
        "Republic of India",
        "Bharat Ganrajya"
      ],
      "subregion": "Southern Asia",
      "region": "Asia",
      "population": 1380004385,
      "latlng": [
        20,
        77
      ],
      "demonym": "Indian",
      "area": 3287590,
      "gini": 35.7,
      "timezones": [
        "UTC+05:30"
      ],
      "borders": [
        "AFG",
        "BGD",
        "BTN",
        "MMR",
        "CHN",
        "NPL",
        "PAK",
        "LKA"
      ],
      "nativeName": "भारत",
      "numericCode": "356",
      "flags": {
        "svg": "https://flagcdn.com/in.svg",
        "png": "https://flagcdn.com/w320/in.png"
      },
      "currencies": [
        {
          "code": "INR",
          "name": "Indian rupee",
          "symbol": "₹"
        }
      ],
      "languages": [
        {
          "iso639_1": "hi",
          "iso639_2": "hin",
          "name": "Hindi",
          "nativeName": "हिन्दी"
        },
        {
          "iso639_1": "en",
          "iso639_2": "eng",
          "name": "English",
          "nativeName": "English"
        }
      ],
      "translations": {
        "br": "Índia",
        "pt": "Índia",
        "nl": "India",
        "hr": "Indija",
        "fa": "هند",
        "de": "Indien",
        "es": "India",
        "fr": "Inde",
        "ja": "インド",
        "it": "India",
        "hu": "India"
      },
      "flag": "https://flagcdn.com/in.svg",
      "regionalBlocs": [
        {
          "acronym": "SAARC",
          "name": "South Asian Association for Regional Cooperation"
        }
      ],
      "cioc": "IND",
      "independent": true
    }
  ]

  // print country name
let countryName=india[0].name
// console.log(countryName);
// population
let population=india[0].population
// console.log(population);
// capital
let capital=india[0].capital
// borders
let borders=india[0].borders
// currency name
let currencyName=india[0].currencies[0].name
// console.log(currencyName);
// currency symbol
let currencySym=india[0].currencies[0].symbol
// languages name
let language=india[0].languages[0].name
// flag
let flag=india[0].flags
let totalList={countryName,population,capital,borders,currencyName,currencySym,language,flag}
console.log(totalList);