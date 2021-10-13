import { Component } from '@angular/core';
import { AeroEco, AeroAdvanced, AeroLux, RzdEco, RzdAdvanced, RzdLux} from './models/rates'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AgentApp';

  distance = '';
  age = '';
  weight = '';
  aeroEcoCost = 0;
  aeroAdvCost = 0;
  aeroLuxCost = 0;
  rzdEcoCost = 0;
  rzdAdvCost = 0;
  rzdLuxCost = 0;


  onInputDistance(event: any){
    this.distance = event.target.value;
  }

  onInputAge(event: any){
    this.age = event.target.value;
  }

  onInputWeight(event: any){
    this.weight = event.target.value;
    console.log(this.weight)
  }

  onClick(){
    // if(this.distance == '' || this.age == '' || this.weight == ''){
      
    // } else {
      console.log('hello')
      let aeroEco = new AeroEco();
      let aeroAdv = new AeroAdvanced();
      let aeroLux = new AeroLux();
      let rzdEco = new RzdEco();
      let rzdAdv = new RzdAdvanced();
      let rzdLux = new RzdLux();
      this.aeroEcoCost = aeroEco.countPrice(Number(this.distance), Number(this.weight));
      this.aeroAdvCost = aeroAdv.countPrice(Number(this.distance), Number(this.weight), Number(this.age))
      this.aeroLuxCost = aeroLux.countPrice(Number(this.distance), Number(this.weight), Number(this.age))
      this.rzdEcoCost = rzdEco.countPrice(Number(this.distance), Number(this.weight), Number(this.age))
      this.rzdAdvCost = rzdAdv.countPrice(Number(this.distance), Number(this.weight), Number(this.age))
      this.rzdLuxCost = rzdLux.countPrice(Number(this.distance), Number(this.weight), Number(this.age))
    // }
  }
}
