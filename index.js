//getting the navbar ready
const togleButton = document.querySelector('#mobile');
const menuList = document.querySelector('.bar');
const container = document.querySelector('body');
const exitButton = document.querySelector('#exit')

togleButton.addEventListener('click', ()=>{
    menuList.classList.toggle('show');

    //diming the screan elements to use
    const overlay = document.createElement('div');

    overlay.classList.add('overlay');
    container.appendChild(overlay);
    
});



// removing the menu
exitButton.onclick = function removing(){

    //removing the unnessinary elements
    if(document.querySelector('.overlay') != null){
        menuList.classList.toggle('show');
        container.removeChild(document.querySelector('.overlay'));}
};

// removing menu if screen changes


window.onresize = function handleScreenWidthChange() {
    let screenWidth = window.innerWidth;

    if (screenWidth > 1000) {

        if(document.getElementsByClassName('overlay').length != 0){
            menuList.classList.toggle('show');
            container.removeChild(document.querySelector('.overlay'));
        }
    };
};



