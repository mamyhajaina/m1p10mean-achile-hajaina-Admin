import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-skeleton-statistique',
  templateUrl: './skeleton-statistique.component.html',
  styleUrls: ['./skeleton-statistique.component.css']
})
export class SkeletonStatistiqueComponent implements OnInit {

  @Input() header: string = '';
  constructor() { }

  ngOnInit() {
  }

}
