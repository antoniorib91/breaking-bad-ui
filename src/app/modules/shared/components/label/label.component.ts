import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LabelComponent implements OnInit {

  @Input()
  color: 'green' | 'white' | 'black' = 'black';

  constructor() {}

  ngOnInit(): void {}

}
