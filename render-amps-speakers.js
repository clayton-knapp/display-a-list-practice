export function renderAmpsAndSpeakers(eachAmpAndSpeaker) {
    const eachAmpDiv = document.createElement('div');
    const ampMakeP = document.createElement('p');
    const ampModelP = document.createElement('p');
    const ampImg = document.createElement('img');

    const speakerDiv = document.createElement('div');
    const speakerMakeP = document.createElement('p');
    const speakerModelP = document.createElement('p');
    const speakerImg = document.createElement('img');

    ampMakeP.textContent = eachAmpAndSpeaker.make;
    ampModelP.textContent = eachAmpAndSpeaker.model;
    ampImg.src = eachAmpAndSpeaker.img_url;

    eachAmpDiv.classList.add('each-amp-container');
    ampMakeP.classList.add('amps');
    ampModelP.classList.add('amps');
    ampImg.classList.add('amps');

    speakerMakeP.textContent = eachAmpAndSpeaker.speaker.make;
    speakerModelP.textContent = eachAmpAndSpeaker.speaker.model;
    speakerImg.src = eachAmpAndSpeaker.speaker.img_url;

    speakerDiv.classList.add('speaker-container');
    speakerMakeP.classList.add('speakers');
    speakerModelP.classList.add('speakers');
    speakerImg.classList.add('speakers');

    speakerDiv.append(speakerMakeP, speakerModelP, speakerImg);
    eachAmpDiv.append(ampMakeP, ampModelP, ampImg, speakerDiv);

    return eachAmpDiv;
}