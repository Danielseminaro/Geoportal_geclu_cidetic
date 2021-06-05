"use strict";

// Se carga desde boletines.js
var videos = videos || { secciones: [{ nombre: "Boletín informativo COVID-19", videos: [{ link: 'https://www.youtube.com/embed/LMtGPI9a6Rg', titulo: 'Boletín N° 1-Reporte semanal Primera edición' }]}]};

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

  /**
   * Crea una sección en el selector, que tiene un título y una lista con todos
   * los videos disponibles. La sección se puede abrir y cerrar al hacer clic
   * sobre su título.
   * @param {HTMLElement} selector Lugar donde se seleccionan los videos.
   * @param {*} seccion Sección con su lista de videos.
   */
  crearSeccion: function(selector, seccion) {
    let itemSeccion = document.createElement("div");
    let divTituloSeccion = document.createElement("div");
    divTituloSeccion.className = "youtube-modal-seccion-titulo";
    divTituloSeccion.innerHTML = `<i class="fa fa-folder-open"></i> ${seccion.nombre}`;
    divTituloSeccion.onclick = this.onSeccionClick;
    let listaSeccion = document.createElement("ul");

    for (let video of seccion.videos) {
      listaSeccion.appendChild(this.crearLink(video.link, video.titulo));
    }

    itemSeccion.appendChild(divTituloSeccion);
    itemSeccion.appendChild(listaSeccion);
    selector.appendChild(itemSeccion);
  },

  /**
   * Muestra/oculta la lista de videos de la sección cuando se hace click en el 
   * nombre de la sección. También cambia el ícono de carpeta abierta/cerrada.
   * @param {MouseEvent} e Evento del clic
   */
  onSeccionClick: function(e) {
    let display, icon;
    if (e.target.nextSibling.style.display === "none") {
      display = "block"
      icon = "folder-open";
    } else {
      display = "none"
      icon = "folder";
    }
    e.target.nextSibling.style.display = display;
    e.target.querySelector("i").className = `fa fa-${icon}`;
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
    embed.src = videos.secciones[0].videos[0].link;
    embed.title = "YouTube video player";
    embed.frameborder = "0";
    embed.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    embed.allowFullscreen = true;
    embedContainer.appendChild(embed);

    const selectorContainer = document.createElement("div");
    selectorContainer.className = "youtube-selector-container";
    player.appendChild(selectorContainer);

    const selector = document.createElement("div");
    selector.id = "youtube-selector";
    for (let seccion of videos.secciones) {
      this.crearSeccion(selector, seccion);
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
