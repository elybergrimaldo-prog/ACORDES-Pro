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
  }
];

function renderSongs() {
  const container = document.getElementById("contenedor-canciones");
  container.innerHTML = "";

  songs.forEach(song => {
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
