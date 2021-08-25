$(document).ready(function () {

    //click up button
    $(".up").click(function () {
        $('html, body').scrollTop(0);
    })

    if ($(window).scrollTop() >= 500) {
        $('.up').css('display', 'flex');
    } else {
        $('.up').css('display', 'none');
    }

    $(window).scroll(function () {
        if ($(window).scrollTop() >= 500) {
            $('.up').css('display', 'flex');
        } else {
            $('.up').css('display', 'none');
        }
    })

    /******************************
    => Home
    ******************************/
    //humpurger toggle
    $('.second-button').on('click', function () {

        $('.animated-icon2').toggleClass('open');
    });

    let swiper = new Swiper(".mySwiper", {
        spaceBetween: 30,
        effect: 'fade',
        loop: true,
        speed: 1000,
        allowTouchMove: false,
        autoplay: {
            delay: 3500,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        mousewheel: {
            releaseOnEdges: true,
        }
    });

    swiper.on('transitionEnd', function () {
        $(".swiper-slide .description").eq(swiper.activeIndex).siblings().removeClass('fadeInRightBig').addClass('d-none');
        $(".swiper-slide .description").eq(swiper.activeIndex).removeClass('d-none').addClass('fadeInRightBig');
    });

    document.addEventListener("keydown", function (e) {
        if (e.keyCode == 39) {
            swiper.slideNext();
        }
        else if (e.keyCode == 37) {
            swiper.slidePrev();
        }
    })

    /******************************
    => About
    ******************************/

    new WOW().init();

    //counter
    $('.counter').counterUp({
        delay: 15,
        time: 2000
    });

    /******************************
    => Services
    ******************************/

    let services_swiper = new Swiper(".serviceSwiper", {
        spaceBetween: 0,
        loop: true,
        centeredSlides: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        }
    });


    /******************************
    => Contact
    ******************************/

    //validation
    {
        //name validation
        let nameVal = false;
        $("#name").keyup(function () {
            let name = $(this).val();
            let regName = /^[a-zA-Z]+ [a-zA-Z]{2,10}$/;
            if (!regName.test(name)) {
                $(this).css("border-color", "red");
                nameVal = false;
                disable();
            } else {
                $(this).css("border-color", "green");
                nameVal = true;
                able();
            }
        })

        //email validation
        let emailVal = false;
        $("#email").keyup(function () {
            let email = $(this).val();
            let regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (!regEmail.test(email)) {
                $(this).css("border-color", "red");
                emailVal = false;
                disable();
            } else {
                $(this).css("border-color", "green");
                emailVal = true;
                able();
            }
        })

        //phone validation
        let phoneVal = false;
        $("#phone").keyup(function () {
            let phone = $(this).val();
            let regPhone = /^01[0125]{1}[0-9]{8}$/;
            if (!regPhone.test(phone)) {
                $(this).css("border-color", "red");
                phoneVal = false;
                disable();
            } else {
                $(this).css("border-color", "green");
                phoneVal = true;
                able();
            }
        })

        //message validation
        let messageVal = true;
        $("#message").keyup(function () {
            let message = $(this).val();
            let regMessage = /^[\s\S]{0,250}$/;
            if (!regMessage.test(message)) {
                $(this).css("border-color", "red");
                messageVal = false;
                disable();
            } else {
                $(this).css("border-color", "green");
                messageVal = true;
                able();
            }
        })

        //disable function
        function disable() {
            document.querySelector("#submit").setAttribute("disabled", false);
        }

        //able function
        function able() {
            if (nameVal == true && emailVal == true && phoneVal == true && messageVal == true) {
                document.querySelector("#submit").removeAttribute("disabled", false);
            }
        }

        //clear function
        $("#submit").click(function () {
            document.getElementsByClassName("form-control").value = '';
        })

    }

    /******************************
    => Career
    ******************************/

    let career_file = false;
    $('#uploadBtn').on("change", function () {
        career_file = true;
        document.getElementById("uploadFile").innerHTML = '( ' + this.value + ' )';
        able2();
    })

    //validation
    {
        //name validation
        let nameVal2 = false;
        $("#career_name").keyup(function () {
            let name = $(this).val();
            let regName = /^[a-zA-Z]+ [a-zA-Z]{2,10}$/;
            if (!regName.test(name)) {
                $(this).css("border-color", "red");
                nameVal2 = false;
                disable2();
            } else {
                $(this).css("border-color", "green");
                nameVal2 = true;
                able2();
            }
        })

        //email validation
        let emailVal2 = false;
        $("#career_email").keyup(function () {
            let email = $(this).val();
            let regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (!regEmail.test(email)) {
                $(this).css("border-color", "red");
                emailVal2 = false;
                disable2();
            } else {
                $(this).css("border-color", "green");
                emailVal2 = true;
                able2();
            }
        })

        //phone validation
        let phoneVal2 = false;
        $("#career_phone").keyup(function () {
            let phone = $(this).val();
            let regPhone = /^01[0125]{1}[0-9]{8}$/;
            if (!regPhone.test(phone)) {
                $(this).css("border-color", "red");
                phoneVal2 = false;
                disable2();
            } else {
                $(this).css("border-color", "green");
                phoneVal2 = true;
                able2();
            }
        })

        //phone validation
        let positionVal = false;
        $("#career_position").keyup(function () {
            let position = $(this).val();
            let regPosition = /^[A-Za-z ]{3,50}$/;
            if (!regPosition.test(position)) {
                $(this).css("border-color", "red");
                positionVal = false;
                disable2();
            } else {
                $(this).css("border-color", "green");
                positionVal = true;
                able2();
            }
        })

        //link validation
        let linkVal = false;
        $("#career_link").keyup(function () {
            let link = $(this).val();
            let regLink = /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;
            if (!regLink.test(link)) {
                $(this).css("border-color", "red");
                linkVal = false;
                disable2();
            } else {
                $(this).css("border-color", "green");
                linkVal = true;
                able2();
            }
        })

        //disable function
        function disable2() {
            document.querySelector("#career_submit").setAttribute("disabled", false);
        }

        //able function
        function able2() {
            if (nameVal2 && emailVal2 && phoneVal2 && positionVal && linkVal && career_file) {
                document.querySelector("#career_submit").removeAttribute("disabled", false);
            }
        }

        //clear function
        $("#career_submit").click(function () {
            document.getElementsByClassName("form-control").value = '';
            document.getElementById("uploadFile").innerHTML = '';
        })
    }

    /******************************
    => News
    ******************************/

    let news_swiper = new Swiper(".news_swiper", {
        spaceBetween: 20,
        allowTouchMove: false,
        autoplay: {
            delay: 3000,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    $('.news .swiper-slide h2').each(function () {
        let content = $(this).text();
        let newText = "";
        if (content.length > 20) {
            let text = content.split(" ");
            for (let i = 0; i < text.length; i++) {
                if (newText.length <= 20) {
                    newText += (text[i] + " ");
                }
            }
            newText += "...";
            $(this).text(newText);
        }
    })

    /******************************
    => News_Details
    ******************************/

    let news_details_swiper = new Swiper(".news_details_swiper", {
        effect: "flip",
        grabCursor: true,
        pagination: {
            el: ".swiper-pagination",
        },
        autoplay: {
            delay: 3000,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    news_details_swiper.on('transitionEnd', function () {
        $('iframe').attr('src', $('iframe').attr('src'));
    });

    /******************************
    => Projects
    ******************************/

    let projectSwiper = new Swiper(".projectSwiper", {
        spaceBetween: 0,
        loop: true,
        centeredSlides: true,
        speed: 600,
        spaceBetween: 30,
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: false,
        }
    });

    /******************************
    => Single Project
    ******************************/

    let project_swiper = new Swiper(".project_swiper", {
        lazy: true,
        preloadImages: false,
        slidesPerView: 1,
        spaceBetween: 0,
        autoplay: {
            delay: 3000,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    let project_show_swiper = new Swiper(".project_show_swiper", {
        lazy: true,
        preloadImages: false,
        slidesPerView: 1,
        spaceBetween: 0,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    $(".project_swiper .swiper-slide").click(function () {
        $("body").css("overflow", "hidden");
        $(".project_show").css("position", "fixed");
        $(".project_show .project_show_swiper").css("display", "unset");
        $(".exit").css("display", "unset");
        $(".whatsapp").css("z-index", "1");
        $(".up").css("z-index", "1");
    })

    $(".exit").click(function () {
        $("body").css("overflow", "auto");
        $(".project_show").css("position", "unset");
        $(".project_show .project_show_swiper").css("display", "none");
        $(".exit").css("display", "none");
        $(".whatsapp").css("z-index", "5");
        $(".up").css("z-index", "5");
    })

    //loader
    $(".spanner").fadeOut(1500, function () {
        $("body").css("overflow", "auto");
    });
});