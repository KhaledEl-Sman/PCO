$(document).ready(function(){$(".up").click(function(){$("html, body").scrollTop(0)}),$(window).scrollTop()>=500?$(".up").css("display","flex"):$(".up").css("display","none"),$(window).scroll(function(){$(window).scrollTop()>=500?$(".up").css("display","flex"):$(".up").css("display","none")}),$(".second-button").on("click",function(){$(".animated-icon2").toggleClass("open")});let e=new Swiper(".mySwiper",{spaceBetween:30,effect:"fade",loop:!0,speed:1e3,allowTouchMove:!1,autoplay:{delay:3500},pagination:{el:".swiper-pagination",clickable:!0},mousewheel:{releaseOnEdges:!0}});e.on("transitionEnd",function(){$(".swiper-slide .description").eq(e.activeIndex).siblings().removeClass("fadeInRightBig").addClass("d-none"),$(".swiper-slide .description").eq(e.activeIndex).removeClass("d-none").addClass("fadeInRightBig")}),document.addEventListener("keydown",function(t){39==t.keyCode?e.slideNext():37==t.keyCode&&e.slidePrev()}),(new WOW).init(),$(".counter").counterUp({delay:15,time:2e3});new Swiper(".serviceSwiper",{spaceBetween:0,loop:!0,centeredSlides:!0,autoplay:{delay:2500,disableOnInteraction:!1},pagination:{el:".swiper-pagination",clickable:!0}});{let e=!1;$("#name").keyup(function(){let o=$(this).val();/^[a-zA-Z]+ [a-zA-Z]{2,10}$/.test(o)?($(this).css("border-color","green"),e=!0,s()):($(this).css("border-color","red"),e=!1,t())});let o=!1;$("#email").keyup(function(){let e=$(this).val();/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)?($(this).css("border-color","green"),o=!0,s()):($(this).css("border-color","red"),o=!1,t())});let n=!1;$("#phone").keyup(function(){let e=$(this).val();/^01[0125]{1}[0-9]{8}$/.test(e)?($(this).css("border-color","green"),n=!0,s()):($(this).css("border-color","red"),n=!1,t())});let i=!0;function t(){document.querySelector("#submit").setAttribute("disabled",!1)}function s(){1==e&&1==o&&1==n&&1==i&&document.querySelector("#submit").removeAttribute("disabled",!1)}$("#message").keyup(function(){let e=$(this).val();/^[\s\S]{0,250}$/.test(e)?($(this).css("border-color","green"),i=!0,s()):($(this).css("border-color","red"),i=!1,t())}),$("#submit").click(function(){document.getElementsByClassName("form-control").value=""})}let o=!1;$("#uploadBtn").on("change",function(){o=!0,document.getElementById("uploadFile").innerHTML="( "+this.value+" )",i()});{let e=!1;$("#career_name").keyup(function(){let t=$(this).val();/^[a-zA-Z]+ [a-zA-Z]{2,10}$/.test(t)?($(this).css("border-color","green"),e=!0,i()):($(this).css("border-color","red"),e=!1,n())});let t=!1;$("#career_email").keyup(function(){let e=$(this).val();/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)?($(this).css("border-color","green"),t=!0,i()):($(this).css("border-color","red"),t=!1,n())});let s=!1;$("#career_phone").keyup(function(){let e=$(this).val();/^01[0125]{1}[0-9]{8}$/.test(e)?($(this).css("border-color","green"),s=!0,i()):($(this).css("border-color","red"),s=!1,n())});let r=!1;$("#career_position").keyup(function(){let e=$(this).val();/^[A-Za-z ]{3,50}$/.test(e)?($(this).css("border-color","green"),r=!0,i()):($(this).css("border-color","red"),r=!1,n())});let l=!1;function n(){document.querySelector("#career_submit").setAttribute("disabled",!1)}function i(){e&&t&&s&&r&&l&&o&&document.querySelector("#career_submit").removeAttribute("disabled",!1)}$("#career_link").keyup(function(){let e=$(this).val();/[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&\/\/=]*)/.test(e)?($(this).css("border-color","green"),l=!0,i()):($(this).css("border-color","red"),l=!1,n())}),$("#career_submit").click(function(){document.getElementsByClassName("form-control").value="",document.getElementById("uploadFile").innerHTML=""})}new Swiper(".news_swiper",{spaceBetween:20,allowTouchMove:!1,autoplay:{delay:3e3},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});$(".news .swiper-slide h2").each(function(){let e=$(this).text(),t="";if(e.length>20){let s=e.split(" ");for(let e=0;e<s.length;e++)t.length<=20&&(t+=s[e]+" ");t+="...",$(this).text(t)}}),new Swiper(".news_details_swiper",{effect:"flip",grabCursor:!0,pagination:{el:".swiper-pagination"},autoplay:{delay:3e3},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}).on("transitionEnd",function(){$("iframe").attr("src",$("iframe").attr("src"))});new Swiper(".projectSwiper",{spaceBetween:0,loop:!0,centeredSlides:!0,speed:600,spaceBetween:30,autoplay:{delay:3500,disableOnInteraction:!1},pagination:{el:".swiper-pagination",clickable:!1}}),new Swiper(".project_swiper",{lazy:!0,preloadImages:!1,slidesPerView:1,spaceBetween:0,autoplay:{delay:3e3},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}),new Swiper(".project_show_swiper",{lazy:!0,preloadImages:!1,slidesPerView:1,spaceBetween:0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});$(".project_swiper .swiper-slide").click(function(){$("body").css("overflow","hidden"),$(".project_show").css("position","fixed"),$(".project_show .project_show_swiper").css("display","unset"),$(".exit").css("display","unset"),$(".whatsapp").css("z-index","1"),$(".up").css("z-index","1")}),$(".exit").click(function(){$("body").css("overflow","auto"),$(".project_show").css("position","unset"),$(".project_show .project_show_swiper").css("display","none"),$(".exit").css("display","none"),$(".whatsapp").css("z-index","5"),$(".up").css("z-index","5")}),$(".spanner").fadeOut(1500,function(){$("body").css("overflow","auto")})});