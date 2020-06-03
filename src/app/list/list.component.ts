import { Component, OnInit } from '@angular/core';
import { Automovil } from 'src/models';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { AutosService } from '../services/autosService/autos.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  autos: Automovil[];

  autoModal: Automovil;

  closeResult = '';

  constructor( private modalService: NgbModal, private autoService: AutosService ) { }

  ngOnInit(): void {
    this.autoService.getAutos().subscribe((response) => {
      this.autos = response.data;
    })
  }

  open(content, auto: Automovil) {
    this.autoModal = auto;
    this.modalService.open(content, { centered: true });
  }

}
