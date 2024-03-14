function slideIn() {
    var box3 = document.getElementById('box3');
    if (box3.classList.contains('box-hidden')) {
        box3.classList.remove('box-hidden');
        box3.classList.add('box-visible');
    } else {
        box3.classList.add('box-hidden');
        box3.classList.remove('box-visible');
    }
    box3.style.height='400px'
}
