/*
/*выпадающее меню в навигации через js*/
 
/*

const shopLink = document.querySelector('#header__nav-pages-link-shop-link'),
shopDropMenu = document.querySelector('.header__nav-pages-link-shop-dropmenu');

shopLink.addEventListener('mouseover', function () {
    
    shopDropMenu.classList.remove('d-none')
    shopDropMenu.classList.add('d-flex')



})
shopDropMenu.addEventListener('mouseout', function () {
    
    shopDropMenu.classList.add('d-none')
    shopDropMenu.classList.remove('d-flex')



})

*/




/* фиксированный хедер на js*/ 
/*
class SCROLL {
    constructor(set) {
        if (typeof set.el == 'string') {
            this.el = document.querySelector(set.el);
        } else if (set.el instanceof HTMLElement) {
            this.el = set.el;
        }

        this.top = set.top;
        this.el.style.position = 'fixed';
        this.unit = set.unit;
        this.el.style.top = this.scroll();

        window.addEventListener('scroll', () => this.scroll())
        window.addEventListener('resize', () => this.scroll())
    }
    scroll() {
        this.window = this.scrollNumber();

        if (this.window - pageYOffset > 0) {
            this.el.style.top = this.window - pageYOffset + 'px';
        } else {
            this.el.style.top = 0;
        }
    }
    scrollNumber() {
        if (this.unit == 'px') {
            return this.top >= 0 ? this.top : 0;
        } else if (this.unit == '%' || this.unit == undefined) {
            return this.calc(window.innerHeight, this.top) - this.el.clientHeight;
        }
    }
    calc(height, top) {
        return height / 100 * top
    }
}


const myScroll = new SCROLL({
    el: '.header__nav',
    top: 0,
    unit: '%'
})

*/


/* fixed header*/

$('.header__nav').css({
    position: 'fixed',
    top: 0,
    
    width: '100%',
    zIndex: 100
    
})

$('.header__content').css({
    paddingTop: $('.header__nav').outerHeight()
})



const windowInnerWidth = document.documentElement.clientWidth;
if (windowInnerWidth > 1200) {
    $('.header__content').css({
        marginTop: $('.header__nav').outerHeight()
    })


    $(window).scroll(function () {
        if ($(window).scrollTop() > 0) {
            $('.header__nav').css({
                boxShadow: '0 0 15px #000',
                
    
            });
            
            
        } else {
            $('.header__nav').css({
                boxShadow: 'none',
                
            });
            
            
        }
    }) 
} else if (windowInnerWidth < 1200 && windowInnerWidth > 1024) {
    $(window).scroll(function () {
        if ($(window).scrollTop() > 0) {
            $('.header__nav').css({
                boxShadow: '0 0 15px #000',
                
    
            });
            
            
        } else {
            
            $('.header__nav').css({
                boxShadow: 'none',
                
            });
            
            
        }
    }) 
}




/*Search button dropmenu*/
/*
const searchbtn = document.querySelector(''),
dropboxSearch =document.querySelector('')

searchbtn.addEventListener('click', function () {
    dropboxSearch.classList.toggle('activeSearchBox')


})

*/

/*burger menu 1*/

$('.nav__btn').click(function () {
    $('.header__menu').css('transform', 'translateX(0)');
    $('.nav__btn').css('opacity', '0');

    $(document).mouseup(function (e) {
        const list = $('.header__menu'),
            link = $('.nav__link');

        if (!list.is(e.target) && !link.is(e.target)) {
            list.css('transform', 'translateX(-110%)');
            $('.nav__btn').css('opacity', '1');
        }
    })
}) 


/*burger menu 2*/
/*
$('.burger__menu-btn').click(function () {
    $('.burger__menu').css('transform', 'translateX(0)');
    $('.burger__menu-btn').css('opacity', '0');

    $(document).mouseup(function (e) {
        let list = $('.burger__menu'),
            link = $('.burger__menu-chapters-name'),
            link1 = $('.burger__menu-chapters-name span'),
            link2 = $('.burger__menu-chapters-shop-list'),
            link3 = $('.burger__menu-chapters-name-shop-name span'),
            link4 = $('.burger__menu-chapters-insideskullcandy-list'),
            link5 = $('.burger__menu-chapters-insideskullcandy-list li'),
            link6 = $('.burger__menu-chapters-insideskullcandy-list li a'),
            link7 = $('.burger__menu-chapters-support-list'),
            link8 = $('.burger__menu-chapters-support-list li'),
            link9 = $('.burger__menu-chapters-support-list li a'),
            link10 = $('.burger__menu-chapters-name-shop-name'),
            link11 = $('.burger__menu-chapters-location-list'),
            link12 = $('.burger__menu-chapters-location-list li'),
            link13 = $('.burger__menu-chapters-location-list li a');

            
        
        if (!list.is(e.target) && !link.is(e.target) 
        && !link1.is(e.target)
        && !link2.is(e.target)
        && !link3.is(e.target)
        && !link4.is(e.target)
        && !link5.is(e.target)
        && !link6.is(e.target)
        && !link7.is(e.target)
        && !link8.is(e.target)
        && !link9.is(e.target)
        && !link10.is(e.target)
        && !link11.is(e.target)
        && !link12.is(e.target)
        && !link13.is(e.target)) {
            list.css('transform', 'translateX(-110%)');
            $('.burger__menu-btn').css('opacity', '1');
        }
    })
})


*/


/*
$('.burger__menu-chapters-shop-link').on( 'click', function( event ){
    event.preventDefault();
});

*/
/*
const 
burgerMenuChapterShop = document.querySelector('#burger__menu-chapters-shop'),
burgerMenuChapterShopList = document.querySelector('.burger__menu-chapters-shop-list'),

burgerMenuChapterInsideskullcandy = document.querySelector('#burger__menu-chapters-insideskullcandy'),
burgerMenuChapterInsideskullcandyList = document.querySelector('.burger__menu-chapters-insideskullcandy-list'),

burgerMenuChapterSupport = document.querySelector('#burger__menu-chapters-support'),
burgerMenuChapterSupportList = document.querySelector('.burger__menu-chapters-support-list'),

burgerMenuChapterLocation = document.querySelector('#burger__menu-chapters-location'),
burgerMenuChapterLocationList = document.querySelector('.burger__menu-chapters-location-list');





burgerMenuChapterShop.addEventListener('click', function () {
    
    burgerMenuChapterShopList.classList.toggle('active-display')
    burgerMenuChapterShopList.classList.toggle('d-none')


})
burgerMenuChapterInsideskullcandy.addEventListener('click', function () {
    
    burgerMenuChapterInsideskullcandyList.classList.toggle('active-display')
    burgerMenuChapterInsideskullcandyList.classList.toggle('d-none')


})
burgerMenuChapterSupport.addEventListener('click', function () {
    
    burgerMenuChapterSupportList.classList.toggle('active-display')
    burgerMenuChapterSupportList.classList.toggle('d-none')


})
burgerMenuChapterLocation.addEventListener('click', function () {
    
    burgerMenuChapterLocationList.classList.toggle('active-display')
    burgerMenuChapterLocationList.classList.toggle('d-none')


})


$('.header__nav-cart').on( 'click', function( event ){
    event.preventDefault();
    $('.header__nav-cart-dropbox').css('display', 'block');
});
$('.header__nav-cart-exit-btn').on( 'click', function( event ){
    event.preventDefault();
    $('.header__nav-cart-dropbox').css('display', 'none');
});
*/



// Scroll to ID

$('.js-sсroll-to-id').click(function (e) {
    e.preventDefault()
    let attr = $(this).attr('href'),
        toElement = $(attr).offset().top  //offset - счтает кол-во пикселей до элемента

    $('html, body').animate({
        scrollTop: toElement
    }, {
        duration: 1000  //время перехода
    })
})