document.addEventListener("DOMContentLoaded", function () {

  const songs = [
    {
      title: "Canción Demo Regional",
      artist: "AcordesPro",
      lyrics: `
C       G
Esta es una prueba

A       D
Para ver si funciona
`
    },
    {
      title: "Requinto Norteño",
      artist: "Demo",
      lyrics: `
G       D
Intro requinto

C       G
Verso regional
`
    }
  ];

  function renderSongs(filter = "") {
    const container = document.getElementById("contenedor-canciones");
    container.innerHTML = "";

    songs
      .filter(song =>
        song.title.toLowerCase().includes(filter.toLowerCase())
      )
      .forEach(song => {
        const div = document.createElement("div");
        div.className = "song-card";

        div.innerHTML = `
          <h2>${song.title}</h2>
          <h3>${song.artist}</h3>
          <pre>${song.lyrics}</pre>
        `;

        container.appendChild(div);
      });
  }

  renderSongs();

  // BUSCADOR
  const input = document.querySelector("input");
  input.addEventListener("input", function (e) {
    renderSongs(e.target.value);
  });

  // MODO OSCURO
  const toggleBtn = document.getElementById("toggleTema");
  toggleBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark");
  });

});
