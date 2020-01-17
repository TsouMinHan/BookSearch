module.exports = {
    get_resutls: function (keyword) {
        var url = `https://www.google.com/search?safe=off&sxsrf=ACYBGNT27I1118E1rxyBmO-IuhdgVjouJw%3A1579261720440&ei=GJ8hXv_HGtXdmAX5u4-wAw&q=${keyword}&oq=${keyword}&gs_l=psy-ab.3...81078.91440..92155...1.0..0.67.660.12......0....1..gws-wiz.......35i39.ovIWtam58s8&ved=0ahUKEwj_s-quyIrnAhXVLqYKHfndAzYQ4dUDCAs&uact=5`

        add_link(url, 'Google', '')
    }
}


function add_link(url, key, result_num) {
    document.getElementById('tag-id').innerHTML += `<ol><li><a href="${url}" target="_blank">${key} - ${result_num}</a></li></ol>`;
    // console.log(key);
  }
