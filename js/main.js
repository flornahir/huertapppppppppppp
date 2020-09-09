let btn = document.querySelector('.btn');
let btnIA = document.querySelector('.abrirBtn');
let btnIC = document.querySelector('.cerarBtn');
let items = document.querySelector('.items');
let item = document.querySelectorAll('.item');
let barra = document.getElementById("barra");
let btnArriba = document.querySelector('.btnUp');
let portadaY = document.getElementById('portada').offsetHeight;

document.addEventListener('contextmenu', event => event.preventDefault());

btn.addEventListener('click', function(e) {
    if (e.target.classList.contains('abrirBtn')) {
        items.classList.add('abierto');
        btn.classList.add('abierto');
    } else {
        items.classList.remove('abierto');
        btn.classList.remove('abierto');
    }
})

item.forEach((item) => item.addEventListener('click', function() {
    items.classList.remove('abierto');
    btn.classList.remove('abierto');
}));



btnArriba.addEventListener('click', function(e) {
    e.preventDefault();
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})


window.addEventListener('scroll', function(e) {
    e.preventDefault();
    let distanciaY = window.pageYOffset || document.documentElement.scrollTop;
    let altura = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    if (distanciaY > (portadaY * 2)) {
        setTimeout(() => btnArriba.style.display = 'flex', 500);
        btnArriba.style.animation = 'btnArribaIn .5s forwards';
    } else {
        setTimeout(() => btnArriba.style.display = 'none', 500);
        btnArriba.style.animation = 'btnArribaOut .5s forwards';
    }

    let scrolled = (distanciaY / altura) * 100;
    barra.style.width = scrolled + "%";

});