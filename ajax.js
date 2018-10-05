const displayInfo = function () {
    $.ajax ({
        url: 'https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=6ccb734888db4a05bdc082173279ab87',
        method: 'GET'
    }).then(function(response) {
        console.log(response)
    })

    const search = function () {
        response.forEach(function(word, i) {
            dict[word] = i;
        });
    }
}

const resultDiv = $('<div>').addClass('result');

const articleHeadline = response.docs.[0].headline.main;
const headlineHolder = $('<p>').text(`<h4>${articleHeadline}</h4>`);
resultDiv.append(headlineHolder);

const author = response.docs.[0].headline.name;
const authorHolder = $('<p>').text(`<h4>${author}</h4>`);
resultDiv.append(authorHolder);

const date = response.docs.[0].multimedia.pub_date;
const dateHolder = $('<p>').text(`<h4>${date}</h4>`);

