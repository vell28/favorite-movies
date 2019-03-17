export default function removeFromLocalStorage (id){

        const getMovies = JSON.parse(localStorage['favoriteMovie']);
        const  newMovie = getMovies.filter(item => Number(item) !== Number(id));
        localStorage.setItem('favoriteMovie', JSON.stringify(newMovie));
        return newMovie;
}