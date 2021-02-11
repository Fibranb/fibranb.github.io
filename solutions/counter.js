let counter = 1



$('button').click(function() {
    $('#second').html(counter++);
});

//$('#decrease').click(function() {
//    $('#second').html(finalcount--);
//});

$('#todo').click(function(){
    $('ul').append('<li>' + $("input").val() + '</li>');
});

// $('li').click(function() {toggleClass('crossed')})
