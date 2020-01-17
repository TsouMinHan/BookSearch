var hyread = require("./hyread_crawler.js");
var books_by_google = require("./books_crawler.js");
var tazze = require("./tazze_crawler.js");
var tenlong = require("./tenlong_crawler.js");
var school = require("./school_crawler.js");

function hyread_search(keyword) {
    // console.log("I'm main func.")
    hyread.run(keyword);
}

function books_search(keyword) {
    books_by_google.get_resutls(keyword);
}

function tazze_search(keyword) {
    tazze.run(keyword);
}

function tenlong_search(keyword) {
    tenlong.run(keyword);
}

function school_search(keyword) {
    school.run(keyword);
}

function init(){
    document.getElementById('tag-id').innerHTML = '';

    var keyword = document.getElementById("keyword").value;

    if(keyword == ""){
        document.getElementById('tag-id').innerHTML = '請輸入關鍵字';
        return false;
    }
    return true;
}

var Btn = document.getElementById('Submit');
Btn.onclick = function () {
    if (init() == true) {
        var keyword = document.getElementById("keyword").value;
        hyread_search(keyword);
        books_search(keyword);
        tazze_search(keyword);
        tenlong_search(keyword);
        school_search(keyword);
    }
}





