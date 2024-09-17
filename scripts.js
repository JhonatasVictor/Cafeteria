document.addEventListener('DOMContentLoaded', function() {
    var menuToggle = document.getElementById('menu__toggle');
    var menuItems = document.querySelectorAll('.menu__item');

    menuItems.forEach(function(item) {
        item.addEventListener('click', function() {
            menuToggle.checked = false;
        });
    });
});