import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-character-detail-data-empty',
  templateUrl: './character-detail-data-empty.component.html',
  styleUrls: ['./character-detail-data-empty.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharacterDetailDataEmptyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
