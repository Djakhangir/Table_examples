import { Subscription } from 'rxjs';
import { Component, OnInit, Input, AfterContentChecked, ContentChild } from '@angular/core';
import { Record } from "./record";

import { DataSource } from '@angular/cdk/collections';
import {MatTableDataSource } from '@angular/material/table';
import { CdkTableModule } from '@angular/cdk/table';
import { MatInput } from '@angular/material/input';
import { MatAccordion } from '@angular/material/expansion';
import { MatTooltip } from '@angular/material/tooltip';
import { dataset } from './constants';


  
@Component({
  selector: 'app-tables-example',
  templateUrl: './tables-example.component.html',
  styleUrls: ['./tables-example.component.css']
})
export class TablesExampleComponent implements OnInit, AfterContentChecked {

  @Input() dataSource : MatTableDataSource<Record>;
  @Input() caption: string;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumnsSchema: string[]= ['physicalName', 'type', 'typeAttributes', 'defaultValue', 'format', 'fieldSize', 'startPosition', 'actions'];
  displayedColumnsDefinitions: string[] = ['physicalName', 'logicalName', 'description', 'actions'];
  displayedColumnsValidations: string[] = ['physicalName', 'actions'];

  data = dataset
  newAttribute: Record = {
    id: null,
    physicalName: null,
    type: null,
    typeAttributes: null,
    defaultValue: null,
    format: null,
    logicalName: null,
    description: null,
    fieldSize: null,
    startPosition: null,
  };
  selectedRowIndex : number;
  selectedDataSource: Record[];
  showEditable:boolean = false;
  selectedFormat: string ='';
  startPosition =[];
  selectedStore:any;
  selectTechSchemaVal: string;
  tabSchema: boolean
  tabValidations: boolean;
  tabDefinitions: boolean;
  sub:Subscription;
  selectedValue:string;
  @ContentChild("MatInput") matInput:MatInput;
  fieldSizeValidationInteger: boolean = false;
  fieldSizeValidationLong: boolean = false;
  fieldSizeValidationFloat: boolean = false;
  fieldSizeValidationString: boolean = false;
  fieldSizeValidationDouble: boolean = false;
  fieldSizeValidationKeyword: boolean = false;

  constructor(){
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit() {}

  ngAfterContentChecked(){}

// make input row
handleRowClick(dataSource, rowIndex: number) {
    this.selectedRowIndex = rowIndex;
    this.selectedDataSource = dataSource;
    this.showEditable = true;
  }

// Keeps Input but cancels editable mode
  cancelChange(rowIndex:number){
    this.selectedRowIndex = null;
    this.showEditable = false;
      event.stopPropagation();
  }

// Add new row
  addNewRow() {
    const newId = Date.now(); 
    this.selectedRowIndex = newId;
    let obj = {
      ...this.newAttribute,
      id: newId,
      // I don't know what is this for because autoCalcPosition method do not return anything
      // startPosition: this.autoCalcPosition()
    };
    this.dataSource.data.push(obj);
    this.dataSource = new MatTableDataSource(this.dataSource.data);
    this.autoCalcPosition();
  }

// Initially calculate value of startPosition column depending on fieldSize column
  autoCalcPosition(){
    const allFields=this.dataSource.data;
    let fieldSizeFiltered=[];
    let startPositionCalc=[];
    for (let i = 0; i < allFields.length; i++) {
      fieldSizeFiltered.push(allFields[i].fieldSize)
      if(i==0){
        startPositionCalc[0] = 0;
        this.startPosition[0]=startPositionCalc[0];
      } else {
        startPositionCalc[i] = fieldSizeFiltered[i-1]+startPositionCalc[i-1];
        this.startPosition[i] = startPositionCalc[i];
      }
    }
  }

// Deletes the Row and data
 deleteRowData(dataSource, rowNumber) {
  dataSource.data.splice(rowNumber, 1);
  this.dataSource= new MatTableDataSource(dataSource.data);
 }

  // Save to Session Storage
  saveSession(dataSource) {
    window.sessionStorage.setItem('Data', JSON.stringify(dataSource.data))
  }
  
  // get from Session Storage
  startSession(dataSource) {
    window.sessionStorage.getItem(JSON.parse('Data'));
  }

  // Reset all
  resetAll(){
  this.fieldSizeValidationInteger = false;
  this.fieldSizeValidationLong = false;
  this.fieldSizeValidationFloat = false;
  this.fieldSizeValidationDouble = false;
  this.fieldSizeValidationString = false;
  this.fieldSizeValidationKeyword = false;
}

storeConfig = {
  data: []
}

updateTechSchemaConfigValue(value){
  this.selectTechSchemaVal = value;
  this.selectedStore = {
    'value': 'Select'
  };
  this.storeConfig.data = this.data.techSchemaFormatDataMap[value.type]
  if(value.type === 'booleanType') {
    value.typeAttributes = "-";
    value.format = "Select";
    value.fieldSize = "";
    value.defaultValue = "Select";
    value.placeholder = "";
  }
  if(value.type === 'floatType') {
    value.typeAttributes = " - ";
    value.format = " - ";
    value.fieldSize = "";
    value.defaultValue = "";
    this.resetAll();
    this.fieldSizeValidationFloat = true;
  }
  if(value.type === 'longType') {
    value.typeAttributes = " - ";
    value.format = " - ";
    value.fieldSize = "";
    value.defaultValue = "";
    this.resetAll();
    this.fieldSizeValidationLong = true;
  }
  if(value.type === 'integerType') {
    value.typeAttributes = " - ";
    value.format = " - ";
    value.fieldSize = "";
    value.defaultValue = "";
    this.resetAll();
    this.fieldSizeValidationInteger = true;
  }
  if(value.type === 'doubleType') {
    value.typeAttributes = " - ";
    value.format = " - ";
    value.fieldSize = "16";
    value.defaultValue = "";
    this.resetAll();
    this.fieldSizeValidationDouble = true;
  }
  if(value.type === 'keywordType') {
    value.typeAttributes = " - ";
    value.format = " - ";
    value.fieldSize = "";
    value.defaultValue = " - ";
    this.fieldSizeValidationKeyword= true;
  }
  if(value.type === 'stringType') {
    value.typeAttributes = " - ";
    value.format = " - ";
    value.fieldSize = "512";
    value.defaultValue = "";
    this.fieldSizeValidationString = true;
  }
  if(value.type === 'timestampType' || value.type === 'decimalType' || value.type === 'textType' || value.type === 'dateType' || value.type === 'enumType') {
    value.typeAttributes = "";
    value.format = "";
    value.fieldSize = "";
    value.defaultValue = "";
  }
}
}
