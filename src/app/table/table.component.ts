import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Automovil } from 'src/models';
import { AutosService } from '../services/autosService/autos.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalAddUpdateComponent } from '../modal-add-update/modal-add-update.component';
import { ModalConfirmComponent } from '../modal-confirm/modal-confirm.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  autos: Automovil[];

  displayData: boolean;

  page = 1;
  pageSize = 10;
  collectionSize: number;

  constructor(private autoService: AutosService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.displayData = true;
    this.page =+ sessionStorage.getItem("currentPage");

    this.autoService.getAutos().subscribe((response) => {
      setTimeout(() => {
        this.displayData = false;
        this.autos = response.data;
        this.collectionSize = response.data.length;
      }, 1000)
    })
  }

  openEdit(auto: Automovil) {
    const modalRef = this.modalService.open(ModalAddUpdateComponent, { centered: true });
    modalRef.componentInstance.auto = auto;
    modalRef.componentInstance.accion = 'Editar';

    modalRef.result.then((auto) => {
      this.autoService.putAutos(auto).subscribe((response) => {
        sessionStorage.setItem("currentPage", this.page.toString());
        this.ngOnInit();
        console.log(response);
      })
    },
      (reason) => {
        console.log(reason);
      })
  }

  openAdd() {
    const modalRef = this.modalService.open(ModalAddUpdateComponent, { centered: true });
    modalRef.componentInstance.accion = 'Añadir';

    modalRef.result.then((auto) => {
      this.autoService.postAutos(auto).subscribe((response) => {
        sessionStorage.setItem("currentPage", this.page.toString());
        this.ngOnInit();
        console.log(response);
      })
    },
      (reason) => {
        console.log(reason);
      })
  }

  openDelete(auto: Automovil) {
    const modalRef = this.modalService.open(ModalConfirmComponent, { centered: true });
    modalRef.componentInstance.auto = auto;

    modalRef.result.then((auto) => {
      this.autoService.deleteAutos(auto).subscribe((response) => {
        sessionStorage.setItem("currentPage", this.page.toString());
        this.ngOnInit();
        console.log(response);
      })
    }, (reason) => {
      console.log(reason);
    })
  }


}
