import { TablesExampleComponent } from './tables-example/tables-example.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import{ MatButtonMOdule, MatFormFieldModule, MatIconModule, MatInputModule,
  // MatListModule, MatSelectModule, MatSideNavModule, MatCardModule, MatMenuModule, MatPaginatorModule, MatSortModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    TablesExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // MatButtonMOdule,
    // MatFormFieldModule, 
    // MatIconModule, 
    // MatInputModule,
    // MatListModule, 
    // MatSelectModule, 
    // MatSideNavModule, 
    // MatCardModule, 
    MatTableModule
    // MatMenuModule, 
    // MatPaginatorModule, 
    // MatSortModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
