var hyread = require("./test_hyread_crawler.js");

function hyread_search() {
    // console.log("I'm main func.")
    hyread.run();
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
        hyread_search();
    }
}





