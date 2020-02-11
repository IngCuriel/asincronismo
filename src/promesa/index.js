// creamos una funcion (Arrow function con ES&)
const somethingWillHappen = () => {
  // Se crea una nueva promesa siguiente la estructura (resive dos argumentos)
  return new Promise((resolve, reject) => {
    if (true) {
      resolve("hey!");
    } else {
      reject("whoooops!");
    }
  });
};

const somethingWillHappen2 = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      // se setTimeout resive dos argumentos
      //1--resive una funcion
      //2-- en tiempo en que se va ejecutar en milisegundos
      setTimeout(() => {
        resolve("True");
      }, 2000);
    } else {
      const error = new Error("whooops!");
      reject(error);
    }
  });
};

somethingWillHappen()
  .then(response => console.log(response))
  .catch(error => console.log(error));

somethingWillHappen2()
  .then(response => console.log(response))
  .catch(error => console.error(error));

//Como Correr varias promesas(Promesas encadenadas) y retornar un arreglo con los resultado

Promise.all([somethingWillHappen(), somethingWillHappen2()])
  .then(response => {
    console.log("Array of result", response);
  })
  .catch(error => console.error(error));
