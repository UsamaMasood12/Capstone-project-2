// eslint-disable-next-line
import { createSeasonList } from './homepage.js';

const fetchSeason = async (seasonId) => {
  const url = `https://api.tvmaze.com/seasons/${seasonId}/episodes`;
  await fetch(url)
    .then((response) => response.json())
    .then((data) => {
      createSeasonList(data);
    })
    .catch((error) => {
      console.error(error);
    });
};

export default fetchSeason;