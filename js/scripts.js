function searchMovies() {
    const query = document.getElementById('search-bar').value.toLowerCase();
    const movies = document.querySelectorAll('#movie-feed .movie');
    movies.forEach(movie => {
        const title = movie.querySelector('h2').textContent.toLowerCase();
        if (title.includes(query)) {
            movie.style.display = '';
        } else {
            movie.style.display = 'none';
        }
    });
    return false; // Prevent form submission
}

function searchCatalog() {
    const query = document.getElementById('search-bar').value.toLowerCase();
    const rows = document.querySelectorAll('#movie-list tr');
    rows.forEach(row => {
        const title = row.querySelector('td:first-child a').textContent.toLowerCase();
        if (title.includes(query)) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
    return false; // Prevent form submission
}

function filterCatalog() {
    const author = document.getElementById('author').value;
    const year = document.getElementById('year').value;
    const rating = document.getElementById('rating').value;
    const rows = document.querySelectorAll('#movie-list tr');
    rows.forEach(row => {
        const rowAuthor = row.querySelector('td:nth-child(2)').textContent;
        const rowYear = row.querySelector('td:nth-child(3)').textContent;
        const rowRating = row.querySelector('td:nth-child(4)').textContent;
        let display = true;
        if (author && rowAuthor !== author) display = false;
        if (year && rowYear !== year) display = false;
        if (rating && rowRating !== rating) display = false;
        row.style.display = display ? '' : 'none';
    });
}

function viewAll() {
    const rows = document.querySelectorAll('#movie-list tr');
    rows.forEach(row => row.style.display = '');
}

function showMovieDetails(movieName) {
    // Redirect to a detailed page or show a modal with the movie details
    // For now, alert the movie name
    alert('Showing details for ' + movieName);
}
