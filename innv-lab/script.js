function slideIn() {
    var box3 = document.getElementById('box3');
    var container = document.querySelector('.container');

    if (box3.classList.contains('box-hidden')) {
        box3.classList.remove('box-hidden');
        box3.classList.add('box-visible');
        container.classList.add('accommodate-box3');
    } else {
        box3.classList.add('box-hidden');
        box3.classList.remove('box-visible');
        container.classList.remove('accommodate-box3');
    }
    box3.style.height='400px'
}
