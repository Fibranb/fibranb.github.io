let names = ["Filip", "Honza", "Lenka"]

$('ul li').each(function (a) {
    $(this).append(" " + names[a]);
});



let additionalBlock = {
    title: "Added with javascript",
    text: "This block was added using JavaScript's jQuery library. How awesome!"
  };

$('body').append(additionalBlock.title)

