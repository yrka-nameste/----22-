// Создание обработчика клика в jQuery
// Ожидаем загрузки документа
$(document).ready(() => {
    //После загрузки ищем все элементы с классом .portfolio-item и задаём событие щелчка
    $('.portfolio-item').on('click', (e) => {
      e.stopPropagation();
      createPopup(e.currentTarget);
    });     

    // Щелчок по кнопке отзывов (Создание обработчика событий)
    $('.control-item').on('click', (e) => {
        e.stopPropagation();
        slideTestimonials(e.currentTarget);
    });
});

// Функция, выполняющаяся по клику на активный элемент
function createPopup(item) { 
    console.log(item);
    // Создание HTML элементов в jQuery
      // Передаём HTML в jQuery переменную
    const clicked = $(item);
      // Получаем ссылку из атрибута дата
    const src = clicked.data('src');
      // Создаём блок-контейнер
    const container = $('<div>', {'class': 'popup-container'});
      // Создаём картинку, задаём класс и путь
    const img = $('<img>', {'class':'popup', 'src': src});
      // Добавляем картинку в родительский блок
    container.append(img);
      // Блок с картинкой Рисуем в HTML-документ
    $('body').append(container);
    setTimeout(() => { // Установка задержек для плавного эффекта появления
      container.addClass('ready');
    });
      // Обработчик клика по картинке с методом удаления 
    img.on('click', () => {
        container.removeClass('ready'); // Установка задержек для плавного эффекта появления
        setTimeout(() => {
            container.remove();
        }, 250);       
    }); 
}

// Функция, выполняющаяся по клику на НЕактивный элемент
function slideTestimonials(item) {
    // Передаём HTML в jQuery переменную
    const clicked = $(item);
    // Проверяем, что страница неактивна
    if (clicked.hasClass('active')) {
        // Прекращаем работу программы, если уже активна
        return;
    } 
    // Код, листающий блок с карточками
      // Получаем номер кнопки
    const index = $('.control-item').index(clicked);
      // Измеряем ширину карточки вместе с margin -ключ true
    const width = $('.testimonials-card').outerWidth(true);
      // Измеряем необходимое для пролистыывания расстояяние и применяем к блоку обёртке
    const scroll = width * 2 * index;
    $('.testimonials-inner').css('transform', 'translateX(-'+ scroll +'px)');

    // Стили для плавного эффекта появления (Статус акт.кнопки будет меняться с пролистыванием)
      // Удаляем у всех кнопок класс active
    $('.control-item').removeClass('active');
      // Задаём класс active кнопки с текущим индексом 
    $('.control-item').eq(index).addClass('active');
    // Последние 2 строчки можно сделать так: $('.control-item').removeClass('active').eq(index).addClass('active');
}