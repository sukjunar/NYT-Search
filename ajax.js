const render = function (articlesArray) {
    for (let i = 0; i < articlesArray.length; i++) {
        let headline = articlesArray[i].headline.main;
        let date = articlesArray[i].pub_date;

        $('#test').append(`<h4>${headline}</h4>`);
        $('#test').append(date);
    }
};

const displayInfo = function () {
    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    url += '?' + $.param({
        'api-key': "6ccb734888db4a05bdc082173279ab87",
        'q': "terms",
        'begin_date': "20170101",
        'end_date': "20181005"
    });
    $.ajax({
        url: url,
        method: 'GET'
    }).then(function (response) {
        let array = response.response.docs;
        render(array);
    })
};

$('#search').on('click', displayInfo());