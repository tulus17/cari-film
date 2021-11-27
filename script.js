//card baru
$.ajax({
  url: "http://www.omdbapi.com/?apikey=4faff805&s=top",
  success: (hasil) => {
    //megubah hasil request menjadi array
    const moviess = hasil.Search;
    console.log(moviess);
    let cardss = "";
    moviess.forEach((m) => {
      cardss += showCardss(m);
    });
    $(".movie-containeres").html(cardss);

    //tombol detail di klik
    $(".modal-detail-button").on("click", function () {
      $.ajax({
        url: "http://www.omdbapi.com/?apikey=4faff805&i=" + $(this).data("imdbid"),
        success: (m) => {
          const movieDetail = showMovieDetail(m);
          $(".modal-body").html(movieDetail);
        },
        error: (e) => {
          console.log(e.responseText);
        },
      });
    });
  },
  error: (e) => {
    console.log(e.responseText);
  },
});

$(".search-btnn").on("click", function () {
  $.ajax({
    url: "http://www.omdbapi.com/?apikey=4faff805&s=" + $(".input-keyword").val(),
    success: (results) => {
      //megubah hasil request menjadi array
      const movies = results.Search;
      let cards = "";
      movies.forEach((m) => {
        cards += showCards(m);
      });
      $(".movie-container").html(cards);

      //ketika tombol detail di click
      $(".modal-detail-button").on("click", function () {
        $.ajax({
          url: "http://www.omdbapi.com/?apikey=4faff805&i=" + $(this).data("imdbid"),
          success: (m) => {
            const movieDetail = showMovieDetail(m);
            $(".modal-body").html(movieDetail);
          },
          error: (e) => {
            console.log(e.responseText);
          },
        });
      });
    },
    error: (e) => {
      console.log(e.responseText);
    },
  });
});

//function showcards
function showCards(m) {
  return ` <div class="col-md-4 my-5">
                    <div class="card">
                      <img src="${m.Poster}" class="card-img-top" />
                      <div class="card-body">
                        <h5 class="card-title">${m.Title}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${m.Year}</h6>
                        <a href="#" class="btn btn-primary modal-detail-button" data-bs-toggle="modal" data-bs-target="#movieDetailModal" data-imdbid="${m.imdbID}">Show detail</a>
                      </div>
                    </div>
                  </div>`;
}

function showMovieDetail(m) {
  return `<div class="container-fluid">
                <div class="row">
                  <div class="col-md-3">
                    <img src="${m.Poster}" class="img-fluid" />
                  </div>
                  <div class="col-md">
                    <ul class="list-group">
                      <li class="list-group-item"><h4>${m.Title} (${m.Year})</h4></li>
                      <li class="list-group-item"><strong>actor : ${m.Actors}</strong></li>
                      <li class="list-group-item"><strong>penulis: ${m.Writer} </strong></li>
                      <li class="list-group-item"><strong>sutradara : ${m.Plot} </strong></li>
                    </ul>
                  </div>
                </div>
              </div>`;
}

function showCardss(m) {
  return `<div class="col-md-4 my-5">
                    <div class="card bg-dark text-white">
                      <img src="${m.Poster}" class="card-img-top" />
                      <div class="card-body">
                        <h5 class="card-title">${m.Title}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${m.Year}</h6>
                        <a href="#" class="btn btn-primary modal-detail-button" data-bs-toggle="modal" data-bs-target="#movieDetailModal" data-imdbid="${m.imdbID}">Show detail</a>
                      </div>
                    </div>
                  </div>`;
}
