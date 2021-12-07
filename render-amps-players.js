export function renderAmpsAndPlayers(eachAmp) {
    const eachAmpDiv = document.createElement('div');
    const ampMakeP = document.createElement('p');
    const ampModelP = document.createElement('p');
    const ampImg = document.createElement('img');
    
    ampMakeP.textContent = eachAmp.make;
    ampModelP.textContent = eachAmp.model;
    ampImg.src = eachAmp.img_url;

    eachAmpDiv.classList.add('each-amp-container');
    ampMakeP.classList.add('amps');
    ampModelP.classList.add('amps');
    ampImg.classList.add('amps');

    
    const playersDiv = document.createElement('div'); //WHERE DOES THIS GO? IN FOR LOOP?
    playersDiv.classList.add('players-container');
    
    for (let eachPlayer of eachAmp.famousPlayers) {
        const playerP = document.createElement('p');
        playerP.textContent = eachPlayer;
        playerP.classList.add('players');
        playersDiv.append(playerP);
    }

    eachAmpDiv.append(ampMakeP, ampModelP, ampImg, playersDiv);
    return eachAmpDiv;
}