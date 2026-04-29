import '../scss/style.scss'
console.log('Works!')

// Получаем элементы
const burger = document.querySelector('.header__burger')
const menu = document.querySelector('.menu')
const overlay = document.querySelector('.overlay')
const closeButton = document.querySelector('.menu__burger-close')

// Функция для открытия меню и overlay
function openMenu() {
  menu.classList.add('menu--open') // Открываем меню
  overlay.classList.add('overlay--open') // Открываем overlay
  document.body.classList.add('lock')
}

// Функция для закрытия меню и overlay
function closeMenu() {
  menu.classList.remove('menu--open') // Закрываем меню
  overlay.classList.remove('overlay--open') // Закрываем overlay
  document.body.classList.remove('lock')
}

// При нажатии на burger открываем меню
burger.addEventListener('click', openMenu)

// При нажатии на кнопку закрытия в меню или на overlay закрываем меню
closeButton.addEventListener('click', closeMenu)
overlay.addEventListener('click', closeMenu)

// Получаем элементы
const chatButton = document.querySelector('.menu__button-chat')
const headerChat = document.querySelector('.header__chat')
const modalFeedback = document.querySelector('.modal__feedback')
const modalCall = document.querySelector('.modal__call')

// Получаем кнопки закрытия для каждого модального окна
const modalFeedbackClose = modalFeedback.querySelector('.modal__close')
const modalCallClose = modalCall.querySelector('.modal__close')

// Функция для открытия modal__feedback и overlay
function openFeedbackModal() {
  menu.classList.remove('menu--open')

  modalFeedback.classList.add('modal__feedback--open') // Открываем модальное окно feedback
  overlay.classList.add('overlay--open') // Открываем overlay
  document.body.classList.add('lock')
}

// Функция для открытия modal__call и overlay
function openCallModal() {
  menu.classList.remove('menu--open')

  modalCall.classList.add('modal__call--open') // Открываем модальное окно call
  overlay.classList.add('overlay--open') // Открываем overlay
  document.body.classList.add('lock')
}

// Функция для закрытия модального окна и overlay
function closeModal() {
  modalFeedback.classList.remove('modal__feedback--open') // Закрываем modal__feedback
  modalCall.classList.remove('modal__call--open') // Закрываем modal__call
  overlay.classList.remove('overlay--open') // Закрываем overlay
  document.body.classList.remove('lock')
}

// При нажатии на .menu__button-chat или .header__chat открываем modal__feedback
chatButton.addEventListener('click', openFeedbackModal)
headerChat.addEventListener('click', openFeedbackModal)

// При нажатии на .menu__button-phone или .header__phone открываем modal__call
const phoneButton = document.querySelector('.menu__button-phone')
const headerPhone = document.querySelector('.header__phone')
phoneButton.addEventListener('click', openCallModal)
headerPhone.addEventListener('click', openCallModal)

// При нажатии на кнопки закрытия или на overlay закрываем все окна
modalFeedbackClose.addEventListener('click', closeModal)
modalCallClose.addEventListener('click', closeModal)
overlay.addEventListener('click', closeModal)

// Получаем элементы
const readMoreButton = document.querySelector('.block__read-more')
const blockDescription = document.querySelector('.block__description')
const readMorePic = readMoreButton.querySelector('img') // Получаем картинку внутри кнопки .block__read-more

// Функция для открытия/закрытия описания и изменения текста и картинки
function toggleDescription() {
  // Добавляем или удаляем класс .open для описания и кнопки
  blockDescription.classList.toggle('open')
  readMoreButton.classList.toggle('open')

  // Меняем текст кнопки в зависимости от состояния
  if (blockDescription.classList.contains('open')) {
    // Вставляем картинку и текст в кнопку при открытии
    readMoreButton.innerHTML = `${readMorePic.outerHTML} Скрыть` // Добавляем картинку и текст
  } else {
    // Вставляем картинку и текст в кнопку при закрытии
    readMoreButton.innerHTML = `${readMorePic.outerHTML} Читать далее` // Добавляем картинку и текст
  }

  // Плавно переворачиваем картинку
  readMorePic.style.transform = blockDescription.classList.contains('open')
    ? 'rotate(0deg)'
    : 'rotate(180deg)'
}

// Добавляем обработчик события на кнопку
readMoreButton.addEventListener('click', toggleDescription)

// Получаем элементы
const brandsToggleButton = document.querySelector('.block__brands-toggle')
const brandsList = document.querySelector('.block__brands-list')
const showMorePicBr = brandsToggleButton.querySelector('img') // Получаем картинку в кнопке

// Функция для открытия/закрытия брендов и изменения текста и картинки
function toggleBrands() {
  // Добавляем или удаляем класс .show-all для списка брендов
  brandsList.classList.toggle('show-all')

  // Меняем текст кнопки в зависимости от состояния
  if (brandsList.classList.contains('show-all')) {
    brandsToggleButton.innerHTML = `${showMorePicBr.outerHTML} Скрыть` // Текст на кнопке "Скрыть"
  } else {
    brandsToggleButton.innerHTML = `${showMorePicBr.outerHTML} Показать все` // Текст на кнопке "Показать все"
  }

  // Плавно переворачиваем картинку
  showMorePicBr.style.transform = brandsList.classList.contains('show-all')
    ? 'rotate(0deg)'
    : 'rotate(180deg)'
}

// Добавляем обработчик события на кнопку
brandsToggleButton.addEventListener('click', toggleBrands)

const typesToggleButton = document.querySelector('.block__types-toggle')
const typesList = document.querySelector('.block__types')
const showMorePicTypes = typesToggleButton.querySelector('img') // Картинка для типов

// Функция для открытия/закрытия типов и изменения текста и картинки
function toggleTypes() {
  typesList.classList.toggle('show-all')
  if (typesList.classList.contains('show-all')) {
    typesToggleButton.innerHTML = `${showMorePicTypes.outerHTML} Скрыть`
  } else {
    typesToggleButton.innerHTML = `${showMorePicTypes.outerHTML} Показать все`
  }
  showMorePicTypes.style.transform = typesList.classList.contains('show-all')
    ? 'rotate(0deg)'
    : 'rotate(180deg)'
}

typesToggleButton.addEventListener('click', toggleTypes)

//скролл по точкам

const wrapper = document.querySelector('.block__brands-list')
const brands = document.querySelectorAll('.brand')
const dots = document.querySelectorAll('.block__dot')
const gap = 16

wrapper.addEventListener('scroll', function () {
  const brandWidth = brands[0].offsetWidth
  const scrollLeft = wrapper.scrollLeft

  const index = Math.round(scrollLeft / (brandWidth + gap))

  for (let i = 0; i < dots.length; i++) {
    if (i === index) {
      dots[i].classList.add('block__dot--active')
    } else {
      dots[i].classList.remove('block__dot--active')
    }
  }
})

for (let i = 0; i < dots.length; i++) {
  dots[i].addEventListener('click', function () {
    const brandWidth = brands[0].offsetWidth

    wrapper.scrollTo({
      left: i * (brandWidth + gap),
      behavior: 'smooth'
    })
  })
}

const typesWrapper = document.querySelector('.block__types')
const typeCards = document.querySelectorAll('.type')
const typesDots = document.querySelectorAll('.block__types-dot')
const typesGap = 16

typesWrapper.addEventListener('scroll', function () {
  const typeWidth = typeCards[0].offsetWidth
  const scrollLeft = typesWrapper.scrollLeft

  const index = Math.round(scrollLeft / (typeWidth + typesGap))

  for (let i = 0; i < typesDots.length; i++) {
    if (i === index) {
      typesDots[i].classList.add('block__types-dot--active')
    } else {
      typesDots[i].classList.remove('block__types-dot--active')
    }
  }
})

for (let i = 0; i < typesDots.length; i++) {
  typesDots[i].addEventListener('click', function () {
    const typeWidth = typeCards[0].offsetWidth

    typesWrapper.scrollTo({
      left: i * (typeWidth + typesGap),
      behavior: 'smooth'
    })
  })
}

const pricesWrapper = document.querySelector('.block__prices-buttons')
const priceCards = document.querySelectorAll('.button-mobile')
const pricesDots = document.querySelectorAll('.block__prices-dot')
const pricesGap = 16

pricesWrapper.addEventListener('scroll', function () {
  const priceWidth = priceCards[0].offsetWidth
  const scrollLeft = pricesWrapper.scrollLeft

  const index = Math.round(scrollLeft / (priceWidth + pricesGap))

  for (let i = 0; i < pricesDots.length; i++) {
    if (i === index) {
      pricesDots[i].classList.add('block__prices-dot--active')
    } else {
      pricesDots[i].classList.remove('block__prices-dot--active')
    }
  }
})

for (let i = 0; i < pricesDots.length; i++) {
  pricesDots[i].addEventListener('click', function () {
    const priceWidth = priceCards[0].offsetWidth

    pricesWrapper.scrollTo({
      left: i * (priceWidth + pricesGap),
      behavior: 'smooth'
    })
  })
}
