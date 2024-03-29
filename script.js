let logo = document.getElementById('logo');
let text = document.getElementById('text');
let bg = document.getElementById('background');

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    logo.style.marginTop = value * 1 + 'px';
    bg.style.backgroundPositionY = value * 1 + 'px';
});

var slider = document.getElementById("myRange");
var output = document.getElementById("value");

output.innerHTML = slider.value;

slider.oninput = function() {
    output.innerHTML = this.value;
}