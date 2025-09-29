import html from './about.html?raw';
import './about.css';

export function renderAbout() {
    const section = document.createElement('section');
    section.className = 'about section';
    section.innerHTML = html.trim();
    return section;
}
