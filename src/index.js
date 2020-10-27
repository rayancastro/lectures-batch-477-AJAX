console.log("Everything is hard before it gets easy!");

const results = document.querySelector('#results');

const fetchMovies = (keyword) => {

  const url = `http://www.omdbapi.com/?s=${keyword}&apikey=adf1f2d7`

  fetch(url)
    .then(response => response.json())
    .then((data) => {
      // console.log(data.Search);

      data.Search.forEach((movieData) => {
        const movie = `<li class="list-inline-item">
          <img src="${movieData['Poster']}">
          <p>${movieData['Title']}</p>
        </li>`

        results.insertAdjacentHTML("beforeend", movie);
      })
  })

}


const form = document.querySelector('#search-movies');
form.addEventListener('submit', (event) => {
  // Dont refresh
  event.preventDefault();
  // Select the input and get its value
  const input = document.querySelector('#keyword');
  const keyword = input.value;
  results.innerHTML = "";
  fetchMovies(keyword);
});


fetchMovies("rick and morty");
































