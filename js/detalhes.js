const params = new URLSearchParams(window.location.search);
const id = params.get('id');
const media = params.get('media')

document.addEventListener("DOMContentLoadded", async () => {
    //buscar filmes
    getMovie();
    toaggleLoading();
});

async function getMovies() {
    let movie;
    await fetch(`https://api.themoviedb.org/3/${media}/${id}?language=pt-BR`, options)
        .then(res => res.json())
        .then(res => movie = res)
        .catch(err => console.error(err));
}

document.querySelector(`.poster`).src = movie.poster_path ? `https://image.tmdb.org/t/p/original/${movie.poster_path}` : 'img/no-poster.png';

let detalhes = document.getElementById('detalhes');
detalhes.innerHTML = `
            <h1 class="fs-1 text-danger">${movie.tittle ?? movie.name}</h1>
            <h4 class="mb-4 fw-bold">Titulo Original: ${movie.original_tittle ?? movie.original_name}</h4>
            <p class='mb-3>Data de Estreia: ${formatDate(movie.release_date ?? movie.last_air_date)}</p>
            <p class='mb-3>País de Origem: ${movie.origin_country}</p>
            <p class='mb-3>Popularidade: ${movie.popularity.toFixed(1)}</p>
            <p class='mb-3>Status: ${movie.status}</p>
            <p class='mb-3>${movie.overview}</p>`;
movie.genres.forEach(genre => {
    detalhes.innerHTML += `<button class="btn btn-lg btn-outline-danger me-2">${genre.name}</button>`
});

let trailer;
await fetch(`https://api.themoviedb.org/3/${media}/${id}/videos?language=pt-BR`, options)
    .then(res => res.json())
    .then(res => movie = res)
    .catch(err => console.error(err));

let trailerContainer = document.querySelector('#trailer');
if (trailer.lenght > 0) {
    let carousel = document.querySelector('.carousel-inner');
    carousel.innerHTML = '';
    for (let i = 0; i < trailer.lenght; i++) {
        carousel.innerHTML +=
        `´<div class="carousel-item ${i == 0 ? 'active' : ''}">
            <iframe class='rounded-5 d-block w-100' widht="100%" height="500" src="https://www.youtube.com/embed/${trailer[i].key}"></iframe>
            <div class="carousel-caption d-none d-md-block">
                <h5 class="mb-0">${trailer[i].name} - Publicado em: ${formatDate(trailer[i].published_at)}</5>
                </div>
            </div>`  
    }
} else {
    trailerContainer.computedStyleMap.display = 'none';
}

let cast = [];
await fetch(`https://api.themovie.org/3/${media}/${id}/credits?language=pt-br`, options)
    .then(res => res.json())
    .then(res => cast = res.cast)
    .catch(err => console.error(err));  

let castContainer = document.querySelector('#elenco');
if (cast.lenght > 0) {

    castContainer.innerHTML = '';
    for (let i = 0; i < cast.lenght; i++) {
        let image = cast[i].profile_path ? `´https://image.tmdb.org/t/p/original/${cast[i].profile_path}` : 'img/no-photo-cast.png';
        castContainer.innerHTML +=
        `<div class="col-lg-4 col-sm-6">
            <div class="row">
                <div class="col-sm-6 col-md-4 col-lg-3 mb-3">
                    <a href="pessoa.html?id=${cast[i].id}" class="text-decotarion-none text-white">
                        <div class='img-container'>
                            <div class="elenco-img" src="${image}" style="backuground-image: url('${image}');"></div>
                            </div>
                        </a>
                    </div>
                    <div class="col-sm-6 col-md-8 col-lg-9 mb-3">
                        <a href="pessoa.html?id=${cast.id}" class="text-decoration-none text-white">
                            <h4 class="mb-1>${cast[i].original_name}</h4>
                        </a>
                        <a href="pessoa.html?id=${cast.id}" class="text-decoration-none text-white">
                            <p class="mb-1>${cast[i].character}</p>
                        </a>
                    </div>

                </div>
            </div>´
    }
} else {
 castContainer.parentElement.style.display = 'none';