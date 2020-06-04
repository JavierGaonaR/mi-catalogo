import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAddUpdateComponent } from './modal-add-update.component';

describe('ModalAddUpdateComponent', () => {
  let component: ModalAddUpdateComponent;
  let fixture: ComponentFixture<ModalAddUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalAddUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAddUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
