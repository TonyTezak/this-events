//Secret Menu Challenge
//Add event listeners to the following:


/*1) to the navmenu items (Home, Location, Blog) that will show and hide the contents for that specific navmenu item.*/

var clickNav = document.getElementsByClassName('navi');
for(var i = 0; i<clickNav.length; i++){
    clickNav[i].addEventListener('click', showMenu);
}

function showMenu(){
    //console.log(this.innerHTML);
    var getNav = this.querySelectorAll('.navi');
    if(getNav.style.display === 'block'){
        getNav.style.display = 'none;'
    }else{
        getNav.style.display = 'block';
    }
}
/*2) to each restaurant name that will show and hide (toggle) the secret menu item for that particular restaurant.*/


/*3) to the thumbs down icon that will add a count (counter) for each time the icon is clicked on.*/
