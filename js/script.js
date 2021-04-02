/* Alert message */
window.alert("If you are opening this url on mobile, switch to desktop mode..");

/* Navigations Toggles */
const nav = document.querySelector('.navigation');
const cont = document.querySelector('.content')
document.querySelector(".toggle").onclick = function() {
    this.classList.toggle('active');
    nav.classList.toggle('active');
    cont.classList.toggle('active');
}

/* Changing Theme Function */
function changeTheme() {
    var navi = document.querySelector('.navigation');
    var panel1 = document.querySelector('.panel1');
    var panel2 = document.querySelector('.panel2');
    var anchor = document.querySelectorAll('a');
    var desig = document.querySelector('#designation');
    navi.classList.toggle('darkmode');
    panel1.classList.toggle('darkmode');
    panel2.classList.toggle('darkmode');
    anchor[0].classList.toggle('darkmode');
    anchor[1].classList.toggle('darkmode');
    anchor[2].classList.toggle('darkmode');
    anchor[3].classList.toggle('darkmode');
    anchor[4].classList.toggle('darkmode');
    anchor[5].classList.toggle('darkmode');
    desig.classList.toggle('darkmode');
}

/* Toggle profile details */
const prof = document.querySelector('#prof');
prof.addEventListener('click', function() {
    var show = document.querySelector('.panel2');
    show.classList.toggle('active');
});


/* Toggle youtube playlists */
const play = document.querySelector('#play');
play.addEventListener('click', function() {
    var show = document.querySelector('#course');
    show.classList.toggle('active');
});