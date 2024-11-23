const container = document.querySelector('.container');
const movieTitle = document.querySelector('.userInputTitle');
const moviePosterUrl = document.querySelector('.userInputPosterUrl');
const btn = document.querySelector('.button');
const movieTitleToDisplay = document.querySelector('.favouriteMovieTitle');
const releaseYear = document.querySelector('.userInputYear');
const yearToDisplay = document.querySelector('.releaseYear');

let titleInStorage = localStorage.getItem('title');
let imageUrlStorage = localStorage.getItem('imageUrl');
let yearInStorage = localStorage.getItem('year');

if(titleInStorage && imageUrlStorage && yearInStorage) {
    movieTitleToDisplay.textContent = titleInStorage;
    yearToDisplay.textContent = yearInStorage;
    container.style.backgroundImage = `linear-gradient(rgba(63, 179, 169, 0.616), rgba(8, 22, 94, 0.507)), 
    url('${imageUrlStorage}')`;

}

btn.addEventListener('click', () => {
    let movieTitleInput = movieTitle.value;
    let posterUrlInput = moviePosterUrl.value;
    let yearInput = releaseYear.value;
    localStorage.setItem('title', movieTitleInput);
    localStorage.setItem('imageUrl', posterUrlInput);
    localStorage.setItem('year', `(${yearInput})`);
    movieTitleToDisplay.textContent = movieTitleInput;
    yearToDisplay.textContent = `(${yearInput})`;
    container.style.backgroundImage = `linear-gradient(rgba(63, 179, 169, 0.616), rgba(8, 22, 94, 0.507)),
    url('${posterUrlInput}')`;  
    movieTitle.value = '';
    moviePosterUrl.value = '';
    releaseYear.value = '';
});
