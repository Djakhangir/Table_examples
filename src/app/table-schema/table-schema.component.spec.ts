import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableSchemaComponent } from './table-schema.component';

describe('TableSchemaComponent', () => {
  let component: TableSchemaComponent;
  let fixture: ComponentFixture<TableSchemaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableSchemaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableSchemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
