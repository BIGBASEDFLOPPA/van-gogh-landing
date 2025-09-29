(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const t of s.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&n(t)}).observe(document,{childList:!0,subtree:!0});function c(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(e){if(e.ep)return;e.ep=!0;const s=c(e);fetch(e.href,s)}})();const d=`<header class="header">\r
    <div class="container">\r
        <div class="header__container">\r
            <img src="/icons/iconLogo.svg" alt="Лого" class="header__logo">\r
            <nav class="header__nav header__nav--desk" >\r
                <a href="#" class="header__link">ГЛАВНАЯ</a>\r
                <a href="#" class="header__link">КАТАЛОГ</a>\r
                <a href="#" class="header__link">О КОМПАНИИ</a>\r
                <a href="#" class="header__link">ОПЛАТА И ДОСТАВКА</a>\r
                <a href="#" class="header__link">КОНТАКТЫ</a>\r
            </nav>\r
            <button class="header__toggle" >\r
                <img src="/icons/iconBurger.svg" alt="" class="header__icon header__icon--burger">\r
                <img src="/icons/iconClose.svg" alt="" class="header__icon header__icon--close">\r
            </button>\r
        </div>\r
        <nav class="header__nav header__nav--mobile">\r
            <a href="#" class="header__link">ГЛАВНАЯ</a>\r
            <a href="#" class="header__link">КАТАЛОГ</a>\r
            <a href="#" class="header__link">О КОМПАНИИ</a>\r
            <a href="#" class="header__link">ОПЛАТА И ДОСТАВКА</a>\r
            <a href="#" class="header__link">КОНТАКТЫ</a>\r
        </nav>\r
    </div>\r
</header>\r
`;function u(){const a="/van-gogh-landing/",r=document.createElement("div"),c=d.replaceAll("/icons/",`${a}icons/`);r.innerHTML=c.trim();const n=r.firstElementChild,e=n.querySelector(".header__toggle"),s=n.querySelector(".header__nav--mobile");n.querySelectorAll(".header__nav--mobile .header__link");function t(){n.classList.add("open"),getComputedStyle(s).display!=="none"&&(s.style.maxHeight=s.scrollHeight+"px")}function l(){n.classList.remove("open"),s.style.maxHeight="0px"}return e.addEventListener("click",()=>{n.classList.contains("open")?l():t()}),window.addEventListener("resize",()=>{window.innerWidth>1160?(n.classList.remove("open"),s.style.maxHeight=null):n.classList.contains("open")&&(s.style.maxHeight=s.scrollHeight+"px")}),n}const _=`<section class="products section">\r
    <div class="container products__container">\r
        <h2 class="products__title">РЕКОМЕНДУЕМОЕ ОБОРУДОВАНИЕ</h2>\r
        <div class="products__grid"></div>\r
        <button class="btn catalog__btn">Перейти в каталог</button>\r
    </div>\r
</section>\r
`;function m(a=[]){const r=document.createElement("div");r.innerHTML=_.trim();const c=r.firstChild,n=c.querySelector(".products__grid");return a.forEach((e,s)=>{const t=document.createElement("div");t.className="product-card",(s===2||s===4)&&t.classList.add("product-card--mobile-hidden"),t.innerHTML=`
            <img src="${e.img}" alt="${e.name}" class="product-card__img">
            <div class="product-card__desc-wrapper">
                <p class="product-card__desc">${e.name}</p>
                <span class="product-card__status ${e.statusClass}">
                <img src="/icons/${e.statusClass==="in-stock"?"iconGreenCheck":"iconOrangeCheck"}.svg" alt="" class="product-card__status-icon">
                     ${e.status}
                    </span>
                <button class="btn card__btn">Подробнее</button>
            </div>
        `,n.appendChild(t)}),c}const g=`<section class="about section">\r
    <div class="container">\r
        <h2 class="about__title">О КОМПАНИИ</h2>\r
        <div class="about__container">\r
            <div class="about__images">\r
                <img src="/images/about1.webp" alt="" class="about__img about__img--wide">\r
                <img src="/images/about2.webp" alt="" class="about__img">\r
                <img src="/images/about3.webp" alt="" class="about__img">\r
            </div>\r
            <div class="about__content">\r
                <p class="about__content--title">\r
                    Компания «SPARTSPRO» специализируется на поставках лифтового оборудования,\r
                    комплектующих и запчастей для лифтов и эскалаторов ведущих мировых и российских производителей.\r
                </p>\r
\r
                <ul class="about__list">\r
                    <li>\r
                        <img src="/icons/iconBigCheck.svg" alt="" class="about__icon">\r
                        Гарантия качества – работаем только с проверенными производителями.\r
                    </li>\r
                    <li>\r
                        <img src="/icons/iconBigCheck.svg" alt="" class="about__icon">\r
                        Собственный склад – более 30 000 наименований в наличии для оперативных отгрузок.\r
                    </li>\r
                    <li>\r
                        <img src="/icons/iconBigCheck.svg" alt="" class="about__icon">\r
                        Соблюдение сроков – приоритет компании: быстрая обработка заказов и доставка без задержек.\r
                    </li>\r
                </ul>\r
\r
                <p class="about__content--description">\r
                    Мы обеспечиваем бесперебойные поставки для ваших проектов.\r
                    Оставьте заявку – и получите коммерческое предложение в кратчайшие сроки!\r
                </p>\r
\r
                <button class="btn">Подробнее</button>\r
            </div>\r
        </div>\r
    </div>\r
</section>\r
`;function p(){const a=document.createElement("section");return a.className="about section",a.innerHTML=g.trim(),a}const o=document.getElementById("app"),i="/van-gogh-landing/",h=[{img:`${i}images/products1.webp`,name:"Стальной канат для лифта GRS 9X21F(9Х17)-IWRC 1570",status:"В наличии 50 м.",statusClass:"in-stock"},{img:`${i}images/products2.webp`,name:"Плоский тяговый ремень для лифта GRS AAA717X1 (12 кордов)",status:"Под заказ",statusClass:"out-of-stock"},{img:`${i}images/products3.webp`,name:"Стальной канат для лифта GRS 8X19S-NFC 1570",status:"В наличии 50 м.",statusClass:"in-stock"},{img:`${i}images/products4.webp`,name:"Стальной канат для лифта GRS 9X21F(9Х17)-IWRC 1570",status:"В наличии 50 м.",statusClass:"in-stock"},{img:`${i}images/products5.webp`,name:"Стальной канат для лифта GRS 8X19W-CWC 1570",status:"В наличии 50 м.",statusClass:"in-stock"},{img:`${i}images/products6.webp`,name:"Купить плоский тяговый ремень для лифта GRS AAA717AJ1(8 кордов)",status:"В наличии 50 м.",statusClass:"in-stock"}];o.appendChild(u());o.appendChild(m(h));o.appendChild(p());
