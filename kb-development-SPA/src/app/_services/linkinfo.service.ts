import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class LinkinfoService {

  baseUrl = environment.apiUrl;

  constructor(private _http: HttpClient) { }

  getLinksInfo() {

    // TODO: Missin implementation.

  }

}
