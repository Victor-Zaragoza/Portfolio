import { Component, OnInit } from '@angular/core';
import { Machine } from '../machine';
import { MachinesService } from '../services/machines.service';

@Component({
  selector: 'app-machines',
  templateUrl: './machines.component.html',
  styleUrls: ['./machines.component.css']
})
export class MachinesComponent implements OnInit {
  mymachines: Machine[]=[];
  
  constructor(public machineservice:MachinesService) { }

  ngOnInit(): void {
    this.mymachines= this.machineservice.getMachines();
    console.log(this.mymachines)
  }

}
