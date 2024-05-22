import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule, // Import RouterModule if you need it for routing in DashboardComponent
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [DashboardComponent] // Export DashboardComponent if needed by other modules
})
export class DashboardModule { }
