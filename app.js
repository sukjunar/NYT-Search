$(function () {

    const displayInfo = function () {
        $.ajax({
            url: 'https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=6ccb734888db4a05bdc082173279ab87',
            method: 'GET'
        }).then(function (response) {
            console.log(response)


            const resultDiv = $('<div>').addClass('result');

            const articleHeadline = response.response.docs[0].headline.main;

            const headlineHolder = $('<p>').text(`<h4>${articleHeadline}</h4>`);
            resultDiv.append(headlineHolder);

            const author = response.docs[0].headline.name;

            const authorHolder = $('<p>').text(`<h4>${author}</h4>`);
            resultDiv.append(authorHolder);

            const date = response.docs[0].multimedia.pub_date;
            const dateHolder = $('<p>').text(`<h4>${date}</h4>`);

            console.log(date);

        })
    }




    const selectVal = function () {
        const val1 = $('#selectOptions').text();
        console.log(val1);
    }

    $('#search').on('click', selectVal)

    render();


    const selectEmpty = function () {
        $('#selectOptions').empty();
        console.log(selectEmpty);
    }


    $("#articleArea").append(div)

    // $("#clear").click(function () {
    //     $("#articleArea").empty();

    //     terms = $("#searchTerms").val().trim();
    //     terms = terms.replace(/ /g, "+");



    //     $("#search").click(function () {
    //         $("#articleArea").empty();
    //     })

    //     displayInfo();





        // ======================= NOTES =========================
        // $("#sumbit").click(function() {
        //     $("#articleArea").empty();
        //     terms = $("#searchTerms").val().trim();
        //     terms = terms.replace();
        //     numberOfArticles = $('#recordNum option:selected').val()
        // })


        // $("#sender").on("click", function (){
        //     var userSearch = $("#exampleInputEmail1").val().trim();
        //     //var userRecords = $("exampleSelect1").val().trim();
        //     var queryURL = baseUrl + qParam + userSearch + keyParam + apiKey;










        //     $("#search").click(function() {
        //         $("#articleArea").empty();
        //         terms = $("#searchTerms").val().trim();
        //         terms = terms.replace(/ /g, "+");
        //         numberOfArticles = $("#selectOptions option:selected").val()

        // console.log( $("#searchTerms").val() )
        // console.log( $("#recordNum option:selected").val() );

        // Need to make date..
        // beginDate = $("#startYear").val()
        // endDate = $("#endYear").val()


    });