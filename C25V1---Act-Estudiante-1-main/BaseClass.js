//Clase padre 
class BaseClass{
    constructor(x, y, width, height,angle) { //Constructor con argumentos 
        var options = {//Opciones del motor físico para el objeto
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        //Cargar imagen 
        this.image = loadImage("sprites/base.png");
        World.add(world, this.body);
      }
      display(){//Función para mostrar objeto
        var angle = this.body.angle;
        push(); //Push captura la nueva posición 
            translate(this.body.position.x,this.body.position.y);//Cambia la posición en el eje Y y X
            rotate(angle);//Cambia la rotación del cuerpo
            imageMode(CENTER);//Centrar imagen al objeto
            image(this.image,0,0,this.width,this.height);//Propiedades de la imagen 
        pop();//Vuelve a la posición anterior 
      }
}

