
let myMap = L.map('myMap',{zoomDelta: 0.25,zoomSnap: 0}).setView ([-34.60,-59.10], 9 )   


//  TILES

var tilesProvider = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'). addTo(myMap)
var Esri_WorldImagery = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}')
var CartoDB_DarkMatter = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png')
var Stamen_Watercolor = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.{ext}', {
	ext: 'jpg'
});



// ESCALA GRAFICA 

L.control.scale().addTo(myMap);



// MAPAS

var mapa1 = L.geoJSON(cuenca,{style:styleA,popup:popupA})
var mapa3 = L.geoJSON(Mil_marzo,{style:styleC,popup:popupC})
var mapa4 = L.geoJSON(Mil_abril,{style:styleD,popup:popupD})
var mapa5 = L.geoJSON(tasa,{style:styleE,popup:popupE})
var mapa6 = L.geoJSON(Mil_mayo,{style:styleF,popup:popupF})
var mapa7 = L.geoJSON(Mil_junio,{style:styleG,popup:popupG})
var mapa8 = L.geoJSON(Mil_julio,{style:styleH,popup:popupH})
var mapa9 = L.geoJSON(Mil_agosto,{style:styleI,popup:popupI})
var mapa10 = L.geoJSON(Mil_septiembre,{style:styleJ,popup:popupJ})
var mapa11 = L.geoJSON(Mil_octubre,{style:styleK,popup:popupK})
var mapa12 = L.geoJSON(Mil_noviembre,{style:styleL,popup:popupL})
var mapa13 = L.geoJSON(Mil_diciembre,{style:styleM,popup:popupM})
var mapa14 = L.geoJSON(distancia,{style:styleN,popup:popupN})
var mapa15 = L.geoJSON(dencidad,{style:styleÑ,popup:popupÑ})
var mapa16 = L.geoJSON(urbano,{style:styleO,popup:popupO})
var mapa17 = L.geoJSON(hacinamiento,{style:style17,popup:popup17})
var mapa18 = L.geoJSON(puntos,{pointToLayer: function (feature, latlng) {return L.circleMarker(latlng, MarkerOptions);},style:estilo18,onEachFeature:popup18});
var mapa19 = L.geoJSON(ene_2021,{style:style19,popup:popup19})
var mapa20 = L.geoJSON(feb_2021,{style:style20,popup:popup20})
var mapa21 = L.geoJSON(mar_2021,{style:style21,popup:popup21})
var mapa22 = L.geoJSON(abr_2021,{style:style22,popup:popup22})
var mapa23 = L.geoJSON(may_2021,{style:style23,popup:popup22})
var mapa24 = L.geoJSON(mortalidad,{style:style24,popup:popup24})



const DATOS = [
    { nombre: 'Pilar', lat: -34.4582696, lng: -58.9146566, casos: 3318 },
    { nombre: 'Chacabuco', lat: -34.6432577, lng: -60.4746223, casos: 30 },
    { nombre: 'Carmen de Areco', lat: -34.3764562, lng: -59.8233220, casos: 36 },
    { nombre: 'Exaltación de la Cruz', lat: -34.2799400, lng: -59.1062300, casos: 292 },
    { nombre: 'Escobar', lat: -34.3477000, lng: -58.7971000, casos: 2827 },
    { nombre: 'José C. Paz', lat: -34.5093880, lng: -58.7748438, casos: 4104 },
    { nombre: 'Moreno', lat: -34.6391, lng: -58.7917, casos: 7246 },
    { nombre: 'San Andres de Giles', lat: -34.4417541, lng: -59.4475955, casos: 48 },
    { nombre: 'Suipacha', lat: -34.7680613, lng: -59.6868968, casos: 90 },
    { nombre: 'Mercedes', lat: -34.6546566, lng: -59.4312716, casos: 542 },
    { nombre: 'Lujan', lat: -34.5673399, lng: -59.1161120, casos: 1355 },
    { nombre: 'Campana', lat: -34.1717516, lng: -58.9582586, casos: 758 },
    { nombre: 'Gral. Rodriguez', lat: -34.5959552, lng: -58.9524114, casos: 1211 },
    { nombre: 'San Fernando', lat: -34.4585172, lng: -58.5892594, casos: 3289 },
]

var capasCirculos = []

for (let dato of DATOS) {
    let radioCirculo = dato.casos * 2
    let circulo = L.circle([dato.lat, dato.lng], {
        color: 'black',
        fillColor: '#000',
        fillOpacity: 0.5,
        radius: radioCirculo
    });
    circulo.bindPopup(`<b>${dato.nombre}</b>: ${dato.casos} casos`);
    circulo.on('mouseover', function () { this.openPopup(); })
    capasCirculos.push(circulo)
}

var casos_covid = L.layerGroup(capasCirculos);

// ESTILOS DEL MAPA PUNTOS
var legend1 = L.control({position: 'bottomright'});

legend1.onAdd = function (map) {
    var div = L.DomUtil.create('div', 'info legend1');
    div.innerHTML += '<img src="img/Referencias.png" />';
    return div;
};



// ESTILOS DEL MAPA A

function getColorA(d) {
    return d > 7300 ? '#800026' :
           d > 7300 ? '#B00026' :
           d > 2500 ? '#E31A1C' :
           d > 2500?   '#FC4E2A' :
           d > 500 ? '#FD8D3C' :
           d > 500? '#FEB24C' :
           d > 36 ? '#FED976' :
                      '#FFEDA0';
}


function styleA(feature) {
   return {
       fillColor: getColorA(feature.properties.Casos_confi),
       weight: 2,
       opacity: 1,
       color: 'red',
       dashArray: '3',
       fillOpacity: 0.7
   };
}











// ESTILOS MAPA C


function getColorC(d) {
    return d > 8.69 ? '#ff0000' :
           d > 5.75 ? '#ff0000' :
           d > 2.82 ? '#ff4040' :
           d > 1.86?  '#ff8080':
           d > 0.38 ? '#ffbfbf' :
           d > 0  ?   '#ffffff' :
                      '#ffffff';
}



function styleC(feature) {
    return {
        fillColor: getColorC(feature.properties.mar),
        weight: 2,
        opacity: 1,
        color: 'black',
        dashArray: '5',
        fillOpacity: 0.9
    };
}




// ESTILOS MAPA D


function getColorD(d) {
    return d > 21.1 ? '#ff0000' :
           d > 16.9 ? '#ff0000' :
           d > 9.9 ?  '#ff4040' :
           d > 4.5?   '#ff8080':
           d > 0 ?    '#ffbfbf' :
           d > 0  ?   '#ffffff' :
                      '#ffffff';
}



function styleD(feature) {
    return {
        fillColor: getColorD(feature.properties.abr),
        weight: 2,
        opacity: 1,
        color: 'black',
        dashArray: '5',
        fillOpacity: 0.9
    };
}








// ESTILOS MAPA E



function getColorE(d) {
    return d > 20 ? '#08306b' :
           d > 15 ? '#08306b' :
           d > 13 ? '#2171b5' :
           d > 10 ? '#6baed6' :
           d > 5  ? '#deebf7' :
           d > 1  ? '#f7fbff' :
                    '#f7fbff';
}




function styleE(feature) {
    return {
        fillColor: getColorE(feature.properties.Tasa),
        weight: 2,
        opacity: 1,
        color: 'black',
        dashArray: '5',
        fillOpacity: 0.9
    };
}



// ESTILOS MAPA F


function getColorF(d) {
    return d > 62 ? '#ff0000' :
           d > 35 ? '#ff0000' :
           d > 28 ?  '#ff4040' :
           d > 17?   '#ff8080':
           d > 8 ?   '#ffbfbf' :
           d > 0  ?   '#ffffff' :
                      '#ffffff';
}



function styleF(feature) {
    return {
        fillColor: getColorF(feature.properties.may),
        weight: 2,
        opacity: 1,
        color: 'black',
        dashArray: '5',
        fillOpacity: 0.9
    };
}


// ESTILOS MAPA G

function getColorG(d) {
    return d > 255 ? '#ff0000' :
           d > 202 ? '#ff0000' :
           d > 182 ?  '#ff4040' :
           d > 152?   '#ff8080':
           d > 30?   '#ffbfbf' :
           d > 16  ?  '#ffffff' :
                      '#ffffff';
}



function styleG(feature) {
    return {
        fillColor: getColorG(feature.properties.jun),
        weight: 2,
        opacity: 1,
        color: 'black',
        dashArray: '5',
        fillOpacity: 0.9
    };
}




// ESTILOS MAPA H



function getColorH(d) {
    return d > 987 ? '#ff0000' :
           d > 688 ? '#ff0000' :
           d > 657 ?  '#ff4040' :
           d > 535 ?   '#ff8080':
           d > 359?   '#ffbfbf' :
           d > 133 ?   '#ffffff' :
                      '#ffffff';
}



function styleH(feature) {
    return {
        fillColor: getColorH(feature.properties.jul),
        weight: 2,
        opacity: 1,
        color: 'black',
        dashArray: '5',
        fillOpacity: 0.9
    };
}


// ESTILOS MAPA I



function getColorI(d) {
    return d > 2405? '#ff0000' :
           d > 1904? '#ff0000' :
           d > 1859?  '#ff4040' :
           d > 1217?   '#ff8080':
           d > 783?   '#ffbfbf' :
           d > 201?   '#ffffff' :
                          '#ffffff';
}



function styleI(feature) {
    return {
        fillColor: getColorI(feature.properties.ago),
        weight: 2,
        opacity: 1,
        color: 'black',
        dashArray: '5',
        fillOpacity: 0.9
    };
}

// ESTILOS MAPA J


function getColorJ(d) {
    return d > 3412? '#ff0000' :
           d > 2933? '#ff0000' :
           d > 2837?  '#ff4040' :
           d > 1939?   '#ff8080':
           d > 1368?   '#ffbfbf' :
           d > 398?   '#ffffff' :
                          '#ffffff';
}



function styleJ(feature) {
    return {
        fillColor: getColorJ(feature.properties.sep),
        weight: 2,
        opacity: 1,
        color: 'black',
        dashArray: '5',
        fillOpacity: 0.9
    };
}

// ESTILOS MAPA K


function getColorK(d) {
    return d > 4251? '#ff0000' :
           d > 3692? '#ff0000' :
           d > 3430?  '#ff4040' :
           d > 3016?   '#ff8080':
           d > 1805?   '#ffbfbf' :
           d > 977?   '#ffffff' :
                          '#ffffff';
}



function styleK(feature) {
    return {
        fillColor: getColorK(feature.properties.oct),
        weight: 2,
        opacity: 1,
        color: 'black',
        dashArray: '5',
        fillOpacity: 0.9
    };
}



// ESTILOS MAPA L


function getColorL(d) {
    return d > 4911? '#ff0000' :
           d > 4218? '#ff0000' :
           d > 3827?  '#ff4040' :
           d > 3444?   '#ff8080':
           d > 2063?   '#ffbfbf' :
           d > 1298?   '#ffffff' :
                          '#ffffff';
}



function styleL(feature) {
    return {
        fillColor: getColorL(feature.properties.nov),
        weight: 2,
        opacity: 1,
        color: 'black',
        dashArray: '5',
        fillOpacity: 0.9
    };
}



// ESTILOS MAPA M


function getColorM(d) {
    return d > 5218? '#ff0000' :
           d > 4555? '#ff0000' :
           d > 4061?  '#ff4040' :
           d > 3738?   '#ff8080':
           d > 3008?   '#ffbfbf' :
           d > 2258?   '#ffffff' :
                        '#ffffff';
}



function styleM(feature) {
    return {
        fillColor: getColorM(feature.properties.dic),
        weight: 2,
        opacity: 1,
        color: 'black',
        dashArray: '5',
        fillOpacity: 0.9
    };
}

// ESTILOS MAPA N

function getColorN(d) {
    return d > 175? '#ffffb2' :
           d > 97? '#ffffb2' :
           d > 65?  '#fecc5c' :
           d > 46?   '#fd8d3c':
           d > 32?   '#f03b20' :
           d > 21?   '#bd0026' :
                     '#bd0026';
}



function styleN(feature) {
    return {
        fillColor: getColorN(feature.properties.Distancia),
        weight: 2,
        opacity: 1,
        color: 'black',
        dashArray: '5',
        fillOpacity: 0.9
    };
}



// ESTILOS MAPA Ñ

function getColorÑ(d) {
    return d > 5320? '#bd0026' :
           d > 985? '#bd0026' :
           d > 238?  '#f03b20' :
           d > 96?   '#fd8d3c':
           d > 21?   '#fecc5c' :
           d > 11?   '#ffffb2' :
                     '#ffffb2';
}



function styleÑ(feature) {
    return {
        fillColor: getColorÑ(feature.properties.Densidad),
        weight: 2,
        opacity: 1,
        color: 'black',
        dashArray: '5',
        fillOpacity: 0.9
    };
}


// ESTILOS MAPA O

function getColorO(d) {
    return d > 99.73?  '#bd0026' :
           d > 71.86?  '#bd0026' :
           d > 31.04?  '#f03b20' :
           d > 8.59?   '#fd8d3c':
           d > 1.26?   '#fecc5c' :
           d > 0.61?   '#ffffb2' :
                       '#ffffb2';
}



function styleO(feature) {
    return {
        fillColor: getColorO(feature.properties.indiceurb),
        weight: 2,
        opacity: 1,
        color: 'black',
        dashArray: '5',
        fillOpacity: 0.9
    };
}




// ESTILOS MAPA 17

function getColor17(d) {
    return d > 6.46?  '#bd0026' :
           d > 5.88?  '#bd0026' :
           d > 4.34?  '#f03b20' :
           d > 3.97?   '#fd8d3c':
           d > 2.75?   '#fecc5c' :
           d > 2.27?   '#ffffb2' :
                       '#ffffb2';
}



function style17(feature) {
    return {
        fillColor: getColor17(feature.properties.hac_cri),
        weight: 2,
        opacity: 1,
        color: 'black',
        dashArray: '5',
        fillOpacity: 0.9
    };
}

// ESTILOS MAPA 18


var MarkerOptions ={
    fillColor: "#0b0b0b",
    color: "#0b0b0b",
    weight: 1,
    opacity: 1.5,
    fillOpacity: 0.5
};



function getRadius(r) { 
    return r > 100000 ? 55 : 
    r > 40749 ? 45 : 
    r > 29562 ? 35 : 
    r > 15821 ? 25:  
    r > 9469 ? 15 : 
    r > 2280  ? 7 : 
    r > 745 ? 3:
            3; 
};

function estilo18 (feature) {
    return{
        radius: getRadius(feature.properties.may), 
        };
};


// ESTILOS MAPA 19



function getColor19(d) {
    return d > 5770? '#ff0000' :
           d > 4964? '#ff0000' :
           d > 4756?  '#ff4040' :
           d > 4395?   '#ff8080':
           d > 3769?   '#ffbfbf' :
           d > 2949?   '#ffffff' :
                        '#ffffff';
}



function style19(feature) {
    return {
        fillColor: getColor19(feature.properties.ene),
        weight: 2,
        opacity: 1,
        color: 'black',
        dashArray: '5',
        fillOpacity: 0.9
    };
}




// ESTILOS MAPA 20



function getColor20(d) {
    return d > 6624.71? '#ff0000' :
           d > 5683.77? '#ff0000' :
           d > 5403.04?  '#ff4040' :
           d > 4770.51?   '#ff8080':
           d > 4338.20?   '#ffbfbf' :
           d > 3413.38?   '#ffffff' :
                        '#ffffff';
}



function style20(feature) {
    return {
        fillColor: getColor20(feature.properties.feb),
        weight: 2,
        opacity: 1,
        color: 'black',
        dashArray: '5',
        fillOpacity: 0.9
    };
}


// ESTILOS MAPA 21



function getColor21(d) {
    return d > 25793.00? '#ff0000' :
           d > 18851.00? '#ff0000' :
           d > 10164.00?  '#ff4040' :
           d > 6109.00?   '#ff8080':
           d > 1467.00?   '#ffbfbf' :
           d > 455.00?   '#ffffff' :
                        '#ffffff';
}



function style21(feature) {
    return {
        fillColor: getColor21(feature.properties.mar),
        weight: 2,
        opacity: 1,
        color: 'black',
        dashArray: '5',
        fillOpacity: 0.9
    };
}


// ESTILOS MAPA 22



function getColor22(d) {
    return d > 33744? '#ff0000' :
           d > 24114? '#ff0000' :
           d > 12979?  '#ff4040' :
           d > 7775?   '#ff8080':
           d > 1930?   '#ffbfbf' :
           d > 612?   '#ffffff' :
                        '#ffffff';
}



function style22(feature) {
    return {
        fillColor: getColor22(feature.properties.abr),
        weight: 2,
        opacity: 1,
        color: 'black',
        dashArray: '5',
        fillOpacity: 0.9
    };
}




// ESTILOS MAPA 23



function getColor23(d) {
    return d > 40749? '#ff0000' :
           d > 29562? '#ff0000' :
           d > 15821?  '#ff4040' :
           d > 9469?   '#ff8080':
           d > 2280?   '#ffbfbf' :
           d > 747?   '#ffffff' :
                        '#ffffff';
}



function style23(feature) {
    return {
        fillColor: getColor23(feature.properties.may),
        weight: 2,
        opacity: 1,
        color: 'black',
        dashArray: '5',
        fillOpacity: 0.9
    };
}




// ESTILOS MAPA 24



function getColor24(d) {
    return d > 327? '#ff0000' :
           d > 278? '#ff0000' :
           d > 223?  '#ff4040' :
           d > 208?   '#ff8080':
           d > 201?   '#ffbfbf' :
           d > 145?   '#ffffff' :
                        '#ffffff';
}



function style24(feature) {
    return {
        fillColor: getColor24(feature.properties.Tasa_Mortalidad),
        weight: 2,
        opacity: 1,
        color: 'black',
        dashArray: '5',
        fillOpacity: 0.9
    };
}






// Leyendas

/** 
 * Crea un control para poner una leyenda. Se coloca en la esquina inferior 
 * derecha. 
 */
function createLegend() {
    return L.control({ position: 'bottomright' });
}

/**
 * Agrega el listener del evento de adición a un control de leyenda.
 * @param {L.Control} legend Control de leyenda.
 * @param {string} imgSrc Ruta de la imagen de la leyenda.
 */
function onLegendAdd(legend, imgSrc) {
    legend.onAdd = function () {
        var div = L.DomUtil.create('div', 'info legend1');
        div.innerHTML += `<img src="${imgSrc}" />`;
        return div;
    }
}

var legendA = createLegend();
onLegendAdd(legendA, "img/Referencias2.png");


var legendC = createLegend();
onLegendAdd(legendC, "img/ref_mar.png");

var legendD = createLegend();
onLegendAdd(legendD, "img/ref_abr.png");

var legendE = createLegend();
onLegendAdd(legendE, "img/Referencias4.png");

var legendF = createLegend();
onLegendAdd(legendF, "img/ref_may.png");

var legendG = createLegend();
onLegendAdd(legendG, "img/ref_jun.png");

var legendH = createLegend();
onLegendAdd(legendH, "img/ref_jul.png");

var legendI = createLegend();
onLegendAdd(legendI, "img/ref_ago.png");

var legendJ = createLegend();
onLegendAdd(legendJ, "img/ref_sep.png");

var legendK = createLegend();
onLegendAdd(legendK, "img/ref_oct.png");

var legendL = createLegend();
onLegendAdd(legendL, "img/ref_nov.png");

var legendM = createLegend();
onLegendAdd(legendM, "img/ref_dic.png");

var legendN = createLegend();
onLegendAdd(legendN, "img/ref_distancia.png");

var legendÑ = createLegend();
onLegendAdd(legendÑ, "img/ref_densidad.png");

var legendO = createLegend();
onLegendAdd(legendO, "img/ref_sup_urbana.png");

var legend17 = createLegend();
onLegendAdd(legend17,"img/ref_hacinamiento.png");

var legend18 = createLegend();
onLegendAdd(legend18,"img/ref_casos-posi_21.png");

var legend19 = createLegend();
onLegendAdd(legend19,"img/ref_ene_2021.png");


var legend20 = createLegend();
onLegendAdd(legend20,"img/ref_feb_2021.png");


var legend21 = createLegend();
onLegendAdd(legend21,"img/ref_mar_2021.png");

var legend22 = createLegend();
onLegendAdd(legend22,"img/ref_abr_2021.png");


var legend23 = createLegend();
onLegendAdd(legend23,"img/ref_may_2021.png");

var legend24 = createLegend();
onLegendAdd(legend24,"img/ref_mortalidad.png");






//POPUP  DEL MAPA A


function popupA (feature,layer){
    /** 
     * Popup que solo muestra el nombre del partido y la cantidad de casos, 
     * para cuando se pasa el mouse por arriba. 
    */


    
 const contenido = `<b>${feature.properties.NOMBRE}</b>: ${feature.properties.Casos_confi} casos confirmados`

      

    layer.on('mouseover', function () {
        this.bindPopup(contenido, { maxWidth: "auto" });
        this.openPopup();
    })

    /**
     * Popup que solo muestra el gráfico de casos del partido para cuando se
     * hace click en el partido.
    */

    
    const contenidoImg = `<img src="${feature.properties.IMAGENES}" style="width:800px;height:500px;">`
    
    layer.on('click', function () {
        this.bindPopup(contenidoImg, { maxWidth: "auto" });
        this.openPopup();
    })
}       
     



// POPUP DEL MAPA C


function popupC (feature,layer){
    layer.bindPopup(
  "</p>Nombre: "+feature.properties.Nombre+ 
  "</p>Casos cada cien mil (100.000) habitantes, mes de marzo:"+feature.properties.mar+"</p>"
);
    layer.on('mouseover', function () { this.openPopup(); })
}

mapa3 = L.geoJson(Mil_marzo, { 
    style:styleC, onEachFeature: popupC
})







// POPUP DEL MAPA  D

function popupD (feature,layer){
    layer.bindPopup(
  "</p>Nombre: "+feature.properties.Nombre+ 
  "</p>Casos cada cien mil (100.000) habitantes, mes de abril:"+feature.properties.abr+"</p>"
);
    layer.on('mouseover', function () { this.openPopup(); })
}

mapa4 = L.geoJson(Mil_abril, { 
    style:styleD, onEachFeature: popupD
})




//POPUP DEL MAPA E

function popupE (feature,layer){
    layer.bindPopup(
        "<p>Nombre: "+feature.properties.NOMBRE + "</p>" +
        "<p>Tasa de contagios: " + feature.properties.Tasa + "</p>"
    );
    layer.on('mouseover', function () { this.openPopup(); })
}

mapa5 = L.geoJson(tasa, { 
    style:styleE, onEachFeature: popupE
})


//POPUP DEL MAPA F

function popupF (feature,layer){
    layer.bindPopup(
  "</p>Nombre: "+feature.properties.Nombre+ 
  "</p>Casos cada cien mil (100.000) habitantes, mes de mayo:"+feature.properties.may+"</p>"
);
    layer.on('mouseover', function () { this.openPopup(); })
}

mapa6 = L.geoJson(Mil_mayo, { 
    style:styleF, onEachFeature: popupF

})


//POPUP DEL MAPA G


function popupG (feature,layer){
    layer.bindPopup(
  "</p>Nombre: "+feature.properties.Nombre+ 
  "</p>Casos cada cien mil (100.000) habitantes, mes de junio:"+feature.properties.jun+"</p>"
);
    layer.on('mouseover', function () { this.openPopup(); })
}

mapa7 = L.geoJson(Mil_junio, { 
    style:styleG, onEachFeature: popupG

})



//POPUP DEL MAPA H


function popupH (feature,layer){
    layer.bindPopup(
  "</p>Nombre: "+feature.properties.Nombre+ 
  "</p>Casos cada cien mil (100.000) habitantes, mes de julio:"+feature.properties.jul+"</p>"
);
    layer.on('mouseover', function () { this.openPopup(); })
}

mapa8 = L.geoJson(Mil_julio, { 
    style:styleH, onEachFeature: popupH

})

//POPUP DEL MAPA I

function popupI (feature,layer){
    layer.bindPopup(
  "</p>Nombre: "+feature.properties.Nombre+ 
  "</p>Casos cada cien mil (100.000) habitantes, mes de agosto:"+feature.properties.ago+"</p>"
);
    layer.on('mouseover', function () { this.openPopup(); })
}

mapa9 = L.geoJson(Mil_agosto, { 
    style:styleI, onEachFeature: popupI

})

//POPUP DEL MAPA J

function popupJ (feature,layer){
    layer.bindPopup(
  "</p>Nombre: "+feature.properties.Nombre+ 
  "</p>Casos cada cien mil (100.000) habitantes, mes de septiembre:"+feature.properties.sep+"</p>"
);
    layer.on('mouseover', function () { this.openPopup(); })
}

mapa10 = L.geoJson(Mil_septiembre, { 
    style:styleJ, onEachFeature: popupJ

})



//POPUP DEL MAPA K

function popupK(feature,layer){
    layer.bindPopup(
  "</p>Nombre: "+feature.properties.Nombre+ 
  "</p>Casos cada cien mil (100.000) habitantes, mes de octubre:"+feature.properties.oct+"</p>"
);
    layer.on('mouseover', function () { this.openPopup(); })
}

mapa11 = L.geoJson(Mil_octubre, { 
    style:styleK, onEachFeature: popupK

})



//POPUP DEL MAPA L

function popupL(feature,layer){
    layer.bindPopup(
  "</p>Nombre: "+feature.properties.Nombre+ 
  "</p>Casos cada cien mil (100.000) habitantes, mes de noviembre:"+feature.properties.nov+"</p>"
);
    layer.on('mouseover', function () { this.openPopup(); })
}

mapa12 = L.geoJson(Mil_noviembre, { 
    style:styleL, onEachFeature: popupL

})


//POPUP DEL MAPA M

function popupM(feature,layer){
    layer.bindPopup(
  "</p>Nombre: "+feature.properties.Nombre+ 
  "</p>Casos cada cien mil (100.000) habitantes, mes de diciembre:"+feature.properties.dic+"</p>"
);
    layer.on('mouseover', function () { this.openPopup(); })
}

mapa13 = L.geoJson(Mil_diciembre, { 
    style:styleM, onEachFeature: popupM

})



//POPUP DEL MAPA N

function popupN(feature,layer){
    layer.bindPopup(
  "</p>Nombre: "+feature.properties.Nombre+ 
  "</p>Proximidad (Distancia) Km.:"+feature.properties.Distancia+"</p>"
);
    layer.on('mouseover', function () { this.openPopup(); })
}

mapa14 = L.geoJson(distancia, { 
    style:styleN, onEachFeature: popupN

})



//POPUP DEL MAPA Ñ

function popupÑ(feature,layer){
    layer.bindPopup(
  "</p>Nombre: "+feature.properties.Nombre+ 
  "</p>Densidad (Pob./Km2):"+feature.properties.Densidad+"</p>"
);
    layer.on('mouseover', function () { this.openPopup(); })
}

mapa15 = L.geoJson(dencidad, { 
    style:styleÑ, onEachFeature: popupÑ

})



//POPUP DEL MAPA O

function popupO(feature,layer){
    layer.bindPopup(
  "</p>Nombre: "+feature.properties.Nombre+ 
  "</p>Superficie urbana (%):"+feature.properties.indiceurb+"</p>"
);
    layer.on('mouseover', function () { this.openPopup(); })
}

mapa16 = L.geoJson(urbano, { 
    style:styleO, onEachFeature: popupO

})


//POPUP DEL MAPA 17

function popup17(feature,layer){
    layer.bindPopup(
  "</p>Nombre: "+feature.properties.Nombre+ 
  "</p>Hacinamiento Crítico (%):"+feature.properties.hac_cri+"</p>"
);
    layer.on('mouseover', function () { this.openPopup(); })
}

mapa17 = L.geoJson(hacinamiento, { 
    style:style17, onEachFeature: popup17

})





// POPUP DEL MAPA 18



function popup18 (feature, layer) {
	layer.bindPopup(
        "</p>Nombre: "+feature.properties.Nombre+
        "</p> Casos:"+feature.properties.may+"</p>",
               
    {minWidth: 150, maxWidth: 200});
    
    layer.on('mouseover', function () { this.openPopup(); })


};


    
var mapa18 = L.geoJSON(puntos, {
    pointToLayer: function (feature, latlng) {
            return L.circleMarker(latlng, MarkerOptions);
        },	
    	style:estilo18,onEachFeature:popup18			
});



//  POPUP DEL MAPA 19



function popup19 (feature, layer) {
	layer.bindPopup(
        "</p>Nombre: "+feature.properties.Nombre+
        "</p>Casos cada cien mil (100.000) habitantes, mes de enero:"+feature.properties.ene+"</p>",
               
    {minWidth: 150, maxWidth: 200});
    
    layer.on('mouseover', function () { this.openPopup(); })


};


mapa19 = L.geoJson(ene_2021, { 
    style:style19, onEachFeature: popup19

})



//  POPUP DEL MAPA 20



function popup20 (feature, layer) {
	layer.bindPopup(
        "</p>Nombre: "+feature.properties.Nombre+
        "</p>Casos cada cien mil (100.000) habitantes, mes de febrero:"+feature.properties.feb+"</p>",
               
    {minWidth: 150, maxWidth: 200});
    
    layer.on('mouseover', function () { this.openPopup(); })


};


mapa20 = L.geoJson(feb_2021, { 
    style:style20, onEachFeature: popup20

})



//  POPUP DEL MAPA 21


function popup21 (feature, layer) {
	layer.bindPopup(
        "</p>Nombre: "+feature.properties.Nombre+
        "</p>Casos cada cien mil (100.000) habitantes, mes de marzo:"+feature.properties.mar+"</p>",
               
    {minWidth: 150, maxWidth: 200});
    
    layer.on('mouseover', function () { this.openPopup(); })


};


mapa21 = L.geoJson(mar_2021, { 
    style:style21, onEachFeature: popup21

})



//  POPUP DEL MAPA 22


function popup22 (feature, layer) {
	layer.bindPopup(
        "</p>Nombre: "+feature.properties.Nombre+
        "</p>Casos cada cien mil (100.000) habitantes, mes de abril:"+feature.properties.abr+"</p>",
               
    {minWidth: 150, maxWidth: 200});
    
    layer.on('mouseover', function () { this.openPopup(); })


};


mapa22 = L.geoJson(abr_2021, { 
    style:style22, onEachFeature: popup22

})



//  POPUP DEL MAPA 23


function popup23 (feature, layer) {
	layer.bindPopup(
        "</p>Nombre: "+feature.properties.Nombre+
        "</p>Casos cada cien mil (100.000) habitantes, mes de mayo:"+feature.properties.may+"</p>",
               
    {minWidth: 150, maxWidth: 200});
    
    layer.on('mouseover', function () { this.openPopup(); })


};


mapa23 = L.geoJson(may_2021, { 
    style:style23, onEachFeature: popup23

})





//  POPUP DEL MAPA 24


function popup24 (feature, layer) {
	layer.bindPopup(
        "</p>Nombre: "+feature.properties.Nombre+
        "</p>Tasa de mortalidad (cada 100 mil hab.):"+feature.properties.Tasa_Mortalidad+"</p>",
               
    {minWidth: 150, maxWidth: 200});
    
    layer.on('mouseover', function () { this.openPopup(); })


};


mapa24 = L.geoJson(mortalidad, { 
    style:style24, onEachFeature: popup24

})









// SIDEBAR 

var sidebar = L.control.sidebar({  container: "sidebar" , position: "right",}) .addTo(myMap)



// SELECTOR DE MAPAS 
var layerControl = L.control.layers.tree(
    [],
    [
        {
            label: "Variables COVID-19",
            children: [
                {
                    label: "Casos activos (24/05/21)",
                    layer: mapa1
                },
                {
                    label: "Tasa de contagios por cada 1000 hab.(24/05/21)",
                    layer: mapa5
                },
                {
                    label: "Capa de puntos: Casos confirmados (24/05/21)",
                    layer: casos_covid
                },

                {
                    label: "Capa de puntos: Casos confirmados",
                    layer: mapa18
                },

                {
                    label: "Tasa de mortalidad (cada 100 mil hab.)",
                    layer: mapa24
                }



            ]
        },
        {
            label: "Condicionantes socioespaciales",
            children: [
                {
                    label: "Densidad poblacional",
                    layer: mapa15
                },
                {
                    label: "Porcentaje de Superficie urbanizada",
                    layer: mapa16
                },
                {
                    label: "Proximidad ",
                    layer: mapa14
                },
                {
                    label: "Hogares con hacinamiento crítico",
                    layer: mapa17
                }
            ]
        }
    ],
    {
        collapsed: false,
        openedSymbol: '<i class="fa fa-folder-open"></i>',
        closedSymbol: '<i class="fa fa-folder"></i>'
    }
)
layerControl.addTo(myMap);





var Base = {
"Satélite":Esri_WorldImagery,
"OSM": tilesProvider,
"Darck":CartoDB_DarkMatter,
"Acuarela": Stamen_Watercolor
} 


 


// COLOCA DENTRO DEL SIDEBAR


var htmlObject = layerControl.getContainer();

var a = document.getElementById('home');
 
 function setParent(el, newParent) {
   newParent.appendChild(el);
}
setParent(htmlObject, a);
 


var controlBase= L.control.layers(Base,null,{
   
   collapsed:false
}).addTo(myMap)


document.getElementById("profile").appendChild(
  controlBase.getContainer()
);


// TABLERO DE MEDICION 

/** 
 * Tamaño (ancho x alto) del ícono del marcador.
 * Debería tener la misma proporción que la imagen original. 
 */
const ICON_SIZE = [40.876656472987, 50]

/** 
 * Posición del cursor respecto al marcador cuando se está colocando. 
 * Lo puse para que coincida el cursor con la punta del marcador.
 */
const ICON_ANCHOR = [ICON_SIZE[0] / 2, ICON_SIZE[1]]

var LeafIcon = L.Icon.extend({
    options: {
       shadowUrl: 
       "",
       iconSize: ICON_SIZE,
       shadowSize:   [50, 64],
       iconAnchor: ICON_ANCHOR,
       shadowAnchor: [4, 62],
       popupAnchor:  [-3, -76]
    }
 });
 
 var greenIcon = new LeafIcon({
    iconUrl: "img/loca.png"
    });
 
 
 var drawnItems = new L.FeatureGroup();
 myMap.addLayer(drawnItems);
 
 var drawControl = new L.Control.Draw({
    position: 'topleft',
    draw: {
       polygon: {
          shapeOptions: {
             color: 'purple'
          },
          allowIntersection: false,
          drawError: {
             color: 'orange',
             timeout: 1000
          },
          showArea: true,
          metric: false,
          repeatMode: true
       },
       polyline: {
          shapeOptions: {
             color: 'red'
          },
       },
       rect: {
          shapeOptions: {
             color: 'green'
          },
       },
       circle: {
          shapeOptions: {
             color: 'steelblue'
          },
       },
       marker: {
          icon: greenIcon
       },
    },
    edit: {
       featureGroup: drawnItems
    }
});
 myMap.addControl(drawControl);
 
 myMap.on('draw:created', function (e) {
    var type = e.layerType,
       layer = e.layer;
 
    if (type === 'marker') {
       layer.bindPopup('A popup!');
    }
 
    drawnItems.addLayer(layer);
});
 
//MINI MAP
 
myMap.setView(new L.LatLng(-34.60,-59.10),9)
 
var osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
 
var miniMap = new L.Control.MiniMap(osm,{  position: 'bottomleft' }).addTo(myMap);
 
// IMPRIMIR

var imp = L.control({position: 'topleft'});

imp.onAdd = function (map) {
    var div = L.DomUtil.create('div', 'info imp');
    
 div.innerHTML +=

 '<a href="javascript:window.print()"><i class="icon-printer"></i></a>'
 
 
 return div;
 };

imp.addTo(myMap)


// Número de casos debajo del header, se obtiene de conteo.js
var conteo = conteo || {datos: [{region: "No disponible", casos: 0}]};

var select_data = conteo.datos.map((dato, i) => {
    return { id: i, text: dato.region };
});

$("#infobar-select").select2({
    data: select_data,
    width: "35%"
});

$(".infobar-number").text(
    conteo.datos[0].casos.toLocaleString("es-AR")
);

$("#infobar-select").change(function () {
    let casos = conteo.datos[$(this).val()].casos;
    $(".infobar-number").text(casos.toLocaleString("es-AR"));
});


/** 
 * Lista de capas, separadas por año. Para cada una hay que poner la capa con
 * los casos y la leyenda correspondiente.
 */
var capas = {
    2020: {
        Marzo: { mapa: mapa3, leyenda: legendC }, 
        Abril: { mapa: mapa4, leyenda: legendD },
        Mayo: { mapa: mapa6, leyenda: legendF },
        Junio: { mapa: mapa7, leyenda: legendG },
        Julio: { mapa: mapa8, leyenda: legendH },
        Agosto: { mapa: mapa9, leyenda: legendI },
        Septiembre: { mapa: mapa10, leyenda: legendJ },
        Octubre: { mapa: mapa11, leyenda: legendK },
        Noviembre: { mapa: mapa12, leyenda: legendL },
        Diciembre: { mapa: mapa13, leyenda: legendM },
        

    },


    2021: {
      
        Enero: { mapa: mapa19, leyenda: legend19},
        Febrero: { mapa: mapa20, leyenda: legend20},
        Marzo: { mapa: mapa21, leyenda: legend21 },
        Abril: { mapa: mapa22, leyenda: legend22 },
        Mayo: { mapa: mapa23, leyenda: legend23 },

    }
};

// Selector del año
var controlSelect = L.control({ position: "topright" });
controlSelect.onAdd = function () {
    var div = L.DomUtil.create("div", "label-año");

    var labelAño = document.createElement("label");
    labelAño.for = "select-año";
    labelAño.textContent = "Año";

    var selectAño = document.createElement("select");
    selectAño.id = "select-año";

    labelAño.appendChild(selectAño);
    div.appendChild(labelAño);
    return div;
};

controlSelect.addTo(myMap);

$("#select-año").select2({
    data: Object.keys(capas),
    width: "100%"
});

/** Control deslizante, correspondiente al año seleccionado actualmente. */
var sliderAnioActual = null;
/** Control leyenda del mes seleccionado actualmente. */
var leyendaMesActual = null;
/** Capa del mes seleccionado actualmente. */
var capaMesActual = mapa3;
/** Capa seleccionada de la barra lateral actualmente. */
var capaLateralActual = null;
/** Leyenda provista para una de las capas seleccionadas en la barra lateral. */
var leyendaLateralActual = null;

/** 
 * Quita la capa y la leyenda correspondiente actuales, para dar lugar a las 
 * capa seleccionada posteriormente. 
 */
function quitarCapaMesActual() {
    if (capaMesActual) {
        myMap.removeLayer(capaMesActual);
        capaMesActual = null;
    }
    if (leyendaMesActual) {
        myMap.removeControl(leyendaMesActual);
        leyendaMesActual = null;
    }
}

/**
 * Quita la capa y la leyenda correspondiente seleccionada desde la barra
 * lateral del mapa.
 */
function quitarCapaLateralActual() {
    if (capaLateralActual) {
        myMap.removeLayer(capaLateralActual);
        capaLateralActual = null;
    }
    if (leyendaLateralActual) {
        myMap.removeControl(leyendaLateralActual);
        leyendaLateralActual = null;
    }
}

$("#select-año").change(e => {
    if (sliderAnioActual) {
        sliderAnioActual.remove();
    }

    let listaMeses = capas[e.target.value];

    if (Object.keys(listaMeses).length > 0) {
        sliderAnioActual = L.control.timelineSlider({
            position: "topright",
            timelineItems: Object.keys(listaMeses),
            changeMap: function (e) {
                /* 
                 * Cuando se mueve el slider, saco la capa y leyenda actuales y 
                 * pongo las nuevas. 
                 */
                quitarCapaMesActual();
                quitarCapaLateralActual();

                var mes = listaMeses[Object.keys(listaMeses)[e.value - 1]];

                mes.mapa.addTo(myMap);
                capaMesActual = mes.mapa;

                mes.leyenda.addTo(myMap);
                leyendaMesActual = mes.leyenda;
            },
            activeColor: "#02205E"
        });
    }
    else {
        // Mensaje de error por si no hay mapas disponibles para un año.
        sliderAnioActual = L.control({ position: "topright" });
        sliderAnioActual.onAdd = function () {
            var div = L.DomUtil.create("div", "mapa-no-disponible label-año");
            div.textContent = "No hay datos disponibles para este año";
            return div;
        };

        quitarCapaMesActual();
    }
    sliderAnioActual.addTo(myMap);
});

// Disparar el evento de cambio del select para mostrar el primer mapa.
$('#select-año').trigger("change");

/* 
 * Cuando se selecciona una capa de la barra lateral, se agrega o quita la
 * leyenda correspondiente.
 */
myMap.on('overlayadd', function (event) {
    var leyenda;
    switch (event.layer) {
        case mapa1: leyenda = legendA; break;
        case mapa5: leyenda = legendE; break;
        case casos_covid: leyenda = legend1; break;
        case mapa14: leyenda = legendN; break;
        case mapa15: leyenda = legendÑ; break;
        case mapa16: leyenda = legendO; break;
        case mapa17: leyenda = legend17; break;
        case mapa18: leyenda = legend18; break;
        case mapa24: leyenda = legend24; break;

    }
    if (leyenda) {
        leyenda.addTo(myMap);
    }
});

myMap.on('overlayremove', function (event) {
    var leyenda;
    switch (event.layer) {
        case mapa1: leyenda = legendA; break;
        case mapa5: leyenda = legendE; break;
        case casos_covid: leyenda = legend1; break;
        case mapa14: leyenda = legendN; break;
        case mapa15: leyenda = legendÑ; break;
        case mapa16: leyenda = legendO; break;
        case mapa17: leyenda = legend17; break;
        case mapa18: leyenda = legend18; break;
        case mapa24: leyenda = legend24; break;
    }
    if (leyenda) {
        myMap.removeControl(leyenda);
    }
});


