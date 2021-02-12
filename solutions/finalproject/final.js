let currentPhoto = 0;

let data = [
    {
    photo: 'obrazky/1.jpg',
    title: 'My title',
    description: 'What happened here, why is this a very nice image'
  },
  {
    photo: 'obrazky/2.jpg',
    title: 'My title',
    description: '2What happened here, why is this a very nice image'
  },
  {
    photo: 'obrazky/3.jpg',
    title: 'My title',
    description: '3What happened here, why is this a very nice image'
  },
  {
    photo: 'obrazky/4.jpg',
    title: 'My title',
    description: '4What happened here, why is this a very nice image'
  },
  {
    photo: 'obrazky/5.jpg',
    title: 'My title',
    description: '5What happened here, why is this a very nice image'
  }
];

let loadPhoto = (photoNumber) => {
    $('#photo').attr('src', data[photoNumber].photo);
    $('#photo-title').text(data[photoNumber].title);
    $('#photo-description').text(data[photoNumber].description);
}
  
loadPhoto(currentPhoto);
  


$('#right').click(function() {
    currentPhoto++;
    loadPhoto(currentPhoto);
    if (currentPhoto == data.length - 1) {
        currentPhoto = -1
    };

});


$('#left').click(function() {
    if (currentPhoto == 0) {
        currentPhoto = data.length - 1;
    } else {
      currentPhoto--;
    }
      loadPhoto(currentPhoto);
  
  });

  data.forEach((item, index) => {
    $('.container').append(`<div class="thumb" data-index="${index}"><img src="${item.photo}"></div>`);
    $('.thumb').click(function() {
        let indexClicked = $(this).attr('data-index');
        let numberIndex = parseInt(indexClicked);
        loadPhoto(numberIndex);
        
      });
  });

 

  
