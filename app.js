$(document).ready(function () {

    function clearFields() {
        $('#searchInput').val("");
        $('#startYearInput').val("");
        $('#endYearInput').val("");
        console.log($('#searchInput').val());

    }

    const search = function() {
        const apikey = "d413b797e2ef42889944fd71f193f81b";
        const searchInput = $('#searchInput').val();
        const numberTerm = $('option:selected').val();
        const startYearInput = $('#startYearInput').val() + `0101`;
        const endYearInput = $('#endYearInput').val() + `1231`;

        var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";

        url += '?' + $.param({
            'api-key': apikey,
            'q': searchinput,
            'begin_date': startYearInput,
            'end_date': endYearInput,
            'page' : 0,
        });

        $.ajax({
            url: url,
            method: 'GET'
        }).done(function (response) {
    
    const sectionBody = $('#newsFeed');
    sectionBody.html("");
    // Section for ajax responses
//////////////////////////////////////
////////////////////////////////////
////////////////////////////////
////////////////////////////////////
////////////////////
    //Section for ajax responses

        }].fail(function (err) {
            throw err;
        });
    };
    //Eventhandlers//
    $('#searchButton').on('click', search);
    $('#clearButton').on('click', clearFields);

    $(document).ready(function () {

        function clearFields() {
            $('#searchInput').val("");
            $('#startYearInput').val("");
            $('#endYearInput').val("");
            console.log($('#searchInput').val());
    
        }
    
        const search = function() {
            const apikey = "d413b797e2ef42889944fd71f193f81b";
            const searchInput = $('#searchInput').val();
            const numberTerm = $('option:selected').val();
            const startYearInput = $('#startYearInput').val() + `0101`;
            const endYearInput = $('#endYearInput').val() + `1231`;
    
            var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    
            url += '?' + $.param({
                'api-key': apikey,
                'q': searchinput,
                'begin_date': startYearInput,
                'end_date': endYearInput,
                'page' : 0,
            });
    
            $.ajax({
                url: url,
                method: 'GET'
            }).done(function (response) {
        
        const sectionBody = $('#newsFeed');
        sectionBody.html("");
        // Section for ajax responses
    //////////////////////////////////////
    ////////////////////////////////////
    ////////////////////////////////
    ////////////////////////////////////
    ////////////////////
        //Section for ajax responses
    })
        }].fail(function (err) {
        throw err;
    });
    };
        //Eventhandlers//
    $('#searchButton').on('click', search);
    $('#clearButton').on('click', clearFields);


