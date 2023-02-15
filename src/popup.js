const baseUrl = 'https://api.tvmaze.com/search/shows?q=girls';

const cmtbutton = document.querySelectorAll('.btn-container');

const aniApi = async () => {
    const api = await fetch('${baseUrl}');
    const { data } = await api.json();
    return data;
};

const popup
