const fetchData = require("../util/fetchData");
const API = "https://rickandmortyapi.com/api/character/";

const anotherFunction = async url_api => {
  try {
    const data = await fetchData(url_api);
    const caharacter = await fetchData(`${url_api}${data.results[0].id}`);
    const origin = await fetchData(`${caharacter.origin.url}`);

    console.log(data.info.count);
    console.log(caharacter.name);
    console.log(origin.dimension);
  } catch (error) {
    console.error(error);
  }
};

console.log("Bobore");
anotherFunction(API);
console.log("after");
