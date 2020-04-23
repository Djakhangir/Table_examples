import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Record } from './tables-example/record';
import { MatTableDataSource } from '@angular/material/table';
import { MatAccordion } from '@angular/material/expansion';
import { EXAMPLE_DATA , EXAMPLE_DATA3 , EXAMPLE_DATA2} from "./tables-example/fake";
import { MatTooltip } from '@angular/material/tooltip';

@Component({
  selector: 'app-table-schema',
  templateUrl: './table-schema.component.html',
  styleUrls: ['./table-schema.component.css']
})
export class TableSchemaComponent implements OnInit {
title: string = "Elements Definitions"
header: MatTableDataSource<Record>;
detail: MatTableDataSource<Record>;
trailer: MatTableDataSource<Record>;
sub: Subscription;
panelTwoExpanded: boolean;
tabValidations: boolean;
tabDefinitions: boolean;
tabSchema: boolean = true;

  constructor() {
    this.header = new MatTableDataSource;
    this.detail = new MatTableDataSource;
    this.trailer = new MatTableDataSource;
   }

  ngOnInit() {
    this.header.data = EXAMPLE_DATA;
    this.detail.data = EXAMPLE_DATA2;
    this.trailer.data = EXAMPLE_DATA3;
    // if(window.sessionStorage && window.sessionStorage.getItem('Data')) {
    //   let data = JSON.parse(window.sessionStorage.getItem('Data'));
    //   return data
    // }
  }

  makePanelTwoExpanded(){
    this.panelTwoExpanded = !this.panelTwoExpanded
  }

  // clickSchemaTab() {
  //   this.tabSchema = true;
  //   this.tabDefinitions = false;
  //   this.tabValidations = false;
  //   this.panelTwoExpanded = true;
  // }

  // clickValidationsTab() {
  //   this.tabSchema = false;
  //   this.tabDefinitions = false;
  //   this.tabValidations = true;
  //   this.panelTwoExpanded = true;
  // }

  // clickDefinitionsTab() {
  //   this.tabSchema = false;
  //   this.tabDefinitions = true;
  //   this.tabValidations = false;
  //   this.panelTwoExpanded = true;
  // }

}
