function loadingDiv(){
  $('.loading p span').css({
    'animation-play-state' : 'paused',
  });
  $('#loadJS').css({
      'opacity' : '0',
  });
  $('#wrap').css({
    'opacity' : '1',
  });
};

$( window ).on( "load", loadingDiv );

// -------------Cursor-------------
gsap.set('.cursorA',{xPercent:-50,yPercent:-50});
gsap.set('.cursorB',{xPercent:-50,yPercent:-50});
gsap.set('.cursorC',{xPercent:-50,yPercent:-50});
gsap.set('.cursorD',{xPercent:-50,yPercent:-50});

var CA = document.querySelector('.cursorA');
var CB = document.querySelector('.cursorB');
var CC = document.querySelector('.cursorC');
var CD = document.querySelector('.cursorD');

window.addEventListener('mousemove',e => {
    gsap.to(CA,0.13,{x:e.clientX,y:e.clientY, opacity:1});
    gsap.to(CB,1.3,{x:e.clientX,y:e.clientY});
    gsap.to(CC,2.2,{x:e.clientX,y:e.clientY});
    gsap.to(CD,4.0,{x:e.clientX,y:e.clientY});
    gsap.to(CB,{delay: 2,opacity:1});
    gsap.to(CC,{delay: 3,opacity:1});
    gsap.to(CD,{delay: 4,opacity:1});
});

// -------------ImageHoverJS-------------
new hoverEffect({
    parent: document.querySelector('.Places'),
    intensity: 0.9,
    image1:'Img/Places.jpg',
    image2:'Img/MeetMeInTheSkyCover.jpg',
    displacementImage:"Img/dis.png",
    speedIn: 0.7,
    speedOut: 0.7,
});

// -------------JQHover-------------
$(document).ready(function(){
  // -------------cursorA-------------
  $('.Places, #maive, #xo, #mxa, a').hover(function(){
    $('.cursorA').animate({
      'width' : '61.18px',
      'height' : '61.18px',
    });
    }, function(){
    $('.cursorA').animate({
      'width' : '113px',
      'height' : '113px',
    });
  });

  $('.Places').hover(function(){ // -------------cursorABlur-------------
    $('.cursorA').css({
      'backdrop-filter' : 'blur(7px)',
    });
    }, function(){
    $('.cursorA').css({
      'backdrop-filter' : 'blur(0px)',
    });
  });
  // -------------cursorB-------------
  $('.Places, #maive, #xo, #mxa, a').hover(function(){
    $('.cursorB').animate({
      'width' : '140px',
      'height' : '140px',
    });
    }, function(){
    $('.cursorB').animate({
      'width' : '61.18px',
      'height' : '61.18px',
    });
  });
  // -------------cursorC-------------
  $('.Places, #maive, #xo, #mxa, a').hover(function(){
    $('.cursorC').animate({
      'width' : '90px',
      'height' : '90px',
    });
    }, function(){
    $('.cursorC').animate({
      'width' : '31px',
      'height' : '31px',
    });
  });
  // -------------cursorD-------------
  $('.Places, #maive, #xo, #mxa, a').hover(function(){
    $('.cursorD').animate({
      'width' : '122px',
      'height' : '122px',
    });
    }, function(){
    $('.cursorD').animate({
      'width' : '13px',
      'height' : '13px',
    });
  });
});
