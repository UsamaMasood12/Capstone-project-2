// eslint-disable-next-line
import { createSeasonList, displayLikes } from './homepage.js';
import episodeCounter from './episodeCounter.js';

const likeURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/KKlgY0e6iTLZYxIsAnMC/likes';

export const fetchSeason = async (seasonId, counter) => {
  const url = `https://api.tvmaze.com/seasons/${seasonId}/episodes`;
  await fetch(url)
    .then((response) => response.json())
    .then((data) => {
      createSeasonList(data);
      episodeCounter(counter);
    })
    .catch((error) => {
      console.error(error);
    });
};

export const fetchLike = async () => {
  let likes = [];
  const likeResponse = await fetch(likeURL);
  if (likeResponse.status === 200) {
    likes = [...await likeResponse.json()];
    displayLikes(likes);
  }
};

export const postNewLike = async (episodeId) => {
  await fetch(likeURL, {
    method: 'POST',
    body: JSON.stringify({ item_id: episodeId }),
    headers: { 'Content-type': 'application/json' },
  });
  fetchLike();
};