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

somethingWillHappen()
  .then(response => console.log(response))
  .catch(error => console.log(error));
