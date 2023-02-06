import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MachinesService } from '../services/machines.service';
import { Machine } from '../machine';

@Component({
  selector: 'app-one-machine',
  templateUrl: './one-machine.component.html',
  styleUrls: ['./one-machine.component.css']
})
export class OneMachineComponent implements OnInit {

  @Input() machine!: Machine;
  
  constructor(public machineservice:MachinesService, public activedroute:ActivatedRoute) {
    this.activedroute.params.subscribe(params =>{
      this.machine = machineservice.getMachine(params['id']);
    });
   }

  ngOnInit(): void {
  }

}
