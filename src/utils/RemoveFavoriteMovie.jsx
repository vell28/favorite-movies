export default function RemoveToLocalStorage (id){

    if (!localStorage['favoriteMovie']) {

        return;

    } else {

        let getMovies = JSON.parse(localStorage['favoriteMovie']),
            newMovie = getMovies.filter((item, i) => {
            return item != id;
        })

        localStorage.setItem('favoriteMovie', JSON.stringify(newMovie));
    }
}