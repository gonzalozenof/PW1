
var mensaje1 = "Hola";
var mensaje2 = " Mundo";
var mensaje = mensaje1 + mensaje2; 

document.write(mensaje);


function checkAge(age) {
    if (age > 18) {
      return true;
    } else {
      return confirm('¿Estas autorizado?');
    }
  }
  
  let age = prompt('¿Qué edad tienes?', 18);
  
  if ( checkAge(age) ) {
    alert( 'Acceso permitido' );
  } else {
    alert( 'Acceso denegado' );
  }
