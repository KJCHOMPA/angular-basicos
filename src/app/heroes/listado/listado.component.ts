import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent{

  heroes:string[] = ['Spiderman','Ironman','Hulk','Thor'];
  heroesBorrador:string[]=[];

  borrarHeroe(){
    //const borrado = this.heroes.pop() || '';
    const borrado = this.heroes.pop();
    if(borrado!=null){
      this.heroesBorrador.push(borrado);
    }
    
  }

}
