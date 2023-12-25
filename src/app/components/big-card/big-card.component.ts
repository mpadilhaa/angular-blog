import { Component, OnInit, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { dataFake } from '../../../data/dataFake';

@Component({
  selector: 'app-big-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.css',
})
export class BigCardComponent implements OnInit {
  @Input()
  photoCover: string = '';
  @Input()
  cardTitle: string = '';
  @Input()
  cardDescription: string = '';
  @Input()
  id: string = '';
  constructor() {}

  ngOnInit(): void {
    this.photoCover = dataFake[0].photo;
    this.cardTitle = dataFake[0].title;
    this.cardDescription = dataFake[0].description;
    this.id = dataFake[0].id;
  }
}
