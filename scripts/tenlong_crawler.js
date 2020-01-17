
module.exports = {
    run:function (keyword){  
        var url = 'https://www.tenlong.com.tw/search?utf8=%E2%9C%93&keyword='
        
        url = get_modify_url(url, keyword);

        add_link(url, "tenlong", "");
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