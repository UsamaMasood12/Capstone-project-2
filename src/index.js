import fetchSeason from './modules/APIfunctions.js';
import './style.css';

const seasons = ['130070', '58465', '58464'];

window.onload = () => {
  fetchSeason(seasons[0]);
};

const seasonbtn1 = document.querySelector('#season-1');
seasonbtn1.onclick = () => {
  fetchSeason(seasons[0]);
};

const seasonbtn2 = document.querySelector('#season-2');
seasonbtn2.onclick = () => {
  fetchSeason(seasons[1]);
};

const seasonbtn3 = document.querySelector('#season-3');
seasonbtn3.onclick = () => {
  fetchSeason(seasons[2]);
};