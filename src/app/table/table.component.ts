import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Automovil } from 'src/models';
import { AUTOMOVILES } from 'src/data';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  page = 1;
  pageSize = 12;
  collectionSize = AUTOMOVILES.length;

  constructor() { }

  ngOnInit(): void {
  }

  get autos(): Automovil[] {
    return AUTOMOVILES
      .map((auto, i) => ({id: i + 1, ...auto}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

}
