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
      title: "Y Lloro (Tutorial)",
      artist: "Regional Mexicano",
      lyrics: `
Tonalidad: G

Intro:
G - D - Em - C

Verso:
G
Base sentimental

D
Cambio abierto

Em
Color menor

C
Resolución

Coro:
Em - C - G - D
`
    },
    {
      title: "Está Dañada (Tutorial)",
      artist: "Estilo Norteño Moderno",
      lyrics: `
Tonalidad: Am

Intro:
Am - G - F - E

Verso:
Am
Progresión melancólica

G
Movimiento descendente

F
Transición

E
Remate fuerte

Coro:
Am - F - C - G
`
    },
    {
      title: "Dopamina (Tutorial)",
      artist: "Regional Urbano",
      lyrics: `
Tonalidad: F#m

Intro:
F#m - E - D - C#

Verso:
F#m
Base menor intensa

E
Cambio dinámico

D
Preparación

C#
Resolución

Coro:
D - A - E - F#m
`
    },
    {
      title: "Tu Sancho (Tutorial)",
      artist: "Corrido Clásico",
      lyrics: `
Tonalidad: A

Intro:
A - E - F#m - D

Verso:
A
Progresión base

E
Cambio limpio

F#m
Color menor

D
Resolución

Puente:
F#m - E - D - A
`
    },
    {
      title: "1004 KM (Tutorial)",
      artist: "Estilo Norteño",
      lyrics: `
Tonalidad: D

Intro:
D - A - Bm - G

Verso:
D
Base romántica

A
Cambio abierto

Bm
Color menor

G
Cierre

Coro:
G - D - A - Bm
`
    },
    {
      title: "Estilo Tito Double P (Álbum Tutorial)",
      artist: "Regional Mexicano Moderno",
      lyrics: `
Tonalidad común: F#m / G#m

Progresión típica:
F#m - D - A - E

Variante alternativa:
G#m - E - B - F#

Rasgueo tumbado:
↓ ↓ ↑ (pausa) ↑ ↓ ↑

Tip:
Usar requinto en escala menor natural
`
    }
  ];

  function renderSongs(filter = "") {
    const container = document.getElementById("contenedor-canciones");
    container.innerHTML = "";

    songs
      .filter(song =>
        song.title.toLowerCase().includes(filter.toLowerCase()) ||
        song.artist.toLowerCase().includes(filter.toLowerCase())
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
