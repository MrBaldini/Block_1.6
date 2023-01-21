export {listenerOfReadMoreButton, listenerOfHideTextButton};

let readMoreButton = document.querySelector('.p-rm__read-more');
let hiddenText = document.querySelector('.p-rm__p-hidden');
let hideTextButton = document.querySelector('.p-rm__hide-text');
let halfText = document.querySelector('.p-rm__p-half');

// Добавляем обработчик на кнопку "Читать далее"
let listenerOfReadMoreButton = readMoreButton.addEventListener('click', function() {
    hiddenText.classList.add('visible-text-read-more');
    readMoreButton.classList.add('hide-read-more-btn');
    hideTextButton.classList.add('visible-hide-btn');
    halfText.classList.add('hide-half-text');
});

// Добавляем обработчик на кнопку "Скрыть"
let listenerOfHideTextButton = hideTextButton.addEventListener('click', function() {
    hiddenText.classList.remove('visible-text-read-more');
    readMoreButton.classList.remove('hide-read-more-btn');
    hideTextButton.classList.remove('visible-hide-btn');
    halfText.classList.remove('hide-half-text');
})