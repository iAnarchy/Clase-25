class Bird extends BaseClass{ //"extends" nos ayuda a crear una clase SECUNDARIA - HIJA 
    constructor(x,y){
      //"super ayuda a transferir las propiedades de la clase padre a la clase hija"
      super(x,y,50,50);//Se colocan los argumentos para el contructor - padre
      //Se carga la nueva imagen que se asignara a la clase hija
      this.image = loadImage("sprites/bird.png");
    }
    //Se modifica la función mostrar para modificar las propiedades y funciones 
    display(){
      //Posición controlada por mouse
      this.body.position.x = mouseX;
      this.body.position.y = mouseY;
      super.display();//Super transfiere las demas propiedades de la clase padre a la clase hija
    }
};
