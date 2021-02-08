function toggleDrawer(drawerConatiner) {


    if (drawerConatiner.style.display == 'none' || drawerConatiner.style.display == '') {
        drawerConatiner.style.display = 'block';

    } else {
        drawerConatiner.style.display = 'none';

    }

}

function closeDrawer(drawerConatiner) {


    if (drawerConatiner != undefined && drawer != undefined) {
        drawerConatiner.style = 'none';

    }
}


function toggleMoreOptions(optionsList) {

    if (optionsList.style.display == 'none' || optionsList.style.display == '') {
        optionsList.style.display = 'block';
    } else {
        optionsList.style.display = 'none';
    }
}



window.onload = function() {
    // drawer
    var menuBurger = window.document.getElementById('menu-burger');
    var drawerConatiner = window.document.getElementById('drawer-container');
    var drawer = window.document.getElementById('drawer');
    var drawerClose = window.document.getElementById('drawer-close');


    if (menuBurger != undefined) {
        menuBurger.onclick = () => toggleDrawer(drawerConatiner);
    }

    if (drawerConatiner != undefined) {

        drawerConatiner.onclick = function(e) {
            toggleDrawer(drawerConatiner);
        };
    }

    if (drawer != undefined) {
        drawer.onclick = function(e) {
            e.stopPropagation();
            e.preventDefault();
        };
    }

    if (drawerClose != undefined) {
        drawerClose.onclick = () => closeDrawer(drawerConatiner);
    }

    // more options

    var moreContent = window.document.getElementById('dashboard-appbar-more-content-container');
    var optionsList = window.document.getElementById('options-list');

    if (moreContent != undefined) {
        moreContent.onclick = () => toggleMoreOptions(optionsList);
    }




};