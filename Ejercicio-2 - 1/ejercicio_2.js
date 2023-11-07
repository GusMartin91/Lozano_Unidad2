/* EJERCICIO 1 */
function suma(a, b, callback) {
    let c = a + b;
    callback(c);
}
/* 
¿Qué es el tercer parámetro recibido?
El tercer parámetro recibido es callback. En JavaScript, una función puede ser pasada como argumento a otra función. En este caso, callback es una función que se espera que sea proporcionada cuando llames a la función suma. Esta función callback se utilizará para realizar alguna acción con el resultado de la suma (c) una vez que se haya calculado.

¿En qué casos es obligatorio desarrollar este tipo de funciones?
Este tipo de funciones con un parámetro de callback son útiles en situaciones en las que deseas realizar acciones adicionales después de que se haya completado una operación.

Algunos casos comunes donde son útiles incluyen:
Operaciones asincrónicas, como solicitudes AJAX, donde deseas manejar la respuesta una vez que llegue.
Animaciones y transiciones, donde deseas realizar acciones cuando una animación se complete.
Eventos de usuario, como hacer algo cuando se hace clic en un botón o se completa una operación de arrastre y suelta.

Realizar llamados a la función de ejemplo:
*/
suma(5, 3, function (resultado) {
    console.log("El resultado de la suma es: " + resultado);
});
suma(6, 23, function (resultado) {
    console.log("El resultado de la suma es: " + resultado);
});
suma(17, 52, function (resultado) {
    console.log("El resultado de la suma es: " + resultado);
});

/* EJERCICIO 2 */