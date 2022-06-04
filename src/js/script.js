function hid() {
    alert('hello');
}

window.addEventListener('DOMContentLoaded', () => {
    
    const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu_item'),
    hamburger = document.querySelector('.hamburger'),
    tabs = document.querySelectorAll('.require_tab'),
    tabsContent = document.querySelectorAll('.require_content'),
    tabsParent = document.querySelector('.require_tabs');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
        })
    })

    function hideTabContent() { //данная функция скрывает весь контент с табов и убирает класс активности
        tabsContent.forEach(item => {
            item.style.display = 'none';
        });
        tabs.forEach(item => {
            item.classList.remove('require_tab_active');
        });
    }

    function showTabContent(i = 0) { //данная функция показывает контент таба и добавляет ему класс активности, нам нужно строго понимать какому элементу мы обращаемся, поэтому передаем номер элемента через аргумент i
        tabsContent[i].style.display = 'flex';
        tabs[i].classList.add('require_tab_active');
    }
 
    hideTabContent();
    showTabContent(); 

    tabsParent.addEventListener('click', (event) => {
        const target = event.target;

        if (target && target.classList.contains('require_tab')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    }); 

})