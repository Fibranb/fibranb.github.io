let names = ["Filip", "Honza", "Lenka"]

$('ul li').each(function (a) {
    $(this).append(" " + names[a]);
});



let additionalBlock = {
    title: "Added with javascript",
    text: "This block was added using JavaScript's jQuery library. How awesome!"
  };

$('body').append('<h1>' + additionalBlock.title + '</h1>' + '<p>' + additionalBlock.text + '</p>')

$('#first').click(function() {console.log('Yeah, you clicked me')})

$('#second').click(function() {$('#first').text('text changed')})

$('#third').click(function() {$('h3').html('The color is ' + $("input").val()); })

$('button').click(function() {$('button').css('background', $("input").val())})