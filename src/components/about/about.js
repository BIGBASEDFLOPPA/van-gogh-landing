import htmlRaw from './about.html?raw';
import './about.css';

export function renderAbout() {
    const base = import.meta.env.BASE_URL;
    const section = document.createElement('section');
    const html = htmlRaw
        .replaceAll('/images/', `${base}images/`)
        .replaceAll('/icons/', `${base}icons/`);
    section.className = 'about section';
    section.innerHTML = html.trim();
    return section;
}
