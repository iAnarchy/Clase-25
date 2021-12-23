//Clase (molde) para objeto del cerdo 
class Pig extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image=loadImage("sprites/enemy.png")
  }
}