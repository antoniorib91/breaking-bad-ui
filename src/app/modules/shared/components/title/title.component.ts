import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TitleComponent implements OnInit {

  @Input()
  public size: 'small' | 'medium' | 'large' = 'medium';

  @Input()
  public fontStyle: 'normal' | 'bold' = 'normal';

  @Input()
  public color: 'green' | 'white' | 'black' = 'black';

  @Input()
  public align: 'center' | 'left' | 'right' = 'center';

  constructor() { }

  ngOnInit(): void {
  }

}
