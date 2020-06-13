import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Automovil } from 'src/models';

@Component({
  selector: 'app-modal-add-update',
  templateUrl: './modal-add-update.component.html',
  styleUrls: ['./modal-add-update.component.css']
})
export class ModalAddUpdateComponent implements OnInit {
  auto: Automovil = {} as Automovil;
  
  accion: string;

  modeloIni = 2000;
  modeloFin = this.modeloIni;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    if(this.accion == "Editar") {
      this.modeloIni = this.auto.modelos[0];
      this.modeloFin = this.auto.modelos[this.auto.modelos.length - 1];
    }

  }

  onSubmit() {
    this.auto.modelos = [];
    // this.auto.modelos.push(2000);

    for(let i: number = this.modeloIni; i <= this.modeloFin; i++) {
      this.auto.modelos.push(i);
    }

    this.activeModal.close(this.auto);
  }

  setAnio() {
    this.modeloFin = this.modeloIni;
  }

}
