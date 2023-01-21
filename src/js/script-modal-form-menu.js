export {
    listenerOfMenuLogo, 
    listenerOfMenuLogoClose, 
    listenerOfMenuLogoKeydown, 
    listenerOfChatLogo, 
    listenerOfFeedbackCloseLogo, 
    listenerOfFeedbackLogoKeydown, 
    clickOnBlurBodyMain, 
    listenerOfChatLogoHeader,
    listenerOfCallLogoModal,
    listenerOfCallCloseLogo,
    listenerOfModalCallKeydown,
    listenerOfCallLogoHeader
};

let menuBurger = document.querySelector('.body__modal-menu');
let menuLogo = document.querySelector('.header__logo-menu');
let menuLogoClose = menuBurger.querySelector('.menu-header__logo-modal-menu');
let divContainer = document.querySelector('.body__div-container');
let chatLogoModal = menuBurger.querySelector('.div-logos__logo-chat');
let modalFeedback = document.querySelector('.body__modal-feedback');
let feedbackCloseLogo = modalFeedback.querySelector('.modal-feedback__logo-close');
let chatLogoHeader = divContainer.querySelector('.header__logo-chat');
let callLogoModal = menuBurger.querySelector('.div-logos__logo-call');
let modalCall = document.querySelector('.body__modal-call');
let callCloseLogo = modalCall.querySelector('.modal-call__logo-close');
let callLogoHeader = divContainer.querySelector('.header__logo-call');
let bodyMain = divContainer.querySelector('.body__main');

// Добавление обработчика на модальное/боковое Меню
let listenerOfMenuLogo = menuLogo.addEventListener('click', function() {
    menuBurger.classList.add('visible-modal-menu');
    divContainer.classList.add('body__container-opacity');
});

let listenerOfMenuLogoClose = menuLogoClose.addEventListener('click', function() {
    menuBurger.classList.remove('visible-modal-menu');
    divContainer.classList.remove('body__container-opacity');
});

let listenerOfMenuLogoKeydown = document.addEventListener('keydown', function(evt) {
    if (evt.keyCode === 27) {
    menuBurger.classList.remove('visible-modal-menu'); 
    divContainer.classList.remove('body__container-opacity'); 
    }
});

// Добавление обработчика на форму "Обратной связи"
let listenerOfChatLogo = chatLogoModal.addEventListener('click', function() {
    modalFeedback.classList.add('visible-feedback-call');
    divContainer.classList.add('body__container-opacity');
});

let listenerOfFeedbackCloseLogo = feedbackCloseLogo.addEventListener('click', function() {
    modalFeedback.classList.remove('visible-feedback-call');
    divContainer.classList.remove('body__container-opacity'); 
});

let listenerOfFeedbackLogoKeydown = document.addEventListener('keydown', function(evt) {
    if (evt.keyCode === 27) {
        modalFeedback.classList.remove('visible-feedback-call');
    }
});

// Добавление обработчика на "заблюренную область", при нажатии закрывается форма или меню
let clickOnBlurBodyMain = bodyMain.addEventListener('click', function() {
    menuBurger.classList.remove('visible-modal-menu');
    modalFeedback.classList.remove('visible-feedback-call');
    modalCall.classList.remove('visible-feedback-call');
    divContainer.classList.remove('body__container-opacity'); 
});

// Добавление обработчика на лого чата в шапке сайта
let listenerOfChatLogoHeader = chatLogoHeader.addEventListener('click', function() {
    modalFeedback.classList.add('visible-feedback-call');
    divContainer.classList.add('body__container-opacity');
});

// Добавление обработчика на форму "Заказать звонок"
let listenerOfCallLogoModal = callLogoModal.addEventListener('click', function() {
    modalCall.classList.add('visible-feedback-call');
    divContainer.classList.add('body__container-opacity');  
});

let listenerOfCallCloseLogo = callCloseLogo.addEventListener('click', function() {
    modalCall.classList.remove('visible-feedback-call');
    divContainer.classList.remove('body__container-opacity');  
});

let listenerOfModalCallKeydown = document.addEventListener('keydown', function(evt) {
    if (evt.keyCode === 27) {
        modalCall.classList.remove('visible-feedback-call');
    }
});

// Добавление обработчика на лого звонка в шапке сайта
let listenerOfCallLogoHeader = callLogoHeader.addEventListener('click', function() {
    modalCall.classList.add('visible-feedback-call');  
    divContainer.classList.add('body__container-opacity'); 
})