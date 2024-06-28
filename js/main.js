'use strick'
window.addEventListener('load', () => {
  // слайдер баннер
  const swiper = new Swiper('.swiper', {
      navigation: {
        nextEl: '.button-next',
        prevEl: '.button-prev',
      },
  });
  // слайдер баннер
  const body = document.body;
  // popup modal

  const popupBtns = document.querySelectorAll('.popup-btn');
  const modalPopup = document.querySelector('.modal-popup__wrapper');
  const modalPopupWindow = document.querySelector('.modal-popup');
  const closeModalPopup = modalPopup.querySelector('button');

  popupBtns.forEach(btn => {
    btn.addEventListener('click', addActiveClassModal);
  });

  closeModalPopup.addEventListener('click', removeActiveClassModal);
  modalPopup.addEventListener('click', removeActiveClassModal);
  // можно сделать через toggle
  function addActiveClassModal() {
    modalPopup.classList.add('active-modal');
    body.classList.add('scroll-lock');
  }
  function removeActiveClassModal(e) {
    if(e.target != modalPopupWindow) {
      modalPopup.classList.remove('active-modal');
      body.classList.remove('scroll-lock');
    }
  }
  // popup modal

  // burger
  const burgerBtn = document.querySelector('.burger');
  const navMenu = document.querySelector('.nav');
  const popupBtnNav = navMenu.querySelector('.popup-btn');

  burgerBtn.addEventListener('click', toggleActiveMenu);

  popupBtnNav.addEventListener('click', toggleActiveMenu);
  
  function toggleActiveMenu() {
    burgerBtn.classList.toggle('active-burger');
    navMenu.classList.toggle('active-menu');
    body.classList.toggle('scroll-lock');
  }
  // burger
});


