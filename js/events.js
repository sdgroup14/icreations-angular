// ABOUT US SHOW MORE TEXT

$('.show-more, .show-more-active').on('click', function() {
  var this_btn = $(this);
  $('.show-more').css('height', '100%');
  $('.offer-txt').removeClass('offer-txt-active');
  $('.show-more-ico').removeClass('show-more-ico-active');
  $('.show-more').show().removeClass('show-more-hide');
  $('.show-more-ico').css('height', '0');
  $(this).siblings('.offer-txt').addClass('offer-txt-active');
  $(this).addClass('show-more-hide');
  $(this).css('height', '0');
  $(this).siblings('.show-more-ico').css('height', '100%');
  setTimeout(function() {
    this_btn.siblings('.show-more-ico').addClass('show-more-ico-active');
  }, 150);
});

// ABOUT US HIDE MORE TEXT
$('.show-more-ico').on('click', function() {
  var this_btn = $(this);
  this_btn.css('height', '0');
  $(this).siblings('.show-more').css('height', '100%');
  $(this).siblings('.offer-txt').removeClass('offer-txt-active');
  $(this).removeClass('show-more-ico-active');
  $(this).siblings('.offer-txt').removeClass('offer-txt-active');
  setTimeout(function() {
    this_btn.siblings('.show-more').removeClass('show-more-hide');
    this_btn.siblings('.show-more').addClass('show-more-active');
    setTimeout(function() {
      this_btn.siblings('.show-more').removeClass('show-more-active');
    }, 150);
  }, 150);
});

// CONTACTS SHOW INPUT

$('.write').on('click', function() {
  $('.tint').addClass('tint-active');
  var this_el = $(this).closest('.contacts-l-item');
  this_el.find('.tint').removeClass('tint-active');
  this_el.find('.contacts-btns').hide();
  this_el.find('.hidden-form').show();
});

// CONTACTS HIDE INPUT
$('.btn-cancel').on('click', function(e) {
  e.preventDefault();
  $('.tint').removeClass('tint-active');
  $('.hidden-form').hide();
  $('.contacts-btns').show();
});

// CONTACTS SHOW/HIDE INPUT PLACEHOLDER

$('.inp').on('focus', function() {
  console.log($(this).closest('label').find('.inp-error-wrapper').removeClass('inp-error-wrapper-active'));
  $('.inp').each(function(index) {
    if ($.trim($(this).val()) == '') {
      $(this).siblings('.inp-placeholder').removeClass('inp-placeholder-active');
    }
  });
  $(this).siblings('.inp-placeholder').addClass('inp-placeholder-active');
});

// CONTACTS HIDE INPUT PLACEHOLDER CLICK ON BODY

$(document).on('click', function(e) {
  var active_placeh = $('.inp-placeholder-active').siblings('.inp');
  if (!$(e.target).closest(active_placeh).length) {
    $('.inp').each(function(index) {
      if ($.trim($(this).val()) == '') {
        $(this).siblings('.inp-placeholder').removeClass('inp-placeholder-active');
      }
    });
  }
});

// MOBILE MENU EFFECT

$('.mob-menu-btn').on('click', function() {
  if (window.matchMedia('(max-width: 1024px)').matches) {
    $('body').toggleClass('body-hidden');
    $('.mobile-tint-wrapeer').toggleClass('mobile-tint-wrapeer-active');
    $('.btn-mob-ico').toggle();
    $('.btn-mob-close').toggle();

    var time_index = 50;
    var global_timer = setTimeout(function() {
      $('.btn-mob-close').toggleClass('btn-mob-close-active');
      $('.menu-l-item').each(function(index) {
        var index_item = index;
        var this_item = $(this);

        if ($('.mobile-tint-wrapeer').hasClass('mobile-tint-wrapeer-active')) {
          setTimeout(function() {
            this_item.addClass('menu-l-item-show');
          }, index_item * time_index);
        } else {
          this_item.removeClass('menu-l-item-show');
        }
      });
      if ($('.mobile-tint-wrapeer').hasClass('mobile-tint-wrapeer-active')) {
        setTimeout(function() {
          $('.block-social').addClass('block-social-active');
        }, ($('.menu-l-item').length * time_index) + 400);
      } else {
        $('.block-social').removeClass('block-social-active');
      }
    }, 200);
  }
});

// ELEMENTS SHOW ONE BY ONE

$('.global-hide').each(function(index) {
  var time_index = 150;
  var index_item = index;
  var this_item = $(this);
  setTimeout(function() {
    this_item.addClass('global-show');
  }, index_item * time_index);
});


// SWIPER FOR WORKS.PHP

// var Swiper = new Swiper('.swiper-container', {
//   observer: true,
//   paginationClickable: true,
//   slidesPerView: 1,
//   nextButton: '.swiper-next',
//   prevButton: '.swiper-prev'
// });


// SHOW GALLERY

$('.works-item').on('click', function() {
  $('.gallery').height($(document).height() - ($('header').height() + $('footer').height()));
  var path_to_gal = $(this).attr('data-project');
  var project_href = $(this).attr('data-href');
  console.log(path_to_gal);
  console.log(project_href);
  Swiper.appendSlide([
    '<div class="swiper-slide"><img src="img/works/' + path_to_gal + '/1.jpg" alt=""></div>',
    '<div class="swiper-slide"><img src="img/works/' + path_to_gal + '/2.jpg" alt=""></div>',
    '<div class="swiper-slide"><img src="img/works/' + path_to_gal + '/3.jpg" alt=""></div>',
    '<div class="swiper-slide"><img src="img/works/' + path_to_gal + '/4.jpg" alt=""></div>'
  ]);
  $('.work-link').text(project_href).attr('href', project_href);
  Swiper.update(true);
  setTimeout(function() {
    $('.gallery').addClass('gallery-active');
  }, 1);
});

// CLOSE GALLERY

$('.close-gal').on('click', function() {
  $('.gallery').removeClass('gallery-active');
  Swiper.removeAllSlides();
  Swiper.updateProgress();
  Swiper.slideTo(0);
});


$('.has-spinner').on('click', function(e) {
  e.preventDefault();
var testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
var testName = /[a-zA-Z0-9]/i;

if (!testEmail.test($('.inp_mail').val())){
  $('.error-mail').addClass('inp-error-wrapper-active');
} 
if (!testName.test($('.inp_name').val())) {
  $('.error-name').addClass('inp-error-wrapper-active');
} 
if ($.trim($('.inp_txt').val()) == '') {
  $('.error-txt').addClass('inp-error-wrapper-active');
}
if($.trim($('.inp_txt').val()) !== '' && testName.test($('.inp_name').val()) && testEmail.test($('.inp_mail').val())) {
  
  var btn = $('.btn-send-txt');
  var data = $('#form-msg').serialize();
  $.ajax({
    type: "POST",
    data: data,
    url: "mail.php",
    beforeSend: function(e) {
      $('.loader').delay(500).addClass('loader-active');
      $(btn).text('');
    },
    error: function(e) {
      setTimeout(function() {
        $('.loader').removeClass('loader-active');
        $('.fail').addClass('fail-active');
        $(btn).text('sending failed');
      }, 800);
    },
    success: function(e) {
      console.log(e.length);
      if (e.length == 0) {

              setTimeout(function() {
        console.log('empty');
        $('.fail').addClass('fail-active');
        $('.loader').removeClass('loader-active');
        $(btn).text('empty fields');
      }, 800);
      } else if (e.length == 1){
      setTimeout(function() {
        $('.loader').removeClass('loader-active');
        $('.sucsess').addClass('sucsess-active');
        $(btn).text('message sent');
        $('.btn-send').attr('disabled', 'disabled');
      }, 800);
      }
    }
  });
}
});


$(document).on('click', function(e) {
  var btn_send = $('.btn-send-txt');
  if (!$(e.target).closest(btn_send).length && $('.btn-send').attr('disabled') !== 'disabled') {
    btn_send.text('send message');
    $('.loader').removeClass('loader-active');
    $('.fail').removeClass('fail-active');
    $('.sucsess').removeClass('sucsess-active');
  }
});


$('textarea').on('keyup input', function() { 
  $(this).css('height', 'auto').css('height', this.scrollHeight + (this.offsetHeight - this.clientHeight));
});