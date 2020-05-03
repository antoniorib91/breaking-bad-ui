import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  animations: [
    trigger('cardAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('5s', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('5s', style({ opacity: 0 }))
      ])
    ]),
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent implements OnInit {

  @Input()
  public size: 'auto' | 'small' | 'medium' | 'large' = 'auto';

  constructor() { }

  ngOnInit(): void {
  }

}

