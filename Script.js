document.getElementById("contenedor-canciones").innerHTML =// ====== CANCIONES ======

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

// ====== RENDER ======

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

// ====== BUSCADOR ======

document.querySelector("input").addEventListener("input", (e) => {
  renderSongs(e.target.value);
});

// ====== MODO OSCURO ======

const toggleBtn = document.getElementById("toggleTema");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
