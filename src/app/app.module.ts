import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import{ MatExpansionModule } from '@angular/material/expansion';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatTableModule } from '@angular/material/table';
import { FormsModule }   from '@angular/forms';
import { TableSchemaComponent } from './table-schema/table-schema.component';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { TablesExampleComponent } from './table-schema/tables-example/tables-example.component';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';


@NgModule({
  declarations: [
    AppComponent,
    TablesExampleComponent,
    TableSchemaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    FormsModule,MatInputModule,
    MatTooltipModule,
    // MatButtonModule,
    // MatFormFieldModule, 
    // MatIconModule, 
    // MatInputModule,
    // MatListModule, 
    // MatSelectModule, 
    // MatSideNavModule, 
    // MatCardModule, 
    MatTableModule,
    // MatMenuModule, 
    // MatPaginatorModule, 
    // MatSortModule

  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
