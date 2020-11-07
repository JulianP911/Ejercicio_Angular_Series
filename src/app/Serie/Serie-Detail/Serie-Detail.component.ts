
import { Component, OnInit,  Input } from '@angular/core';
import { Serie } from '../Serie';
import { SerieService } from '../Serie.service';

@Component({
  selector: 'app-Serie-Detail',
  templateUrl: './Serie-Detail.component.html',
  styleUrls: ['./Serie-Detail.component.css']
})
export class SerieDetailComponent implements OnInit {
  // Atributos
  @Input() serie: Serie;
  isCollapsed = true;
  serieId: number;
  // Metodo Constructor
  constructor(private serieService: SerieService) { }
  // Metodos
  getSerieId(): void {
    console.log(Serie);
  }
  ngOnInit() {
    console.log(this.getSerieId());
  }
}
