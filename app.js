let terms = "";
let urlBase = "http://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=";
let authKey = "d413b797e2ef42889944fd71f193f81b" ;
let beginDate = 0;
let endDate = 0;

$("#sumbit").click(function() {
    $("#articleArea").empty();
    terms = $("#searchTerms").val().trim();
    terms = terms.replace();
    numberOfArticles = $('#recordNum option:selected').val()
})
// var apiKey = '39ed6293008242c39c5931e159dde131';
// var keyParam = '&api_key=';
// var qParam = '?q=';
// var beginParam = '?begin_date=';
// var endParam = '?end_date=';
// var pageParam = '?page=';
// var baseUrl = 'https://api.nytimes.com/svc/search/v2/articlesearch.json' ;
// var testQ = "";

// $("#sender").on("click", function (){
//     var userSearch = $("#exampleInputEmail1").val().trim();
//     //var userRecords = $("exampleSelect1").val().trim();
//     var queryURL = baseUrl + qParam + userSearch + keyParam + apiKey;

    // $.ajax({
    //     url: queryURL,
    //     method: "GET"
    // }).then(function(response){
    //     console.log(response);
    //     var source = response.response.docs;
    //     for(var i = 0; i < source.length; i++){

const searchRecords = function () {}

    const val1 = $('#val1').val();
    const val2 = $('#val2').val();
    const val3 = $('#val3').val ();

    



    $("#search").click(function() {
        $("#articleArea").empty();
        terms = $("#searchTerms").val().trim();
        terms = terms.replace(/ /g, "+");
        numberOfArticles = $("#selectOptions option:selected").val()
    
        // console.log( $("#searchTerms").val() )
        // console.log( $("#recordNum option:selected").val() );
    
        // Need to make date..
        beginDate = $("#startYear").val()
        endDate = $("#endYear").val()


        