

$(document).ready(function(){

  //$('#navigation').localScroll();
  //$('#navigation').collapse('hide');

  var latLng = new google.maps.LatLng(52.959941,0.588637);

  var mapOptions = {
    center: latLng,
    zoom: 14,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    options: {scrollwheel: false}
  };

  var map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);

  var marker = new google.maps.Marker({
    position: latLng,
    map: map,
    title:'The Old Maltings'
  });

  $('.help-inline').hide();

  $('.toggleTrigger').click(function() {
    //$('.toggleTarget').toggle('slow');
    if ($('.toggleTarget').is(':hidden')) {
      $('.toggleTarget').slideDown('slow', 'swing');
      $(this).html('Hide Terms and Conditions');
    }
    else{
      $('.toggleTarget').hide();
      $(this).html('Show Terms and Conditions');
    }

    return false;
  });

  $('.nav li').click(function(){

    $(this).addClass('active').siblings().removeClass('active');
    $('#navigation').collapse('hide');


  });

  $('.banner').hover(function() {
    $(this).find('.banner-caption').slideToggle('fast');
  });

  var hasError = false;
  var showError = function(inputSelector) {
    $(inputSelector).siblings().first().show();
    $(inputSelector).closest('.control-group').addClass('error');
  };

  $('#enquiry').click(function() {
    var btn = $(this),
      hasError = false,
      _name = $('#inputName').val(),
      _email = $('#inputEmail').val(),
      _msg = $('#inputMessage').val();

    $('.control-group').removeClass('error');
    $('.help-inline').hide();

    if (_name.length === 0) {
      showError('#inputName');
      hasError = true;
    }
    if (_email.length === 0) {
      showError('#inputEmail');
      hasError = true;
    }
    if (_msg.length === 0) {
      showError('#inputMessage');
      hasError = true;
    }
    if (hasError) {
      return;
    }
    btn.button('loading');

    $.ajax({
        url: 'https://formspree.io/theoldmaltingsthornham@gmail.com',
      method: 'POST',
      data: {message: _msg, email: _email, name: _name},
      dataType: 'json',
      success: function (data) {
        btn.siblings().first().show();
        btn.closest('.control-group').addClass('success');
        btn.button('reset');
      },
      error: function () {
        btn.siblings().first().html('Sorry there was an error submitting the form. Please email theoldmaltingsthornham@gmail.com.');
        btn.siblings().first().show();
        btn.closest('.control-group').addClass('error');
        btn.button('reset');
      }
    });
  });

});
