

 function miFuncion() {

    var nombre = prompt("Hola!, ingresá tu nombre:");
    var apellido = prompt("Ahora ingresá tu apellido:");
    var num = prompt("Ingresá tu numero de telefono:");
    var email = prompt("Hola!, ingresá tu email:");
    var titulo = "<h1>Turnos</h1>";

    document.write(titulo);
    document.write("<h3>Hola ", nombre, " ", apellido, "!</h3>");
    document.write("<p>Tu telefono:</p>");
    document.write("<span>", num, "</span><br>");
    document.write("<p>Tu email:</p>");
    document.write("<span>", email, "</span><br>");


    alert("Gracias,nos comunicaremos pronto!");

}
/////////////////////////

var ejemplo_vModel = new Vue({
    el: '#ejemploVM',
    data: {
      titulo: "Postulate para enseñar a manejar",
      personas: [
        // Objetos dentro del array personas con el par clave-valor
        {nombre:"Hernan Sosa", cantidad: 10},
        {nombre:"Mariela Fernandez", cantidad: 0},
        {nombre:"Julian Olmos", cantidad: 3}
      ],
      nuevaPersona: ''
    },
    methods: {
      agregarPersonaConIF(){
        if (this.nuevaPersona != "") {
          this.personas.push({ nombre: this.nuevaPersona, cantidad: 0 });
          this.nuevaPersona= '';
        }
      }
    }
})