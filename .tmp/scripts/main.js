"use strict";

$(document).ready(function () {
  //$('#navigation').localScroll();
  //$('#navigation').collapse('hide');

  var latLng = new google.maps.LatLng(52.959941, 0.588637);

  var mapOptions = {
    center: latLng,
    zoom: 14,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    options: { scrollwheel: false }
  };

  var map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);

  var marker = new google.maps.Marker({
    position: latLng,
    map: map,
    title: "The Old Maltings"
  });

  $(".help-inline").hide();

  $(".toggleTrigger").click(function () {
    //$('.toggleTarget').toggle('slow');
    if ($(".toggleTarget").is(":hidden")) {
      $(".toggleTarget").slideDown("slow", "swing");
      $(this).html("Hide Terms and Conditions");
    } else {
      $(".toggleTarget").hide();
      $(this).html("Show Terms and Conditions");
    }

    return false;
  });

  $(".nav li").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
    $("#navigation").collapse("hide");
  });

  $(".banner").hover(function () {
    $(this).find(".banner-caption").slideToggle("fast");
  });

  var hasError = false;
  var showError = function showError(inputSelector) {
    $(inputSelector).siblings().first().show();
    $(inputSelector).closest(".control-group").addClass("error");
  };

  var handleSubmit = function handleSubmit(event) {
    event.preventDefault();

    var btn = $("#enquiry"),
        hasError = false,
        _name = $("#inputName").val(),
        _email = $("#inputEmail").val(),
        _msg = $("#inputMessage").val();

    $(".control-group").removeClass("error");
    $(".help-inline").hide();

    if (_name.length === 0) {
      showError("#inputName");
      hasError = true;
    }
    if (_email.length === 0) {
      showError("#inputEmail");
      hasError = true;
    }
    if (_msg.length === 0) {
      showError("#inputMessage");
      hasError = true;
    }
    if (hasError) {
      return;
    }
    btn.button("loading");

    var myForm = event.target;
    var formData = new FormData(myForm);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString()
    }).then(function (res) {
      btn.siblings().first().show();
      btn.closest(".control-group").addClass("success");
      btn.button("reset");
    }).catch(function (error) {
      console.log(error);
      btn.siblings().first().html("Sorry there was an error submitting the form. Please email theoldmaltingsthornham@gmail.com.");
      btn.siblings().first().show();
      btn.closest(".control-group").addClass("error");
      btn.button("reset");
    });
  };

  document.querySelector("form").addEventListener("submit", handleSubmit);
});
//# sourceMappingURL=main.js.map
