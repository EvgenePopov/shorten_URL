import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LinkModel } from '../models/link.model';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class LinksService {

  constructor(private http: HttpClient) { }

  postUrl(userUrl: LinkModel) {
    return this.http.post(environment.apiUrl, userUrl);
  }

}
