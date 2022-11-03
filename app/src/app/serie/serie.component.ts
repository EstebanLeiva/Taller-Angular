import { Component, OnInit } from '@angular/core';
import { Serie } from './Serie';
import { SerieService } from './serie.service';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css']
})
export class SerieComponent implements OnInit {
  series: Array<Serie> = [];
  averageSeasons: number = 0;
  constructor(private serieService: SerieService) { }

  getSeries() {
    this.serieService.getSeries().subscribe(series => {
      this.series = series;
      let sum: number = 0;
      this.series.forEach(s => {sum += s.seasons});
      this.averageSeasons = sum/this.series.length;
    });
  }
  

  ngOnInit() {
    this.getSeries();
  }

}
