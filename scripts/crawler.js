const request = require('request');
const cheerio = require("cheerio");

module.exports = {
  run:function (){
    list = {
        "虎科": "https:\/\/nfu.ebook.hyread.com.tw\/",
        "台中": "https:\/\/taichunggov.ebook.hyread.com.tw\/",
        "台灣": "https:\/\/ntledu.ebook.hyread.com.tw\/",
        "台北": "https:\/\/tpml.ebook.hyread.com.tw\/"
    }
    // document.getElementById('tag-id').innerHTML = '';

    // var keyword = document.getElementById("keyword").value;
    // if(keyword == null){
    //     document.getElementById('tag-id').innerHTML = '請輸入關鍵字';
    //     return;
    // }

    for (var key in list) {
        url = get_modify_url(list[key], keyword);
        console.log(url);
        get_html(url, key);
    }
  },
};


function add_link(url, key, result_num) {
  document.getElementById('tag-id').innerHTML += `<ol><li><a href="${url}" target="_blank">${key} - ${result_num}</a></li></ol>`;
  // console.log(key);
}

function get_html(url, key, ) {
  request(url, function (err, res, body) {
      console.log('get_html') // TODO
      const $ = cheerio.load(body);

      const result_num = $('em[id=totalpage]').text();
      add_link(url, key, result_num);

  });

}

function get_modify_url(url, keyword) {
  keyword = encodeURI(keyword);
  return url + 'searchList.jsp?search_field=FullText&search_input=' + keyword
}