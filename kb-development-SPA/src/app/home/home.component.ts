import { Component, OnInit } from '@angular/core';
import { LinkinfoService } from '../_services/linkinfo.service';
import { LinkInfo } from '../_models/LinkInfo';
import { LinkInfoCardComponent } from '../linkInfoCard/linkInfoCard.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // TODO: This must be strong typed
  linkInfo: any[];

  constructor(private _linksInfoService: LinkinfoService) { }

  ngOnInit() {
    this.loadInfoService();
  }

  loadInfoService() {

    // TODO: This must consume the service.
    this.linkInfo = new Array<LinkInfo>();

    this.linkInfo.push({
      'id': 1,
      'logoUrl': 'https://picsum.photos/100/100?image=0',
      'title': 'Title 1',
      // tslint:disable-next-line:max-line-length
      'description': '1 - Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      'siteUrl': 'http://www.google.com',
      'lastUpdate': '12/11/2018',
      'tags': ['Tag 1,1', 'Tag 1,2', 'Tag 1,3']
    });

    this.linkInfo.push({
      'id': 2,
      'logoUrl': 'https://picsum.photos/100/100?image=20',
      'title': 'Title 2',
      // tslint:disable-next-line:max-line-length
      'description': '2 - Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      'siteUrl': 'http://www.twitter.com',
      'lastUpdate': '12/12/2018',
      'tags': ['Tag 2,1', 'Tag 2,2', 'Tag 2,3']
    });

    this.linkInfo.push({
      'id': 3,
      'logoUrl': 'https://picsum.photos/100/100?image=30',
      'title': 'Title 3',
      // tslint:disable-next-line:max-line-length
      'description': '3 - Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      'siteUrl': 'http://www.facebook.com',
      'lastUpdate': '12/13/2018',
      'tags': ['Tag 3,1', 'Tag 3,2', 'Tag 3,3']
    });


  }

}
