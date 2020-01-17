const request = require('request');
const cheerio = require("cheerio");

module.exports = {
  run:function (keyword){
    var url = `http://toread.lib.nfu.edu.tw/toread/opac/search?q=${keyword}&max=0&view=CONTENT&level=all&material_type=all&location=0`;

    add_link(url, 'nfu', '')
  },
};


function add_link(url, key, result_num) {
  document.getElementById('tag-id').innerHTML += `<ol><li><a href="${url}" target="_blank">${key} - ${result_num}</a></li></ol>`;
  // console.log(key);
}