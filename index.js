let movies = [];
const addMovie = (ev) => {
    ev.preventDefault();
    let movie = {
        id: Date.now(),
        title: document.getElementById('title').value,
        Year: document.getElementById('yr').value

    }
    movies.push(movie);
    document.querySelector('form').reset();
    console.warn("added", { movies });
    //let pre = document.querySelector('#msg pre');
    //pre.textContent = '\n' + JSON.stringify(movies, '\t,2');
    localStorage.setItem('MyMovieList', JSON.stringify(movies));
}
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('btn').addEventListener(
        'click', addMovie)
});