window.onload=function(){
    const hamburger = document.getElementById('hamburger');
    
    hamburger.onclick=function(){
        let topNav = document.getElementById('myTopnav');
        if(topNav.className ==='responsive'){
            topNav.className ='';
        }
        else{
            topNav.className ='responsive';
        }
    }

   
// (ЛБ6) Условие работы прокрутки по клику
const menulist = document.querySelectorAll('.menu-element'); /*Закрепляем header страницы*/
// Проходим циклом по найденым элементам
menulist.forEach(function(element) {
    // Каждому элементу создаём обработчик события "клик мыши"
    element.addEventListener('click', function(event)  {
        // Считываем атрибут data у элемента, по которому был произведён щелчок
        const elementLink = element.dataset.link;

        // Проверяем, есть ли альтернативная ссылка и тогда выполняем дальше
        if (elementLink) {
            // Прерываем стандартное поведение ссылки
            event.preventDefault();
            // Плавно прокручиваем страницу к искомому блоку
            document.getElementById(elementLink).scrollIntoView({ behaviour: 'smooth'});    
        }
        // Иначе ничего не делаем            
    });
});

}
