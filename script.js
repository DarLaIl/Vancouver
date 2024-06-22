const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
  

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },


    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });
const iconMenu = document.querySelector(".menu__icon");
const menuBody = document.querySelector(".menu__body");
    iconMenu.addEventListener("click", function(e){
        document.body.classList.toggle("_lock");
        iconMenu.classList.toggle("_active");
        menuBody.classList.toggle("_active");
    })


const menuLinks = document.querySelectorAll(".menu__link[data-goto]");
menuLinks.forEach(menuLink =>{
    menuLink.addEventListener("click", onMenuLinkClick)
});
const menuLinksFooter = document.querySelectorAll(".footer__menu__link[data-goto]");
menuLinksFooter.forEach(menuLink =>{
    menuLink.addEventListener("click", onMenuLinkClick)
});

function onMenuLinkClick(e){
    const menuLink = e.target;
    if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
        const gotoBlock = document.querySelector(menuLink.dataset.goto);
        const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY;
        
        if(iconMenu.classList.contains("_active")) {
            document.body.classList.remove("_lock");
            iconMenu.classList.remove("_active");
            menuBody.classList.remove("_active");
        }
        
        window.scrollTo({
            top: gotoBlockValue,
        });

        e.preventDefault();
    }
}
