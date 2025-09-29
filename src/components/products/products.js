import html from './Products.html?raw';
import './products.css';

export function renderProducts(products = []) {
    const base = import.meta.env.BASE_URL;
    const wrapper = document.createElement('div');
    wrapper.innerHTML = html.trim();

    const section = wrapper.firstChild;
    const grid = section.querySelector('.products__grid');

    products.forEach((p, index) => {
        const card = document.createElement('div');
        card.className = 'product-card';

        if (index === 2 || index === 4) {
            card.classList.add('product-card--mobile-hidden');

        }

        card.innerHTML = `
            <img src="${p.img}" alt="${p.name}" class="product-card__img">
            <div class="product-card__desc-wrapper">
                <p class="product-card__desc">${p.name}</p>
                <span class="product-card__status ${p.statusClass}">
              <img src="${base}icons/${p.statusClass === 'in-stock' ? 'iconGreenCheck' : 'iconOrangeCheck'}.svg" alt="" class="product-card__status-icon">
                     ${p.status}
                    </span>
                <button class="btn card__btn">Подробнее</button>
            </div>
        `;
        grid.appendChild(card);
    });

    return section;
}
