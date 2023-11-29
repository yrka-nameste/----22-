// ЛБ8 | Для слайдов
$(document).ready(() => {
    let currentSlide = 0;
    let isBusy = false;
    // Создание обработчика событий "клик"
    $('.slider-arrow').on('click', (e) => {
        const that = $(e.currentTarget);
        const slidesCount = slides.length - 1;

        // Логика переключения намера слайда
        if (!isBusy) {
        
            if(that.hasClass('left and right')) {
                surrentSlide += 1;
                if (currentSlide > slideCount) currentSlide = 0;
            } else {
                currentSlide -=1;
                if (currentSlide < 0) currentSlide = slidesCount;
            } 
            // Переключение и анимация
            isBusy = true;
            $('.slider-image').animate({'opacity': 0}, 350, () => {
                $('.slider-image').css('background-image', 'url(' + slides[currentSlide] + ')');
                $('.slider-image').animate({'opacity': 1}, 350, () => isBusy = false);
        });
    }
    });
});
   
const slides = [
    'solider/bootstrap01.jpg',
    'solider/bootstrap02.jpg',
    'solider/bootstrap03.jpg',
    'solider/bootstrap04.jpg',
    'solider/bootstrap05.jpg',
    'solider/bootstrap06.jpg',
]