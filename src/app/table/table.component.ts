import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';
import { Automovil } from 'src/models';
// import { AUTOMOVILES } from 'src/data';
import { AutosService } from '../services/autosService/autos.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
 autos : Automovil[];

  page = 1;
  pageSize = 10;
  collectionSize: number;

  constructor( private autoService: AutosService ) { }

  ngOnInit(): void {
    this.autoService.getAutos().subscribe((response) => {
      this.autos = response.data;
      this.collectionSize = response.data.length;
    })
  }

}
