$(function() {

    $('.burger, .header__hight__menu  a').on('click', function (e) {
    e.preventDefault()
    $('.header__hight__menu').toggleClass('header__hight__menu--open')
    })

    $(".header__hight__menu__item a, .footer__list__item__link").on("click", function (e) {
        //отменяем стандартную обработку нажатия по ссылке
        e.preventDefault()
        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),
        //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top - 100
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500)
    })
})