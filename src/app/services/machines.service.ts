import { Injectable } from '@angular/core';
import { Machines } from '../mymachines';
import { Machine } from '../machine';

@Injectable({
  providedIn: 'root'
})
export class MachinesService {

  private machines: Machine[]= Machines;
  
  constructor() { }
  
  getMachines(): Machine[]{
    return this.machines;
  }

  getMachine(posicion:number): Machine{
    return this.machines[posicion];
  }
}



