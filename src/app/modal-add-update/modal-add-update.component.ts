import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Automovil } from 'src/models';

@Component({
  selector: 'app-modal-add-update',
  templateUrl: './modal-add-update.component.html',
  styleUrls: ['./modal-add-update.component.css']
})
export class ModalAddUpdateComponent implements OnInit {
  auto: Automovil = {
    _id: null,
    marca: "",
    submarca: "",
    modelos: [],
    descripcion: ""
  };
  
  accion: string;


  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

}
