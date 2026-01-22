let slideIndex = 1;

// Эта функция срабатывает при нажатии на стрелки
function moveSlide(n) {
    // 1. Меняем индекс
    slideIndex += n;
    // 2. СРАЗУ вызываем функцию показа, чтобы картинка изменилась
    showSlides(slideIndex);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("slide");

    // Проверка границ
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }

    // Прячем все слайды
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Показываем нужный (исправил lideIndex на slideIndex)
    if (slides.length > 0) {
        slides[slideIndex - 1].style.display = "block";
    }
}

// Запускаем первый раз при загрузке
showSlides(slideIndex);