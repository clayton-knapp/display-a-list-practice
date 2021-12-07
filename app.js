// import functions and grab DOM elements

// initialize global state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

//SIMPLE ARRAY OF STRINGS - GUITARS

import { guitars } from './array-guitars.js';
import { renderGuitars } from './render-guitars.js';

const list1Div = document.querySelector('#list1');

for (let eachGuitar of guitars) {
    const p = renderGuitars(eachGuitar);
    list1Div.append(p);
}


//ARRAY OF OBJECTS - AMPS

import { amps } from './array-amps.js';
import { renderAmps } from './render-amps.js';

const list2Div = document.querySelector('#list2');

for (let eachAmp of amps) {
    const eachAmpDiv = renderAmps(eachAmp);
    list2Div.append(eachAmpDiv);
}

//ARRAY OF OBJECTS WITH ONE NESTED OBJECT - AMPS + SPEAKERS

import { ampsAndSpeakers } from './array-amps-speakers.js';
import { renderAmpsAndSpeakers } from './render-amps-speakers.js';

const list3Div = document.querySelector('#list3');

for(let eachAmpAndSpeaker of ampsAndSpeakers) {
    const eachAmpDiv = renderAmpsAndSpeakers(eachAmpAndSpeaker);
    list3Div.append(eachAmpDiv);
}

//ARRAY OF OBJECTS WITH ONE NESTED ARRAY - AMPS & PLAYERS

import { ampsAndPlayers } from './array-amps-players.js';
import { renderAmpsAndPlayers } from './render-amps-players.js';

const list4Div = document.querySelector('#list4');

for (let eachAmp of ampsAndPlayers) {
    const eachAmpDiv = renderAmpsAndPlayers(eachAmp);
    list4Div.append(eachAmpDiv);
}