import { Component, OnInit, Input } from '@angular/core';
import { LinkInfo } from '../_models/LinkInfo';

@Component({
  selector: 'app-linkinfocard',
  templateUrl: './linkInfoCard.component.html',
  styleUrls: ['./linkInfoCard.component.css']
})
export class LinkInfoCardComponent implements OnInit {

  @Input() info: LinkInfo;

  constructor() { }

  ngOnInit() {
  }



}
