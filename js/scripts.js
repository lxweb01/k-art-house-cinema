const movies = {
    'spring-summer-fall-winter-spring': {
        title: 'Spring Summer Fall Winter... and Spring',
        img: 'img/kim-ki-duk-spring-1.jpg',
        director: 'Kim Ki-duk',
        releaseDate: '19 September 2003',
        boxOffice: '$9.53 million'
    },
    '3-iron': {
        title: '3-Iron',
        img: 'img/kim-ki-duk-3-iron.jpg',
        director: 'Kim Ki-duk',
        releaseDate: '2004',
        boxOffice: '$2 million'
    },
    'oldboy': {
        title: 'Oldboy',
        img: 'img/park-chan-wook-oldboy.jpg',
        director: 'Park Chan-wook',
        releaseDate: '2003',
        boxOffice: '$15 million'
    },
    'parasite': {
        title: 'Parasite',
        img: 'img/bong-joon-ho-parasite.jpg',
        director: 'Bong Joon-ho',
        releaseDate: '2019',
        boxOffice: '$258 million'
    },
    'memories-of-murder': {
        title: 'Memories of Murder',
        img: 'img/bong-joon-ho-memories.jpg',
        director: 'Bong Joon-ho',
        releaseDate: '2 May 2003',
        boxOffice: '$20.1 million'
    },
    'pieta': {
        title: 'Pietà',
        img: 'img/kim-ki-duk-pieta.jpg',
        director: 'Kim Ki-duk',
        releaseDate: '3 September 2012',
        boxOffice: '$9.6 million'
    },
    'im-a-cyborg-but-thats-ok': {
        title: 'I\'m a Cyborg, But That\'s OK',
        img: 'img/park-chan-wook-cyborg.jpg',
        director: 'Park Chan-wook',
        releaseDate: '7 December 2006',
        boxOffice: '$3.8 million'
    },
    'the-handmaiden': {
        title: 'The Handmaiden',
        img: 'img/park-chan-wook-handmaiden.jpg',
        director: 'Park Chan-wook',
        releaseDate: '1 June 2016',
        boxOffice: '$38.6 million'
    }
};

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

function showMovieDetails(movieId) {
    const movie = movies[movieId];
    document.getElementById('movie-title').textContent = movie.title;
    document.getElementById('movie-image').src = movie.img;
    document.getElementById('movie-director').textContent = movie.director;
    document.getElementById('movie-release-date').textContent = movie.releaseDate;
    document.getElementById('movie-box-office').textContent = movie.boxOffice;
    document.getElementById('movie-details').style.display = 'block';
}
