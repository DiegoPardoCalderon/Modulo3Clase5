//Definicion de funcion constructora
function Persona(rut, nombre, apellido, region=null) {
    //definicion de atributos
    this.rut = rut;
    this.nombre = nombre;
    this.apellido = apellido;

    //definicion de metodos
    this.saludar = function(){
        let saludo = `Hola ${this.nombre} ${this.apellido}`
        if(region){
            saludo += ` su region es ${region}`
        } else {
            saludo = "Ud. no tiene region asignada"
        }
       // console.log(saludo)
    }
}

//definicion primer objeto
var persona1 = new Persona('1234567-8', 'Osman', 'Perez', 'Santiago');
persona1.saludar()

//definicion segundo objeto
var persona2 = new Persona('201238945-9', 'Luis', 'Lopez');
persona2.saludar()

//console.log("Persona1", persona1);
//console.log("Persona2", persona2);

var persona3 = {
    rut: '21376456-0',
    nombre: 'Maria',
    apellido: 'Morales'
}

//console.log("persona3: ", persona3)



//***********Segundo Ejemplo***************************/
function Rectangulo(nombre, base, altura) {
    this.nombre = nombre;
    this.base = base;
    this.altura = altura;
    this.calcularArea = function() {
        return this.base * this.altura
    }
}

//************Fin Segundo Ejemplo*********************/

//eljemplo para comprobar la estructura de la clase rectangulo

//const rectangulo1 = new Rectangulo("Pruebas", 10, 4)
//console.log(rectangulo1)

let rectangulos = []
//definicion de ciclo para solicitar los datos de 3 rectangulos
for (let index = 1; index <= 2; index++) {
    alert(`Por favor ingresar el rectangulo ${index}`)
    var nombre = prompt(`Ingrese el nombre del rectangulo ${index}`)
    var base = prompt(`Ingrese la base del rectangulo ${index}`)
    var altura = prompt(`Ingrese la altura del rectangulo ${index}`)

    var objetoRectangulo = new Rectangulo(nombre, base, altura)
    rectangulos.push(objetoRectangulo)
    
}
//console.log(rectangulos)

rectangulos.forEach(function(rectangulo){
    console.log(rectangulo.nombre, "Área: ", rectangulo.calcularArea());
   
})  