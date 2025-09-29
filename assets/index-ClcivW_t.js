(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const e of s)if(e.type==="childList")for(const a of e.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(s){const e={};return s.integrity&&(e.integrity=s.integrity),s.referrerPolicy&&(e.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?e.credentials="include":s.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function n(s){if(s.ep)return;s.ep=!0;const e=r(s);fetch(s.href,e)}})();const d=`<header class="header">\r
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
`;function u(){const c="/van-gogh-landing/",t=document.createElement("div"),r=d.replaceAll("/icons/",`${c}icons/`);t.innerHTML=r.trim();const n=t.firstElementChild,s=n.querySelector(".header__toggle"),e=n.querySelector(".header__nav--mobile");n.querySelectorAll(".header__nav--mobile .header__link");function a(){n.classList.add("open"),getComputedStyle(e).display!=="none"&&(e.style.maxHeight=e.scrollHeight+"px")}function i(){n.classList.remove("open"),e.style.maxHeight="0px"}return s.addEventListener("click",()=>{n.classList.contains("open")?i():a()}),window.addEventListener("resize",()=>{window.innerWidth>1160?(n.classList.remove("open"),e.style.maxHeight=null):n.classList.contains("open")&&(e.style.maxHeight=e.scrollHeight+"px")}),n}const _=`<section class="products section">\r
    <div class="container products__container">\r
        <h2 class="products__title">РЕКОМЕНДУЕМОЕ ОБОРУДОВАНИЕ</h2>\r
        <div class="products__grid"></div>\r
        <button class="btn catalog__btn">Перейти в каталог</button>\r
    </div>\r
</section>\r
`;function g(c=[]){const t="/van-gogh-landing/",r=document.createElement("div");r.innerHTML=_.trim();const n=r.firstChild,s=n.querySelector(".products__grid");return c.forEach((e,a)=>{const i=document.createElement("div");i.className="product-card",(a===2||a===4)&&i.classList.add("product-card--mobile-hidden"),i.innerHTML=`
            <img src="${e.img}" alt="${e.name}" class="product-card__img">
            <div class="product-card__desc-wrapper">
                <p class="product-card__desc">${e.name}</p>
                <span class="product-card__status ${e.statusClass}">
              <img src="${t}icons/${e.statusClass==="in-stock"?"iconGreenCheck":"iconOrangeCheck"}.svg" alt="" class="product-card__status-icon">
                     ${e.status}
                    </span>
                <button class="btn card__btn">Подробнее</button>
            </div>
        `,s.appendChild(i)}),n}const m=`<section class="about section">\r
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
`;function h(){const c="/van-gogh-landing/",t=document.createElement("section"),r=m.replaceAll("/images/",`${c}images/`).replaceAll("/icons/",`${c}icons/`);return t.className="about section",t.innerHTML=r.trim(),t}const l=document.getElementById("app"),o="/van-gogh-landing/",p=[{img:`${o}images/products1.webp`,name:"Стальной канат для лифта GRS 9X21F(9Х17)-IWRC 1570",status:"В наличии 50 м.",statusClass:"in-stock"},{img:`${o}images/products2.webp`,name:"Плоский тяговый ремень для лифта GRS AAA717X1 (12 кордов)",status:"Под заказ",statusClass:"out-of-stock"},{img:`${o}images/products3.webp`,name:"Стальной канат для лифта GRS 8X19S-NFC 1570",status:"В наличии 50 м.",statusClass:"in-stock"},{img:`${o}images/products4.webp`,name:"Стальной канат для лифта GRS 9X21F(9Х17)-IWRC 1570",status:"В наличии 50 м.",statusClass:"in-stock"},{img:`${o}images/products5.webp`,name:"Стальной канат для лифта GRS 8X19W-CWC 1570",status:"В наличии 50 м.",statusClass:"in-stock"},{img:`${o}images/products6.webp`,name:"Купить плоский тяговый ремень для лифта GRS AAA717AJ1(8 кордов)",status:"В наличии 50 м.",statusClass:"in-stock"}];l.appendChild(u());l.appendChild(g(p));l.appendChild(h());
