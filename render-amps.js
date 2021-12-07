export function renderAmps(eachAmp) {
    const eachAmpDiv = document.createElement('div');
    const makeP = document.createElement('p');
    const modelP = document.createElement('p');
    const ampImg = document.createElement('img');

    makeP.textContent = eachAmp.make;
    modelP.textContent = eachAmp.model;
    ampImg.src = eachAmp.img_url;

    eachAmpDiv.classList.add('each-amp-container');
    makeP.classList.add('amps');
    modelP.classList.add('amps');
    ampImg.classList.add('amps');

    eachAmpDiv.append(makeP, modelP, ampImg);

    return eachAmpDiv;
}