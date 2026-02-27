const canciones = [
  {
    id: 1,
    titulo: "Canción Demo",
    letra: `
    <span class="acorde">C</span> Hola cómo estás <br>
    <span class="acorde">G</span> Hoy te vengo a cantar <br>
    <span class="acorde">Am</span> Esta canción <br>
    <span class="acorde">F</span> Que te va a gustar  
    `
  }
];

const acordes = ["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"];

function mostrarCanciones(){
  const contenedor = document.getElementById("contenedor-canciones");
  contenedor.innerHTML = "";

  canciones.forEach(cancion => {
    let votos = localStorage.getItem("votos_"+cancion.id) || 0;

    contenedor.innerHTML += `
      <div class="cancion">
        <h2>${cancion.titulo}</h2>
        <p>${cancion.letra}</p>

        <button onclick="transponer(1)">Subir tono</button>
        <button onclick="transponer(-1)">Bajar tono</button>

        <div style="margin-top:10px;">
          <button onclick="votar(${cancion.id},1)">👍 Correctos</button>
          <button onclick="votar(${cancion.id},-1)">👎 Incorrectos</button>
          <span>Puntuación: ${votos}</span>
        </div>
      </div>
    `;
  });
}

function transponer(pasos){
  const elementos = document.querySelectorAll(".acorde");
  elementos.forEach(el => {
    let indice = acordes.indexOf(el.textContent);
    if(indice !== -1){
      let nuevo = (indice + pasos + acordes.length) % acordes.length;
      el.textContent = acordes[nuevo];
    }
  });
}

function votar(id, valor){
  let votos = parseInt(localStorage.getItem("votos_"+id)) || 0;
  votos += valor;
  localStorage.setItem("votos_"+id, votos);
  mostrarCanciones();
}

document.getElementById("toggleTema").addEventListener("click", () => {
  document.body.classList.toggle("dark");
  localStorage.setItem("temaOscuro", document.body.classList.contains("dark"));
});

if(localStorage.getItem("temaOscuro") === "true"){
  document.body.classList.add("dark");
}

mostrarCanciones();
const chords = {
  C: {
    name: "C Mayor",
    variations: [
      {
        name: "Abierto",
        image: "chords/C-open.png"
      },
      {
        name: "Cejilla Traste 3",
        image: "chords/C-barre-3.png"
      }
    ]
  },

  G: {
    name: "G Mayor",
    variations: [
      {
        name: "Abierto",
        image: "chords/G-open.png"
      }
    ]
  }function renderChord(chordKey) {
  const chord = chords[chordKey];
  const container = document.getElementById("chordContainer");

  container.innerHTML = `
    <div class="chord-card">
      <h3>${chord.name}</h3>
      <img id="chordImage" src="${chord.variations[0].image}" width="200">

      <div>
        ${chord.variations.map((v, index) => `
          <button onclick="changeVariation('${chordKey}', ${index})">
            ${v.name}
          </button>
        `).join("")}
      </div>
    </div>
  `;
}
};function changeVariation(chordKey, index) {
  const chord = chords[chordKey];
  document.getElementById("chordImage").src =
    chord.variations[index].image;
}
