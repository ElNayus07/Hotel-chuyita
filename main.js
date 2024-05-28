document.addEventListener('DOMContentLoaded', function () {
    const sliderFrame = document.querySelector('.slider-frame ul');
    const slides = document.querySelectorAll('.slider-frame li');
    let index = 0;

    function showSlide(i) {
        index = (i + slides.length) % slides.length;
        sliderFrame.style.transform = `translateX(${-index * 100}%)`;
    }

    setInterval(() => {
        showSlide(index + 1);
    }, 7000); // Cambia la imagen cada 3 segundos
});