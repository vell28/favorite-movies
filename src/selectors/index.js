export const getFavorites = state => state.AllPosts.favorites;
export const getMovies = state => state.AllPosts.result;
export const getError = state => state.AllPosts.error;
export const getLoading = state => state.AllPosts.isLoading;
export const getMovie = state => state.SingleMovie.result;
export const getSingleError = state => state.SingleMovie.error;