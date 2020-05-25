import { Component, OnInit } from '@angular/core';
import { Automovil } from 'src/models';
import { AUTOMOVILES } from 'src/data';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  autos: Automovil[];

  autoModal: Automovil;

  closeResult = '';

  constructor( private modalService: NgbModal ) { }

  ngOnInit(): void {
    this.autos = AUTOMOVILES;
  }

  open(content, auto: Automovil) {
    this.autoModal = auto;
    this.modalService.open(content, { centered: true });
  }

}
