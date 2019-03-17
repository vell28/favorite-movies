export default function AddToLocalStorage (movie){

    if (!localStorage['favoriteMovie']) {

        localStorage.setItem('favoriteMovie', JSON.stringify([movie]));

    } else {

        let getMovies = JSON.parse(localStorage['favoriteMovie']),
            addMovie = getMovies;
            
        addMovie.push(movie);

        let filterMovie = addMovie.filter((item, i) => {
            return addMovie.indexOf(item) == i;
        })

        localStorage.setItem('favoriteMovie', JSON.stringify(filterMovie));
    }
} 