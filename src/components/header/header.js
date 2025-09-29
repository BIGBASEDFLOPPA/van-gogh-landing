import html from './header.html?raw';
import './header.css';

export function renderHeader() {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = html.trim();
    const header = wrapper.firstElementChild;

    const toggle = header.querySelector('.header__toggle');
    const mobileNav = header.querySelector('.header__nav--mobile');
    const mobileLinks = header.querySelectorAll('.header__nav--mobile .header__link');

    function openMenu() {
        header.classList.add('open');
        if (getComputedStyle(mobileNav).display !== 'none') {
            mobileNav.style.maxHeight = mobileNav.scrollHeight + 'px';
        }
    }

    function closeMenu() {
        header.classList.remove('open');
        mobileNav.style.maxHeight = '0px';
    }

    toggle.addEventListener('click', () => {
        if (header.classList.contains('open')) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 1160) {
            header.classList.remove('open');
            mobileNav.style.maxHeight = null;
        } else {
            if (header.classList.contains('open')) {
                mobileNav.style.maxHeight = mobileNav.scrollHeight + 'px';
            }
        }
    });

    return header;
}
