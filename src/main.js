import { renderHeader } from './components/header/header.js';
import { renderProducts } from './components/products/products.js';
import { renderAbout } from './components/about/about.js';

const app = document.getElementById('app');

const productsData = [
    { img: '/images/products1.webp', name: 'Стальной канат для лифта GRS 9X21F(9Х17)-IWRC 1570', status: 'В наличии 50 м.', statusClass: 'in-stock' },
    { img: '/images/products2.webp', name: 'Плоский тяговый ремень для лифта GRS AAA717X1 (12 кордов)', status: 'Под заказ', statusClass: 'out-of-stock' },
    { img: '/images/products3.webp', name: 'Стальной канат для лифта GRS 8X19S-NFC 1570', status: 'В наличии 50 м.', statusClass: 'in-stock' },
    { img: '/images/products4.webp', name: 'Стальной канат для лифта GRS 9X21F(9Х17)-IWRC 1570', status: 'В наличии 50 м.', statusClass: 'in-stock' },
    { img: '/images/products5.webp', name: 'Стальной канат для лифта GRS 8X19W-CWC 1570', status: 'В наличии 50 м.', statusClass: 'in-stock' },
    { img: '/images/products6.webp', name: 'Купить плоский тяговый ремень для лифта GRS AAA717AJ1(8 кордов)', status: 'В наличии 50 м.', statusClass: 'in-stock' },
];

app.appendChild(renderHeader());
app.appendChild(renderProducts(productsData));
app.appendChild(renderAbout());
