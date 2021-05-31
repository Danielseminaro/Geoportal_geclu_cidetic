"use strict";

// Se carga desde boletines.js
var boletines = boletines || {videos: [{link: 'https://www.youtube.com/embed/xDuHVaUM1jQ', titulo: 'Boletín N° 19-Edición especial-Geografía del COVID-19: "A un año de la pandemia"'}]};

var ReproductorYoutube = {
  // Cambiar el src del iframe para reproducir otro video
  cambiarVideo: function(URL) {
    document.getElementById("youtube-embed-video").src = URL;
  },

  // Crear el elemento "li" para cada video del reproductor
  crearLink: function(video, titulo) {
    const link = document.createElement("li");
    link.video =  video;
    link.textContent = titulo;
    return link;
  },

  // Abrir el reproductor en una ventana modal
  abrir: function() {
    const modal = document.createElement("div");
    modal.id = "youtube-modal";

    const modalClose = document.createElement("div");
    modalClose.id = "youtube-modal-close";
    modalClose.addEventListener("click", () => {
      ReproductorYoutube.cerrar();
    });
    modal.appendChild(modalClose);

    const player = document.createElement("div");
    player.className = "youtube-player";
    modal.appendChild(player);
    
    const embedContainer = document.createElement("div");
    embedContainer.className = "youtube-embed-container";
    player.appendChild(embedContainer);
    
    const embed = document.createElement("iframe");
    embed.id = "youtube-embed-video";
    embed.src = boletines.videos[0].link;
    embed.title = "YouTube video player";
    embed.frameborder = "0";
    embed.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    embed.allowFullscreen = true;
    embedContainer.appendChild(embed);

    const selectorContainer = document.createElement("div");
    selectorContainer.className = "youtube-selector-container";
    player.appendChild(selectorContainer);

    const selector = document.createElement("ul");
    selector.id = "youtube-selector";
    for (let boletin of boletines.videos) {
      selector.appendChild(this.crearLink(boletin.link, boletin.titulo));
    }
    selector.addEventListener("click", (e) => {
      if (e.target && e.target.nodeName == "LI") {
        ReproductorYoutube.cambiarVideo(e.target.video);
      }
    });
    selectorContainer.appendChild(selector);

    document.body.appendChild(modal);
  },

  // Cerrar la ventana modal
  cerrar: function() {
    document.getElementById("youtube-modal").remove();
  }
}

window.addEventListener("keyup", (event) => {
  if (event.defaultPrevented) {
    return; // Do nothing if the event was already processed
  }

  switch (event.key) {
    case "Esc": // IE/Edge specific value
    case "Escape":
      if (document.getElementById("youtube-modal"))
        ReproductorYoutube.cerrar();
      break;
    default:
      return; // Quit when this doesn't handle the key event.
  }
  // Cancel the default action to avoid it being handled twice
  event.preventDefault();
}, true);
