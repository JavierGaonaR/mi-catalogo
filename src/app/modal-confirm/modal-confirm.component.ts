import { Component, OnInit } from '@angular/core';
import { Automovil } from 'src/models';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-confirm',
  templateUrl: './modal-confirm.component.html',
  styleUrls: ['./modal-confirm.component.css']
})
export class ModalConfirmComponent implements OnInit {
  auto: Automovil = {} as Automovil;


  constructor( public modal :NgbActiveModal) {}

  ngOnInit(): void {
  }

}
