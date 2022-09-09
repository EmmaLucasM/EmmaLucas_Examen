

class Persona {
    nombre;
    apellido;
    edad;

    get Detalles(){
        return this.nombre;
    }

constructor (nombre, apellido, edad) {
    this.nombre=nombre;
    this.apellido=apellido;
    this.edad=edad;

    console.log("Hola ,soy:" + this.apellido);
}

  class Jugador extends Persona{

    
  }
}