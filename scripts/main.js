"use strict";!function(e){function t(t,n,i){var o=n.hash.slice(1),a=document.getElementById(o)||document.getElementsByName(o)[0];if(a){t&&t.preventDefault();var r=e(i.target);if(!(i.lock&&r.is(":animated")||i.onBefore&&i.onBefore.call(i,t,a,r)===!1)){if(i.stop&&r.stop(!0),i.hash){var s=a.id==o?"id":"name",l=e("<a> </a>").attr(s,o).css({position:"absolute",top:e(window).scrollTop(),left:e(window).scrollLeft()});a[s]="",e("body").prepend(l),location=n.hash,l.remove(),a[s]=o}r.scrollTo(a,i).trigger("notify.serialScroll",[a])}}}var n=location.href.replace(/#.*/,""),i=e.localScroll=function(t){e("body").localScroll(t)};i.defaults={duration:1e3,axis:"y",event:"click",stop:!0,target:window,reset:!0},i.hash=function(n){if(location.hash){if(n=e.extend({},i.defaults,n),n.hash=!1,n.reset){var o=n.duration;delete n.duration,e(n.target).scrollTo(0,n),n.duration=o}t(0,location,n)}},e.fn.localScroll=function(o){function a(){return!!this.href&&!!this.hash&&this.href.replace(this.hash,"")==n&&(!o.filter||e(this).is(o.filter))}return o=e.extend({},i.defaults,o),o.lazy?this.bind(o.event,function(n){var i=e([n.target,n.target.parentNode]).filter(a)[0];i&&t(n,i,o)}):this.find("a,area").filter(a).bind(o.event,function(e){t(e,this,o)}).end().end()}}(jQuery);var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};!function(e){function t(e){return"object"==("undefined"==typeof e?"undefined":_typeof(e))?e:{top:e,left:e}}var n=e.scrollTo=function(t,n,i){e(window).scrollTo(t,n,i)};n.defaults={axis:"xy",duration:parseFloat(e.fn.jquery)>=1.3?0:1,limit:!0},n.window=function(t){return e(window)._scrollable()},e.fn._scrollable=function(){return this.map(function(){var t=this,n=!t.nodeName||e.inArray(t.nodeName.toLowerCase(),["iframe","#document","html","body"])!=-1;if(!n)return t;var i=(t.contentWindow||t).document||t.ownerDocument||t;return/webkit/i.test(navigator.userAgent)||"BackCompat"==i.compatMode?i.body:i.documentElement})},e.fn.scrollTo=function(i,o,a){return"object"==("undefined"==typeof o?"undefined":_typeof(o))&&(a=o,o=0),"function"==typeof a&&(a={onAfter:a}),"max"==i&&(i=9e9),a=e.extend({},n.defaults,a),o=o||a.duration,a.queue=a.queue&&a.axis.length>1,a.queue&&(o/=2),a.offset=t(a.offset),a.over=t(a.over),this._scrollable().each(function(){function r(e){d.animate(c,o,a.easing,e&&function(){e.call(this,i,a)})}if(null!=i){var s,l=this,d=e(l),h=i,c={},u=d.is("html,body");switch("undefined"==typeof h?"undefined":_typeof(h)){case"number":case"string":if(/^([+-]=)?\d+(\.\d+)?(px|%)?$/.test(h)){h=t(h);break}if(h=e(h,this),!h.length)return;case"object":(h.is||h.style)&&(s=(h=e(h)).offset())}e.each(a.axis.split(""),function(e,t){var i="x"==t?"Left":"Top",o=i.toLowerCase(),f="scroll"+i,g=l[f],p=n.max(l,t);if(s)c[f]=s[o]+(u?0:g-d.offset()[o]),a.margin&&(c[f]-=parseInt(h.css("margin"+i))||0,c[f]-=parseInt(h.css("border"+i+"Width"))||0),c[f]+=a.offset[o]||0,a.over[o]&&(c[f]+=h["x"==t?"width":"height"]()*a.over[o]);else{var m=h[o];c[f]=m.slice&&"%"==m.slice(-1)?parseFloat(m)/100*p:m}a.limit&&/^\d+$/.test(c[f])&&(c[f]=c[f]<=0?0:Math.min(c[f],p)),!e&&a.queue&&(g!=c[f]&&r(a.onAfterFirst),delete c[f])}),r(a.onAfter)}}).end()},n.max=function(t,n){var i="x"==n?"Width":"Height",o="scroll"+i;if(!e(t).is("html,body"))return t[o]-e(t)[i.toLowerCase()]();var a="client"+i,r=t.ownerDocument.documentElement,s=t.ownerDocument.body;return Math.max(r[o],s[o])-Math.min(r[a],s[a])}}(jQuery),function(){var e,t,n;e=jQuery,n=function(){function e(){this.fileLoadingImage="assets/lightbox/loading.gif",this.fileCloseImage="assets/lightbox/close.png",this.resizeDuration=700,this.fadeDuration=500,this.labelImage="Image",this.labelOf="of"}return e}(),t=function(){function t(e){this.options=e,this.album=[],this.currentImageIndex=void 0,this.init()}return t.prototype.init=function(){return this.enable(),this.build()},t.prototype.enable=function(){var t=this;return e("body").on("click","a[rel^=lightbox], area[rel^=lightbox]",function(n){return t.start(e(n.currentTarget)),!1})},t.prototype.build=function(){var t,n=this;e("<div>",{id:"lightboxOverlay"}).after(e("<div/>",{id:"lightbox"}).append(e("<div/>",{"class":"lb-outerContainer"}).append(e("<div/>",{"class":"lb-container"}).append(e("<img/>",{"class":"lb-image"}),e("<div/>",{"class":"lb-nav"}).append(e("<a/>",{"class":"lb-prev"}),e("<a/>",{"class":"lb-next"})),e("<div/>",{"class":"lb-loader"}).append(e("<a/>",{"class":"lb-cancel"}).append(e("<img/>",{src:this.options.fileLoadingImage}))))),e("<div/>",{"class":"lb-dataContainer"}).append(e("<div/>",{"class":"lb-data"}).append(e("<div/>",{"class":"lb-details"}).append(e("<span/>",{"class":"lb-caption"}),e("<span/>",{"class":"lb-number"})),e("<div/>",{"class":"lb-closeContainer"}).append(e("<a/>",{"class":"lb-close"}).append(e("<img/>",{src:this.options.fileCloseImage}))))))).appendTo(e("body")),e("#lightboxOverlay").hide().on("click",function(e){return n.end(),!1}),t=e("#lightbox"),t.hide().on("click",function(t){return"lightbox"===e(t.target).attr("id")&&n.end(),!1}),t.find(".lb-outerContainer").on("click",function(t){return"lightbox"===e(t.target).attr("id")&&n.end(),!1}),t.find(".lb-prev").on("click",function(e){return n.changeImage(n.currentImageIndex-1),!1}),t.find(".lb-next").on("click",function(e){return n.changeImage(n.currentImageIndex+1),!1}),t.find(".lb-loader, .lb-close").on("click",function(e){return n.end(),!1})},t.prototype.start=function(t){var n,i,o,a,r,s,l,d,h;if(e(window).on("resize",this.sizeOverlay),e("select, object, embed").css({visibility:"hidden"}),e("#lightboxOverlay").width(e(document).width()).height(e(document).height()).fadeIn(this.options.fadeDuration),this.album=[],r=0,"lightbox"===t.attr("rel"))this.album.push({link:t.attr("href"),title:t.attr("title")});else for(h=e(t.prop("tagName")+'[rel="'+t.attr("rel")+'"]'),a=0,d=h.length;a<d;a++)o=h[a],this.album.push({link:e(o).attr("href"),title:e(o).attr("title")}),e(o).attr("href")===t.attr("href")&&(r=a);i=e(window),l=i.scrollTop()+i.height()/10,s=i.scrollLeft(),n=e("#lightbox"),n.css({top:l+"px",left:s+"px"}).fadeIn(this.options.fadeDuration),this.changeImage(r)},t.prototype.changeImage=function(t){var n,i,o,a=this;this.disableKeyboardNav(),i=e("#lightbox"),n=i.find(".lb-image"),this.sizeOverlay(),e("#lightboxOverlay").fadeIn(this.options.fadeDuration),e(".loader").fadeIn("slow"),i.find(".lb-image, .lb-nav, .lb-prev, .lb-next, .lb-dataContainer, .lb-numbers, .lb-caption").hide(),i.find(".lb-outerContainer").addClass("animating"),o=new Image,o.onload=function(){return n.attr("src",a.album[t].link),n.width=o.width,n.height=o.height,a.sizeContainer(o.width,o.height)},o.src=this.album[t].link,this.currentImageIndex=t},t.prototype.sizeOverlay=function(){return e("#lightboxOverlay").width(e(document).width()).height(e(document).height())},t.prototype.sizeContainer=function(t,n){var i,o,a,r,s,l,d,h,c,u,f,g=this;o=e("#lightbox"),a=o.find(".lb-outerContainer"),f=a.outerWidth(),u=a.outerHeight(),i=o.find(".lb-container"),d=parseInt(i.css("padding-top"),10),l=parseInt(i.css("padding-right"),10),r=parseInt(i.css("padding-bottom"),10),s=parseInt(i.css("padding-left"),10),c=t+s+l,h=n+d+r,c!==f&&h!==u?a.animate({width:c,height:h},this.options.resizeDuration,"swing"):c!==f?a.animate({width:c},this.options.resizeDuration,"swing"):h!==u&&a.animate({height:h},this.options.resizeDuration,"swing"),setTimeout(function(){o.find(".lb-dataContainer").width(c),o.find(".lb-prevLink").height(h),o.find(".lb-nextLink").height(h),g.showImage()},this.options.resizeDuration)},t.prototype.showImage=function(){var t;t=e("#lightbox"),t.find(".lb-loader").hide(),t.find(".lb-image").fadeIn("slow"),this.updateNav(),this.updateDetails(),this.preloadNeighboringImages(),this.enableKeyboardNav()},t.prototype.updateNav=function(){var t;t=e("#lightbox"),t.find(".lb-nav").show(),this.currentImageIndex>0&&t.find(".lb-prev").show(),this.currentImageIndex<this.album.length-1&&t.find(".lb-next").show()},t.prototype.updateDetails=function(){var t,n=this;t=e("#lightbox"),"undefined"!=typeof this.album[this.currentImageIndex].title&&""!==this.album[this.currentImageIndex].title&&t.find(".lb-caption").html(this.album[this.currentImageIndex].title).fadeIn("fast"),this.album.length>1?t.find(".lb-number").html(this.options.labelImage+" "+(this.currentImageIndex+1)+" "+this.options.labelOf+"  "+this.album.length).fadeIn("fast"):t.find(".lb-number").hide(),t.find(".lb-outerContainer").removeClass("animating"),t.find(".lb-dataContainer").fadeIn(this.resizeDuration,function(){return n.sizeOverlay()})},t.prototype.preloadNeighboringImages=function(){var e,t;this.album.length>this.currentImageIndex+1&&(e=new Image,e.src=this.album[this.currentImageIndex+1].link),this.currentImageIndex>0&&(t=new Image,t.src=this.album[this.currentImageIndex-1].link)},t.prototype.enableKeyboardNav=function(){e(document).on("keyup.keyboard",e.proxy(this.keyboardAction,this))},t.prototype.disableKeyboardNav=function(){e(document).off(".keyboard")},t.prototype.keyboardAction=function(e){var t,n,i,o,a;t=27,n=37,i=39,a=e.keyCode,o=String.fromCharCode(a).toLowerCase(),a===t||o.match(/x|o|c/)?this.end():"p"===o||a===n?0!==this.currentImageIndex&&this.changeImage(this.currentImageIndex-1):"n"!==o&&a!==i||this.currentImageIndex!==this.album.length-1&&this.changeImage(this.currentImageIndex+1)},t.prototype.end=function(){return this.disableKeyboardNav(),e(window).off("resize",this.sizeOverlay),e("#lightbox").fadeOut(this.options.fadeDuration),e("#lightboxOverlay").fadeOut(this.options.fadeDuration),e("select, object, embed").css({visibility:"visible"})},t}(),e(function(){var e,i;return i=new n,e=new t(i)})}.call(void 0),$(document).ready(function(){var e=new google.maps.LatLng(52.959941,.588637),t={center:e,zoom:14,mapTypeId:google.maps.MapTypeId.ROADMAP,options:{scrollwheel:!1}},n=new google.maps.Map(document.getElementById("map_canvas"),t);new google.maps.Marker({position:e,map:n,title:"The Old Maltings"});$(".help-inline").hide(),$(".toggleTrigger").click(function(){return $(".toggleTarget").is(":hidden")?($(".toggleTarget").slideDown("slow","swing"),$(this).html("Hide Terms and Conditions")):($(".toggleTarget").hide(),$(this).html("Show Terms and Conditions")),!1}),$(".nav li").click(function(){$(this).addClass("active").siblings().removeClass("active"),$("#navigation").collapse("hide")}),$(".banner").hover(function(){$(this).find(".banner-caption").slideToggle("fast")});var i=function(e){$(e).siblings().first().show(),$(e).closest(".control-group").addClass("error")};$("#enquiry").click(function(){var e=$(this),t=!1,n=$("#inputName").val(),o=$("#inputEmail").val(),a=$("#inputMessage").val();$(".control-group").removeClass("error"),$(".help-inline").hide(),0===n.length&&(i("#inputName"),t=!0),0===o.length&&(i("#inputEmail"),t=!0),0===a.length&&(i("#inputMessage"),t=!0),t||(e.button("loading"),$.ajax({url:"https://formspree.io/huwmcleod@gmail.com",method:"POST",data:{message:a,email:o,name:n},dataType:"json",success:function(t){e.siblings().first().show(),e.closest(".control-group").addClass("success"),e.button("reset")},error:function(){e.siblings().first().html("Sorry there was an error submitting the form. Please email theoldmaltingsthornham@gmail.com."),e.siblings().first().show(),e.closest(".control-group").addClass("error"),e.button("reset")}}))})});