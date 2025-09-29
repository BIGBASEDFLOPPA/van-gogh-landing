(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&t(a)}).observe(document,{childList:!0,subtree:!0});function c(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function t(e){if(e.ep)return;e.ep=!0;const n=c(e);fetch(e.href,n)}})();const o=`<header class="header">\r
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
`;function l(){const r=document.createElement("div");r.innerHTML=o.trim();const s=r.firstElementChild,c=s.querySelector(".header__toggle"),t=s.querySelector(".header__nav--mobile");s.querySelectorAll(".header__nav--mobile .header__link");function e(){s.classList.add("open"),getComputedStyle(t).display!=="none"&&(t.style.maxHeight=t.scrollHeight+"px")}function n(){s.classList.remove("open"),t.style.maxHeight="0px"}return c.addEventListener("click",()=>{s.classList.contains("open")?n():e()}),window.addEventListener("resize",()=>{window.innerWidth>1160?(s.classList.remove("open"),t.style.maxHeight=null):s.classList.contains("open")&&(t.style.maxHeight=t.scrollHeight+"px")}),s}const d=`<section class="products section">\r
    <div class="container products__container">\r
        <h2 class="products__title">РЕКОМЕНДУЕМОЕ ОБОРУДОВАНИЕ</h2>\r
        <div class="products__grid"></div>\r
        <button class="btn catalog__btn">Перейти в каталог</button>\r
    </div>\r
</section>\r
`;function u(r=[]){const s=document.createElement("div");s.innerHTML=d.trim();const c=s.firstChild,t=c.querySelector(".products__grid");return r.forEach((e,n)=>{const a=document.createElement("div");a.className="product-card",(n===2||n===4)&&a.classList.add("product-card--mobile-hidden"),a.innerHTML=`
            <img src="${e.img}" alt="${e.name}" class="product-card__img">
            <div class="product-card__desc-wrapper">
                <p class="product-card__desc">${e.name}</p>
                <span class="product-card__status ${e.statusClass}">
                <img src="/icons/${e.statusClass==="in-stock"?"iconGreenCheck":"iconOrangeCheck"}.svg" alt="" class="product-card__status-icon">
                     ${e.status}
                    </span>
                <button class="btn card__btn">Подробнее</button>
            </div>
        `,t.appendChild(a)}),c}const _=`<section class="about section">\r
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
`;function m(){const r=document.createElement("section");return r.className="about section",r.innerHTML=_.trim(),r}const i=document.getElementById("app"),p=[{img:"/images/products1.webp",name:"Стальной канат для лифта GRS 9X21F(9Х17)-IWRC 1570",status:"В наличии 50 м.",statusClass:"in-stock"},{img:"/images/products2.webp",name:"Плоский тяговый ремень для лифта GRS AAA717X1 (12 кордов)",status:"Под заказ",statusClass:"out-of-stock"},{img:"/images/products3.webp",name:"Стальной канат для лифта GRS 8X19S-NFC 1570",status:"В наличии 50 м.",statusClass:"in-stock"},{img:"../images/products4.webp",name:"Стальной канат для лифта GRS 9X21F(9Х17)-IWRC 1570",status:"В наличии 50 м.",statusClass:"in-stock"},{img:"/images/products5.webp",name:"Стальной канат для лифта GRS 8X19W-CWC 1570",status:"В наличии 50 м.",statusClass:"in-stock"},{img:"/images/products6.webp",name:"Купить плоский тяговый ремень для лифта GRS AAA717AJ1(8 кордов)",status:"В наличии 50 м.",statusClass:"in-stock"}];i.appendChild(l());i.appendChild(u(p));i.appendChild(m());
