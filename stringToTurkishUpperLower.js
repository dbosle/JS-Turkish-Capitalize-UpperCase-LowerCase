String.prototype.turkishToUpper = function () {
    // -> "çağla çağla" -> "ÇAĞLA ÇAĞLA"

    var string = this;
    var letters = {
        "i": "İ",
        "ş": "Ş",
        "ğ": "Ğ",
        "ü": "Ü",
        "ö": "Ö",
        "ç": "Ç",
        "ı": "I"
    };
    string = string.replace(/(([iışğüçö]))/g, function (letter) {
        return letters[letter];
    })
    return string.toUpperCase();
}

String.prototype.turkishToLower = function () {
    // -> "çağla ÇAĞLA ÇAğla" -> "çağla çağla çağla"

    var string = this;
    var letters = {
        "İ": "i",
        "I": "ı",
        "Ş": "ş",
        "Ğ": "ğ",
        "Ü": "ü",
        "Ö": "ö",
        "Ç": "ç"
    };
    string = string.replace(/(([İIŞĞÜÇÖ]))/g, function (letter) {
        return letters[letter];
    })
    return string.toLowerCase();
}


String.prototype.turkishCapitalize = function () {
    // -> All words in a sentence
    // -> "çağla çağla" -> "Çağla Çağla"

    return this.split(" ").map(function (item) { return item[0].turkishToUpper() + item.substring(1) }).join(" ");;
}
