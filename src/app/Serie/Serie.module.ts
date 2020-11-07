import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SerieListComponent } from './Serie-List/Serie-List.component';
import { SerieDetailComponent } from './Serie-Detail/Serie-Detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SerieListComponent, SerieDetailComponent],
  exports: [SerieListComponent]
})
export class SerieModule { }
