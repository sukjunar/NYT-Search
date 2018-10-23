const render = function (NYTData) {

    const numArticles = $('#article-count').val();

    const articles = NYTData.response.docs.slice(0, numArticles);

      for (let i = 0; i < articles.length; i++){
        $('#article-section').append(buildArticle(articles[i]));
      }

  }

  const buildArticle = function(article) {

    const articleLink = $('<a>')
    .attr('href', article.web_url)
    .attr('target', '_blank');
    

    // If the article has a headline, append to articleLink
    const headline = article.headline;

    if (headline && headline.main) {
      articleLink.append($('<h3>').text(headline.main));
    }

    const byline = article.byline;

    if (byline && byline.original) {
      articleLink.append($('<h5>').text(byline.original));
    }

    const section = article.section_name;

    if (section) {
      articleLink.append($('<h5>').text(`Section: ${section}`));
    }

    const pubDate = article.pub_date;

    if (pubDate) {
      articleLink.append($('<p>').text(formatDate(article.pub_date)));
    }


    const articleListItem = $('<li>')
    articleListItem.append(articleLink)

    return articleListItem;
  }

  const formatDate = function(date) {

    const dateObj = new Date(date);
    const month = dateObj.getMonth() + 1
    const day = dateObj.getDay()
    const year = dateObj.getFullYear()

    return `${month}-${day}-${year}`
  }

  const search = function (event) {

    event.preventDefault();

    clear();

    const queryURL = buildQueryURL();

    $.ajax({
      url: queryURL,
      method: 'GET'
    }).then(render);
  }

  const buildQueryURL = function () {

    const baseURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json'
    const apiKey = 'b9f91d369ff59547cd47b931d8cbc56b:0:74623931'
    
    const userInput = $('#search-term').val().trim();
  
    let queryURL = `${baseURL}?q=${userInput}&api-key=${apiKey}`;

    const startYear = $('#start-year').val().trim();

    if (parseInt(startYear)) {
      queryURL += `&begin_date=${startYear}0101`;
    }

    const endYear = $('#end-year').val().trim();

    if (parseInt(endYear)) {
      queryURL += `&end_date=${endYear}0101`;
    }

    return queryURL;
  }

  const clear = function () {
    $('#article-section').empty();
  }

  $('#run-search').on('click', search);

  $('#clear-all').on('click', clear);
