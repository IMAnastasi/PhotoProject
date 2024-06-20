// Подключение библиотек
import Swiper from "swiper";
import lozad from 'lozad'

// Объявление переменных
let groupButtons = document.querySelectorAll('.info__group-buttons__item');
let scrollToFormButtons = document.querySelectorAll('.scroll-to-form');
let questionButtons = document.querySelectorAll('.questions__answers-item--button');
let form = document.querySelector('.help-designer__form-inner');
let sendFormButton = document.querySelector('.send-form');
let buttonScroll = document.querySelector(".v-up");
let buttonBurger = document.querySelector('.menu-burger');
let menuBurger = document.querySelector('.mobile-menu');
let buttonWhatsApp = document.querySelector('.questions__info__block-inner--button');

// Активность кнопки
function activeButtonGroup(button) {
    groupButtons.forEach(item => item.classList.remove('active'))
    button.target.classList.add('active');
}

// Скролл к форме
function scrollToForm() {
    form.scrollIntoView({block: "center", behavior: "smooth"});
}

// Отправка формы
function sendForm() {
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let comment = document.getElementById('comment').value;

    alert(`Заявка успешно отправлена, [email: ${email}, phone: ${phone}, comment: ${comment}]`);
}

// Инициализация Слайдера
function initSliderExamplesPortraits() {
    const swiper = new Swiper(".examples-portraits__slider", {
        spaceBetween: 20,
        slidesPerView: 2,
        loop: true,
        breakpoints: {
            768: {
                spaceBetween: 25,
                slidesPerView: 1
            },
            360: {
                spaceBetween: 25,
                slidesPerView: 1
            },
            0: {
                spaceBetween: 25,
                slidesPerView: 1
            }
        },
    })

    document.querySelector('.swiper-button--next').addEventListener('click', () => {
        swiper.slideNext();
    })
    document.querySelector('.swiper-button--prev').addEventListener('click', () => {
        swiper.slidePrev();
    })
}

// Открытие/Закрытие Вопрос-ответа
function toggleQuestion(element) {
    element.target.classList.toggle('active');
    element.target.closest('.questions__answers-item').classList.toggle('active');
}

// Показ кнопки скролла вверх
function checkUp() {
    let ScrollWindow = window.scrollY || document.scrollTop;
    let element = document.querySelector(".v-up");

    if (ScrollWindow > window.innerHeight / 1.5) {
        element.classList.add("active");
    } else {
        element.classList.remove("active");
    }
}

// Инициализация анимации главного текста
function fadeText() {
    const elements = document.querySelectorAll(".title-fade");
    setTimeout(() => {
        elements.forEach(item => item.classList.add("fadeIn"));
    }, 1500)
}

// Открытие/Закрытие бургер меню
function ToggleMenu() {
    buttonBurger.classList.toggle('active');
    menuBurger.classList.toggle('active');
}

// Отправка сообщения в WhatsApp
function sendDataWhatsApp() {
    prompt('Введите вопрос который вас интересует', '');
    alert('Сообщение успешно отправлено, скоро с вами свяжется наш менеджер :)')
}

// Инициализация Ленивой загрузки
function initLazyLoading() {
    const observer = lozad();
    observer.observe();
}

// Обработчики событий и вызов функций
groupButtons.forEach(item => item.addEventListener('click', activeButtonGroup));
scrollToFormButtons.forEach(item => item.addEventListener('click', scrollToForm));
questionButtons.forEach(item => item.addEventListener('click', toggleQuestion));
sendFormButton.addEventListener('click', sendForm);
buttonScroll.addEventListener('click', () => window.scrollTo(0, 0));
buttonBurger.addEventListener('click', ToggleMenu);
buttonWhatsApp.addEventListener('click', sendDataWhatsApp);
document.addEventListener('scroll', checkUp);
document.addEventListener('DOMContentLoaded', () => {
    initLazyLoading();
});

initSliderExamplesPortraits();
fadeText();
