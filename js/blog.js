// -- ЛБ7 | Объявление инициализирующей функции 
$(document).ready(() => { // Ожидаем загрузки документа
    const data = JSON.parse(jsonData);
    drawCards(data);

    $('.search-do').on('click', () => { // Обработчик клика по кнопке поиск
        const search = $('.search-text').val().toLowerCase();
        filter(search, data); 

        initCardsHandler(data); // К инициатору
    });
 
    // Инициатор кликов по тегам (Т.к. после поиска или фильтра по тегам, клик по тегам больше не работает)
    function initCardsHandler (data) {
        $('.blog-tags a').off().on('click', (e) => {
           e.preventDefault();
           const search = $(e.currentTarget).text().toLowerCase();
           filter(search, data);
       });
    } 

    // Обработка щелчка мыши по тегу
    $('.blog-tags a').on('click', (e) => {
        e.preventDefault();
        const search = $(e.currentTarget).text().toLowerCase();
        filter(search, data);
    });
});


// Функия "рисования" (рисует записи блога согласно входной информации)
function drawCards (data) {
    $('.blog-container').html(''); // Очистка родительского контейнера и цикл по элементам объекта
    data.forEach((item, i) => {
        let card = $(cardHtml); // Для каждого элемента массива данных создаём копию  карточки блога
          // Передача данных из объекта в запись блога. Без этой части - 4 одинаковых блока на странице
        card.find('.blog-cover').css('background-image', 'url("img/blog/' + item.image + '")');
        card.find('.blog-title h2').text(item.title);
        card.find('.blog-text p').text(item.text);
        card.find('.blog-publisher-date').text(item.text); // Теперь на странице рисуются записи с разными картинками, заголовками и датами
        let tags = ''; // Относится к нижнему пункту
          // Ещё один ForEach(), чтобы для каждого тега "нарисовать" разные элементы списка с ссылкой: 
        // Обходим все тэги объекта
        item.tags.forEach((tag, i) => {
            // Создаём элемент списка
            tags += '<li><a href="' + tag + '">' + tag + '</a></li>';
        });
        // Добавляем все элементы в родительский <ul>
        card.find('.blog-tags ul').html(tags);

        $('.blog-container').append(card); // Метод «дорисовывания» элементов в HTML-тег
    }); 
} 

// Фильтруем исходный объект по условию
function filter(value, data) { 
    const newData = data.filter((item) => {
        let result = 0;
        result += item.image.toLowerCase().indexOf(value) > -1;
        result += item.title.toLowerCase().indexOf(value) > -1;
        result += item.text.toLowerCase().indexOf(value) > -1;
        result += item.date.toLowerCase().indexOf(value) > -1;
        result += item.tags.filter((tag) => {
            return tag.toLowerCase().indexOf(value) > -1;
        }).length;
        return result > 0;
    })
    drawCards(newData);
}

  // Для заполнения блога записями через JavaScript 
// Переменные с данными из файла
const jsonData = '[{"image": "blog01.jpg", "title": "Situr amera tempor", "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", "date": "2 days ago", "tags": ["canyon", "summer", "volkswagen"]},{"image": "blog02.jpg", "title": "Official grand tur", "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit animest id est laborum.", "date": "3 days ago", "tags": ["city", "girl", "people", "work"]}, {"image": "blog03.jpg", "title": "Cilpalorem set deserunt", "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", "date": "4 days ago", "tags": ["somersby", "summer", "ocean", "nothing"]}, {"image": "blog04.jpg", "title": "Lorem dolorem", "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", "date": "5 days ago", "tags": [ "people", "thinkin", "nothing"]}]';

const cardHtml = '<section class="blog-card"><div class="blog-header"><div class="blog-cover"></div></div><div class="blog-body"><div class="blog-title"><h2>Lorem ipsum dolor sit amet</h2></div><div class="blog-text"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div><div class="blog-tags"><ul><li><a href="#">lorem</a></li><li><a href="#">proident</a></li><li><a href="#">amet</a></li><li><a href="#">laborum</a></li></ul></div><div class="blog-footer"><div class="blog-published-date">3 дня назад</div></div></div></section>'
// ЛБ7 --