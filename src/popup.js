const baseUrl = 'https://api.tvmaze.com/search/shows?q=girls';

const cmtbutton = document.querySelectorAll('.btn-container');

const aniApi = async () => {
    const api = await fetch('${baseUrl}');
    const { data } = await api.json();
    return data;
};

const popup = async (idArrs) => {
    const api = await aniApi();

    for (let i = 0; i < cmtbutton.length; i+ = 1){
        comtbutton[i].onclick = () => {
            
        }
    }
}
