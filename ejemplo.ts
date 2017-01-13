/* Tipos de datos */
/*     Strings  o cadenas de caracteres    */
let usuario: string;
/*          Arreglos de strings     */
let usuarios: string[];
let imagenes: Array <string>; 
/*         Number para numeros      */
let puntaje: number;
/*         Arreglos de numeros      */
let puntajes: number[];
let precios: Array <number>;
/*       Vartiables tipo Objeto    */
let cliente: Object; 
/*    Arreglo de variables tipo objeto   */ 
let clientes: Object[];
let Objetos: Array <Object>;
/* usuario = 10; Devuelve un error : "Type 10 is not assignable to type string" */
 let mensaje: string;
 let delay_milisegundos: number;
 delay_milisegundos = 3000;
 mensaje = "mensaje es una variable de tipo string";
 setTimeout(function(){ confirm(mensaje); },delay_milisegundos);