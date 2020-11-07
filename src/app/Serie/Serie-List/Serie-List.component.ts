import { Component, OnInit } from '@angular/core';
import { SerieService } from '../Serie.service';
import { Serie } from '../Serie';

@Component({
  selector: 'app-Serie-List',
  templateUrl: './Serie-List.component.html',
  styleUrls: ['./Serie-List.component.css']
})
export class SerieListComponent implements OnInit {
  // Atributos
  series: Array<Serie>;
  selectedSerie: Serie;
  selected = false;
  // Metodo Constructor
  constructor(private serieService: SerieService) { }
  // Metodos
  getSeries(): void {
    this.serieService.getSeries()
      .subscribe(series => this.series = series);
  }
  getPromedio(): number  {
    let suma: number = 0;
    let promedio: number = 0;
    for (let i = 0; i < this.series.length; i++) {
      const element = this.series[i];
      suma += element.seasons;
    }
    promedio = suma / this.series.length;
    return promedio;
  }
  onSelected(s: Serie): void {
    console.log(`se seleccionó la serie  ${s.id}`);
    this.selected = true;
    this.selectedSerie = s;
  }
  ngOnInit() {
    this.getSeries();
  }
}
