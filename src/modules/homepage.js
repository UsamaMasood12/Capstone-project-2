// eslint-disable-next-line
export const createSeasonList = (episodeDetails) => {
  const homePage = document.querySelector('.home-page');
  while (homePage.lastChild) {
    homePage.removeChild(homePage.lastChild);
  }
  episodeDetails.forEach((episodeDetail) => {
    const episodeTile = document.createElement('div');
    episodeTile.classList.add('episode-tile');
    episodeTile.id = episodeDetail.id;
    episodeTile.dataset.episodeId = episodeDetail.id;
    episodeTile.innerHTML = `
    <img class="episode-image" src="${episodeDetail.image.medium}" alt="episode image">
    <div class="header-wrapper">
    <h3 class="episode-name">${episodeDetail.name}</h3>
    </div>
    <button class="button-style" id="main-comment-popup" type="button">Comments</button>`;
    homePage.appendChild(episodeTile);
  });
};