document.addEventListener("DOMContentLoaded", function () {

  const songs = [
    {
      title: "GTA 6 (Tutorial)",
      artist: "Estilo Corrido Tumbado",
      lyrics: `
[F#m]Intro moderno
[D]Cambio limpio
[A]Ambiente tumbado
[E]Resolución
`
    },
    {
      title: "Dopamina (Tutorial)",
      artist: "Regional Urbano",
      lyrics: `
[Am]Melancolía base
[G]Movimiento
[F]Transición
[E]Remate
`
    },
    {
      title: "Tu Sancho (Tutorial)",
      artist: "Corrido Clásico",
      lyrics: `
[G]Base tradicional
[D]Cambio rápido
[Em]Color menor
[C]Resolución
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

        let processedLyrics = song.lyrics.replace(/\[(.*?)\]/g, function(match, chord){
          return `<span class="chord">${chord}</span>`;
        });

        const div = document.createElement("div");
        div.className = "song-card";

        div.innerHTML = `
          <h2>${song.title}</h2>
          <h3>${song.artist}</h3>
          <pre>${processedLyrics}</pre>
        `;

        container.appendChild(div);
      });
  }

  renderSongs();

  // BUSCADOR
  const input = document.querySelector("input");
  input.addEventListener("input", function(e){
    renderSongs(e.target.value);
  });

  // MODO OSCURO
  const toggleBtn = document.getElementById("toggleTema");
  if(toggleBtn){
    toggleBtn.addEventListener("click", function(){
      document.body.classList.toggle("dark");
    });
  }

});
