document.addEventListener("DOMContentLoaded", function () {

  const songs = [
    {
  title: "GTA 6 (Tutorial)",
  artist: "Estilo Corrido Tumbado",
  lyrics: `
Tonalidad: F#m
Capo: 2 (opcional)

Intro:
F#m - D - A - E

Verso:
F#m
Progresión base estilo tumbado

D
Cambio limpio

A
Entrada de bajo sexto

E
Remate

Coro:
D - A - E - F#m

Rasgueo sugerido:
↓ ↓ ↑ ↑ ↓ ↑
`
},
{
  title: "Dopamina (Tutorial)",
  artist: "Estilo Regional Moderno",
  lyrics: `
Tonalidad: Am

Intro:
Am - G - F - E

Verso:
Am
Base menor melancólica

G
Movimiento descendente

F
Transición

E
Resolución fuerte

Coro:
Am - F - C - G

Rasgueo:
↓ ↑ ↓ ↑ ↓
`
},
{
  title: "Tu Sancho (Tutorial)",
  artist: "Estilo Corrido",
  lyrics: `
Tonalidad: G

Intro:
G - D - Em - C

Verso:
G
Base clásica regional

D
Cambio rápido

Em
Color menor

C
Resolución

Puente:
Em - D - C - G
`
},
{
  title: "1004 KM (Tutorial)",
  artist: "Estilo Norteño Moderno",
  lyrics: `
Tonalidad: A

Intro:
A - E - F#m - D

Verso:
A
Progresión sentimental

E
Cambio abierto

F#m
Color menor

D
Cierre
`
},
{
  title: "Estilo Tito Double P (Álbum)",
  artist: "Regional Mexicano",
  lyrics: `
Tonalidad común: F#m / G#m

Progresión típica:
F#m - D - A - E

Variante:
G#m - E - B - F#

Rasgueo tumbado:
↓ ↓ ↑ (pausa) ↑ ↓ ↑
`
}
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
