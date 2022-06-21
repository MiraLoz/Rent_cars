document.getElementsByClassName("main-title")[0].style.color = "#2E9000";

document.getElementById("main-action").onclick = function (){
    document.getElementById("cars").scrollIntoView({behavior:"smooth"})
};

var buttons = document.getElementsByClassName("car-button");

for (var i = 0; i<buttons.length; i++){
    buttons[i].onclick = function (){
        document.getElementById("price").scrollIntoView({behavior:"smooth"})
    }
};

document.getElementById("price-action").onclick = function (){
    if (document.getElementById("name").value ===""){
        alert("Заполните поле 'Имя'!");
    } else if (document.getElementById("phone").value ===""){
        alert("Заполните поле 'Телефон'!");
    } else if (document.getElementById("car").value ===""){
        alert("Заполните поле 'Автомобиль'!");
    } else {
        alert("Спасибо за заявку, мы свяжемся с вами в ближайшее время!");
    }
};

document.addEventListener("DOMContentLoaded", function () {
    let layer = document.querySelector('.price-img');
    document.addEventListener('mousemove', (event) => {
        layer.style.transform = 'translate3d(' + ((event.clientX * 0.5) / 5) + 'px,' + ((event.clientY * 0.5) / 15) + 'px,0px)';
    });

    const elem = document.querySelector(".main");
    document.addEventListener('scroll', () => {
        elem.style.backgroundPositionX = '0' + (0.2 * window.pageYOffset) + 'px';
    })
});
