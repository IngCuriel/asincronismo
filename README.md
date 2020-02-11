# Asincronismo

Asincronismo con JavaScript

¿Que es el asincronismo en javaScript?

Lenguaje de programacaion asincrono no bloquente con un manejador de evento que maneja un solo hilo

¿Que es asincronismo? Es la accion que no ocurre al mismo tiempo.

## Callback

¿ Que es un callback?
Es una funcion que al crearlo le pasamos una segunda función.

Install dependence node para consumir api con callbarck

`npm install xmlhttprequest --save`

## Promesas

Es algo que va a suceder no se cuando pero va a suceder.

## Async y Await

Es implementado en ES7, nuevo enfoque, garantiza, es preferible sobre las promesas ya que hace que nuestro coadigo se comporte como sincrono

## Callback vs Promesa vs Async/await

Callbacks --> Ventajas: Simple(una función que recibe otra función). Son universales, corren en cualquier navegador.
Desventajas: Composición tediosa, anidando cada vez más elementos. Caer en Callback Hell.

Promesas --> Ventajas: Facilmente enlazables .Then( return… ).Then - Fácil e intuitivo de leer.
Desventajas: Posible error si no se retorna el siguiente llamado. No corre en todos los navegadores.

Async-Await --> Ventajas: Se puede usar try-catch . Código más ordenado e intuitivo.
Desventajas: No corre en todos los navegadores (se requiere un transpilador)
