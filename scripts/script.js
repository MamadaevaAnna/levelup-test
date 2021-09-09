// Плавная прокрутка к якорю

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

// Слайдер Отзывы

var swiper = new Swiper(".slider-review", {
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Таймер обратного отсчёта

var start = Date.now(),
    r = document.getElementById('timer');
(function f() {
    var diff = Date.now() - start,
        ns = (((18e5 - diff) / 1000) >> 0),
        m = (ns / 60) >> 0,
        s = ns - m * 60;
    r.textContent = "Цена товара изменится через " + m + ':' + (('' + s).length > 1 ? '' : '0') + s + ' минут';
    if (diff > (18e5)) {
        start = Date.now()
    }
    setTimeout(f, 1000);
})();

// В поле номера телефона можно вводить только цифры

document.querySelector('.only-number').addEventListener('input', 
  function(e){
    this.value = this.value.replace(/[^\d.]/g, '');
  }
)