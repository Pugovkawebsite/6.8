$(document).ready(function(){
    $('.slider').slick({
        infinite: true,
        variableWidth: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerPadding: '50px',
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/slider/left_arrow.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/slider/right_arrow.svg"></button>',
        responsive: [
          {
            breakpoint: 1440,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              variableWidth: false,
              centerPadding: '0px',
              // dots: true
            }
          },
          {
            breakpoint: 1201,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              variableWidth: false,
              centerPadding: '0px',
              // dots: true
            }
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              variableWidth: true,
              centerPadding: '30px',
              // dots: true
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              variableWidth: true,
              centerPadding: '30px',
              // dots: true
            }
          },
          {
            breakpoint: 577,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: false,
              variableWidth: false,
              // centerPadding: '30px',
              // dots: true
            }
          },
          {
            breakpoint: 460,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 2,
              infinite: false,
              variableWidth: false,
              // centerPadding: '30px',
              // dots: true
            }
          },
        ]
      });
    $('.single-item').slick({
        // infinite: true,
        // variableWidth: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/card/left_small.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/card/right_arrow.svg"></button>'
      });
});


// $(document).ready(function(){
  
// });

  
// let tabs = document.querySelectorAll('.slider-content__elem'),
//     tabsContent = document.querySelectorAll('.slider-content__tab-content');
   

// function hideTabContent() {
    
//     tabsContent.forEach(item => {
//         item.classList.add('slider-content__tab-content');
//         item.classList.remove('content__active');
//     });

//     tabs.forEach(item => {
//         item.classList.remove('slider-content__elem__active');
//     });
// }

// function showTabContent(i) {
//     tabsContent[i].classList.add('content__active');
//     tabsContent[i].classList.remove('slider-content__tab-content');
//     tabs[i].classList.add('slider-content__elem__active');
// }

// tabs.forEach(function(tab, i) {
//   tab.addEventListener('click', function() {
//     hideTabContent();
//     showTabContent();
//   });
// });



const ctx = document.getElementById('myChart');
// const myChart = new Chart(ctx, {
//     type: 'bar',
//     data: {
//         labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
//         datasets: [{
//             label: '# of Votes',
//             data: [{x: 10, y: 20}, {x: 10, y: 20}, {x: 20, y: 10}, {x: 10, y: 20}, {x: 10, y: 20}, {x: 10, y: 20}, {x: 10, y: 20},{x: 10, y: 20}],
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(255, 206, 86, 0.2)',
//                 'rgba(75, 192, 192, 0.2)',
//                 'rgba(153, 102, 255, 0.2)',
//                 'rgba(255, 159, 64, 0.2)'
//             ],
//             borderColor: [
//                 'rgba(255, 99, 132, 1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)',
//                 'rgba(255, 159, 64, 1)'
//             ],
//             borderWidth: 1
            
//         }]
//     },
//     options: {
//         scales: {
//             myScale: {
//                 type: 'logarithmic',
//                 position: 'left', // `axis` is determined by the position as `'y'`
//             }
//         }
//     },
    
// });

const dataSales2020 = {
    label: "Guests",
    data: [42, 29, 31, 25, 39, 38, 36, 29], // Данные представляют собой массив, который должен иметь такое же количество значений, как и количество тегов.
    backgroundColor: '#EDEFEF', // Цвет фона
    borderColor: '#EDEFEF', // Цвет границы
    borderWidth: 1,// Толщина границ
    order: 2,
    borderRadius: '75',
    width: '15'
   
};
const dataSales2021 = {
    label: "Registered",
    data: [21, 17, 19, 10, 20, 27, 29, 21], // Данные представляют собой массив, который должен иметь такое же количество значений, как и количество тегов.
    backgroundColor: '#F86549',// Цвет фона
    borderColor: '#F86549',// Цвет границы
    borderWidth: 1,// Толщина границ
    order: 1,
    borderRadius: '75',
    width: '15'
    
};

const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [dataSales2020, dataSales2021]
    },
    options: {
        scales: {
            // myScale: {
            //     type: 'logarithmic',
            //     position: 'left', // `axis` is determined by the position as `'y'`
            //     // stacked: true,
            //     // stacked: 'single',
            // }
            x: {
              stacked: true
            }
            // y: {
            //   stacked: true
            // }
        }
    },
    
});

let tab = document.querySelectorAll('.slider-content__elem'),
      tabContent = document.querySelectorAll('.slider-content__tab-content');

  tab.forEach(function(tab, i) {
    tab.addEventListener('click', function() {
      hideTab();
      this.classList.add('slider-content__elem__active');
      tabContent[i].classList.add('content__active');
    });
  });

  function hideTab() {
    tab.forEach((item) => {
      item.classList.remove('slider-content__elem__active');
    });
    tabContent.forEach((item) => {
      item.classList.remove('content__active');
    });
}

// item__box__active

// item_descr__active

let box = document.querySelectorAll('.item__box'),
    text = document.querySelectorAll('.item_descr'),
    items = document.querySelectorAll('.item');

    items.forEach(function(a, i) {
    a.addEventListener('click', function() {
      hideT();
      text[i].classList.add('item_descr__active');
      box[i].classList.add('item__box__active');
    });
  });

  function hideT() {
    text.forEach((b) => {
      b.classList.remove('item_descr__active');
    });
    box.forEach((b) => {
      b.classList.remove('item__box__active');
    });
}


