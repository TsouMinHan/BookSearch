const request = require('request');
const cheerio = require("cheerio");

module.exports = {
    run:function (keyword){  
        var url = 'https://www.taaze.tw/rwd_searchResult.html?keyType%5B%5D=0&keyword%5B%5D='
        
        url = get_modify_url(url, keyword);

        add_link(url, "tazze", "");
    },
  };

function add_link(url, key, result_num) {
    document.getElementById('tag-id').innerHTML += `<ol><li><a href="${url}" target="_blank">${key} - ${result_num}</a></li></ol>`;
    // console.log(key);
  }

function get_modify_url(url, keyword) {
    var keyword = encodeURI(keyword);
    return url + keyword
}