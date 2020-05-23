import { Component, OnInit } from '@angular/core';
import { Automovil } from 'src/models';
import { AUTOMOVILES} from 'src/data';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  autos: Automovil[];
  constructor() { }

  ngOnInit(): void {
    this.autos = AUTOMOVILES;
  }

}
