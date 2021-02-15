function toogleMenu() {
    var menu = document.getElementById('more-options-menu');

    if (menu.style.display == 'none' || menu.style.display == '') {
        menu.style.display = 'block';
    } else {
        menu.style.display = 'none';
    }
}





window.onload = function() {

    var menuButton = document.getElementById('dashboard-appbar-more-content-container');

    menuButton.onclick = function() {
        toogleMenu();
    };


};