container.innerHTML = "";

  songs.forEach(song => {
    const div = document.createElement("div");
    div.className = "song-card";

    div.innerHTML = `
      <h2>${song.title}</h2>
      <h3>${song.artist}</h3>
      <pre>${song.lyrics}</pre>
