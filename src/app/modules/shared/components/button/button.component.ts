import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent implements OnInit {

  @Input()
  public color: 'green' | 'white' | 'black' = 'black';

  @Input()
  public size: 'small' | 'medium' | 'large' = 'small';

  constructor() { }

  ngOnInit(): void {}

}
