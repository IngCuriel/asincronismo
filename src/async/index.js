const dosomethingAsync = () => {
  return new Promise((resolve, reject) => {
    true
      ? setImmediate(() => resolve("Do Something Async"), 5000)
      : reject(new Error("Test error"));
  });
};

const doSomething = async () => {
  //Await esperar a que esta promesa suceda , ahora , en un futuro o nunca
  const something = await dosomethingAsync();
  console.log(something);
};

console.log("Before");
doSomething();
console.log("Afeter");

const anotherfunction = async () => {
  try {
    const something = await dosomethingAsync();
    console.log(something);
  } catch {
    console.error(error);
  }
};

console.log("Before 1");
anotherfunction();
console.log("Afeter 1");
