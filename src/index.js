// Import functions
import { fetchMovies, addMovieList } from './movies';
import { initSortable } from './plugins/init_sortable'
import { initMarkdown } from './plugins/init_markdown'
import { initSelect2 } from './plugins/init_select2'

// Initialize Plugins
initSortable();
initMarkdown();
initSelect2();

// Call the functions
fetchMovies("harry potter");


// // Add listeners
const form = document.querySelector('#search-movies');
form.addEventListener('submit', addMovieList);


































