// Consumiendo api con httprequest con callback
let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const API = "https://rickandmortyapi.com/api/character/";

//Crear funcion para traer datos de nuestra api, la cual de bamos a pasar un callball

function fetchData(api_url, callback) {
  let xHttp = new XMLHttpRequest();
  // El tercer valor es activar el asincronismo dentro de httpRequest
  xHttp.open("GET", api_url, true);
  // Escuchar la peticion (validacion que se este ejecutando)
  xHttp.onreadystatechange = function(event) {
    if (xHttp.readyState === 4) {
      if (xHttp.status === 200) {
        // Regresar mi callback
        // El primer valor del callback es parsar un error y el segundo es pasar el response
        callback(null, JSON.parse(xHttp.responseText));
      } else {
        const error = new Error("Error" + api_url);
        return callback(error, null);
      }
    }
  };
  xHttp.send();
}

// Hacer llamados a nuestra api con callback

fetchData(API, function(erro1, data1) {
  if (erro1) return console.error(erro1);
  fetchData(API + data1.results[0].id, function(error2, data2) {
    if (error2) return console.error(error2);
    fetchData(data2.origin.url, function(error3, data3) {
      if (error3) return console.error(error3);
      console.log(data1.info.count);
      console.log(data2.name);
      console.log(data3.dimension);
    });
  });
});
