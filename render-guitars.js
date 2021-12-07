export function renderGuitars(eachGuitar) {
    const p = document.createElement('p');
    p.textContent = eachGuitar;
    p.classList.add('guitars');
    return p;
}