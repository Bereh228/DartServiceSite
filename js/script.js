const dropDownMenuItems = document.querySelectorAll('.favor__element-item');

const headerExit = document.getElementById('header__exit');
const header = document.getElementById('header');

const hamburger = document.getElementById('hamburger');
const hamburgerItems = document.querySelectorAll('.hamburger__item');

const modalExitLog = document.querySelector('.modal__login-exit');
const modalExitReg = document.querySelector('.modal__reg-exit');
const modalExitVideo = document.querySelector('.modal__video-exit');
const modal = document.getElementById('modal');

function bodyOverflow(item){
  if(item.classList.contains('header_active')){
    document.body.style.overflow = 'hidden';
  }
  else{
    document.body.style.overflow = 'visible';
  }
}

function activeNoHamburger(item){
  item.addEventListener('click',function(){
    header.classList.toggle('header_active');
    bodyOverflow(header);  
  }); 
}

function removeClassActiveHamburger(item){
  item.forEach(element => {
    element.classList.remove('hamburger__item_active');
  });
}

function checkHamburger(){
  let windowY = window.pageYOffset;

  if(windowY > 350 && windowY < 5307){
    hamburgerItems.forEach(element => {
      element.classList.add('hamburger__item_active');
      hamburger.classList.add('hamburger_bMain');
    });
  }else if(windowY > 5307 && windowY > 350){
    removeClassActiveHamburger(hamburgerItems);
    hamburger.classList.remove('hamburger_bMain');
  }
  else{
    removeClassActiveHamburger(hamburgerItems);
    hamburger.classList.remove('hamburger_bMain');
  }
}


activeNoHamburger(headerExit);
activeNoHamburger(hamburger);


document.addEventListener('DOMContentLoaded',checkHamburger);
window.addEventListener('scroll',checkHamburger);

for(let item of dropDownMenuItems){
    item.addEventListener('click',function(){
        item.classList.toggle('favor__element-item_active');
    });
}


 $('.about__carousel').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    vertical: true,
    touchThreshold: 20,
    verticalSwipping: true,
    swipe: true,
    waitForAnimate: false,
    responsive: [
      {
        breakpoint: 992,
        settings:{
          vertical: false,
          slidesToShow: 1,
          arrows: false
        }
      }
    ]
    
  });

  $('.promo__movie-button').click(function(){
      $(this).fadeOut();
      $('.promo__movie-descr').fadeOut();
      $('.promo__youtube').fadeIn();
  })

  $('.team__carousel').slick({
    centerMode: true,
    centerPadding: '10px',
    slidesToShow: 3,
    arrows: false,
    touchThreshold: 20,
    dots: true,
    responsive: [
      {
        breakpoint: 992,
        settings:{
          slidesToShow: 1,
          centerMode: false,
          centerPaddint: '40px',
          slidesToShow: 1,
          arrows: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: false,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });


function fadeInLogin(){
    $('#modal__login').fadeIn('slow');
    modal.classList.toggle('modal_active');
}

function fadeInReg(){
    $('#modal__reg').fadeIn('slow');
    modal.classList.toggle('modal_active');
}

  $('.modal__login-header__reg').click(function(){
    $('#modal__login').fadeOut('fast');
    setTimeout(fadeInReg,700);
    modal.classList.toggle('modal_active');
  });

$('.modal__reg-header__log').click(function(){
    $('#modal__reg').fadeOut('fast');
    setTimeout(fadeInLogin, 700);
    modal.classList.toggle('modal_active');
});

$('#headerSiglog').click(function(){
    $('#modal, #modal__login').fadeIn('slow');
    modal.classList.toggle('modal_active');
    header.classList.remove('header_active');
    document.body.style.overflow = 'visible';
});


$(window).scroll(function(){
  if($(this).scrollTop()> 1300){
    $('.arrowUp').fadeIn();
  }else{
    $('.arrowUp').fadeOut();
  }
});

$(".arrowUp").click(function(){
  const _href = $(this).attr("href");
  $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
  return false;
});

modalExitLog.addEventListener('click',function(){
  $('#modal, #modal__login').fadeOut();
  modal.classList.toggle('modal_active');
});

modalExitReg.addEventListener('click',function(){
  $('#modal, #modal__reg').fadeOut();
  modal.classList.toggle('modal_active');
});

modalExitVideo.addEventListener('click',function(){
  $('#modal, #modal__video').fadeOut();
  modal.classList.toggle('modal_active');
});

$('#button__promo_video').on('click',function(){
  $('#modal, #modal__video').fadeIn('slow');
  modal.classList.toggle('modal_active');
});

$('#button__promo_buy').on('click',function(){
  $('#modal, #modal__buy').fadeIn('slow');
  modal.classList.toggle('modal_active');
});

$('#modal__buy-exit').on('click',function(){
  $('#modal, #modal__buy').fadeOut();
  modal.classList.toggle('modal_active');
});

$('#button__promo_try, #button__about, #button__services').on('click',function(){
  $('#modal, #modal__try').fadeIn('slow');
  modal.classList.toggle('modal_active');
});

$('#modal__try-exit').on('click',function(){
  $('#modal, #modal__try').fadeOut();
  modal.classList.toggle('modal_active');
});

new WOW().init();



$(".arrowUp").click(function(){
  const _href = $(this).attr("href");
  $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
  return false;
});

$('.header__link').each(function(i){
  $(this).on('click',function(e){
    e.preventDefault();

    if(header.classList.contains('header_active')){
      header.classList.toggle('header_active');
      bodyOverflow(header);
    }

    const _href = $(this).attr("href");
    $('html, body').animate({scrollTop: $(_href).offset().top+"px"});
  })
})

if(window.innerWidth < 768){
  header.classList.remove('animate__backInDown');
  console 
}