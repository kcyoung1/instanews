// var nytData = data.results,
//     articleLink, articleCaption, articleImageUrl;
//
// if (nytData.length !== 0) {
//
//     nytData = nytData.filter(function() {
//         return item.multimedia.length;
//     }).splice(0, 12);
//
//     nytItems += '<ul>';
//
//     $.each(nytData, function(key, value) {
//         articleImageUrl = value.multimedia[4].url;
//         articleCaption = value.abstract;
//
//     });
// }
$(function() {
    $('select').on('change', function() {
        // $('header').switchClass();
        // $('.loading').show();
        $.ajax({
                method: 'GET',
                url: 'http://api.nytimes.com/svc/topstories/v1/world.json?api-key=79cdc4c15ba80dc0b637d0b5c9ca165f:2:75124069',
            })
            .done(function(data) {
                console.log(data);
                console.log(data.results);
                // var nytData = data.results,
                $.each(data.results, function(key, value) {
                    // value.abstract
                    console.log(value.abstract);
                    console.log(value.url);
                    console.log(value.title);

                });
            });
    });
});