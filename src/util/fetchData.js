// Consumiendo api con httprequest con callback
let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

const fetchData = api_url => {
  return new Promise((resolve, reject) => {
    const xHttp = new XMLHttpRequest();
    // El tercer valor es activar el asincronismo dentro de httpRequest
    xHttp.open("GET", api_url, true);
    // Escuchar la peticion (validacion que se este ejecutando)
    xHttp.onreadystatechange = () => {
      if (xHttp.readyState === 4) {
        xHttp.status === 200
          ? resolve(JSON.parse(xHttp.responseText))
          : reject(new Error("Error", api_url));
      }
    };
    xHttp.send();
  });
};

module.exports = fetchData;
