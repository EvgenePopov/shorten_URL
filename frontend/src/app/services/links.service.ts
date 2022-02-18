import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LinkModel } from '../models/link.model';


@Injectable({
  providedIn: 'root'
})
export class LinksService {

  constructor(private http: HttpClient) { }

  postUrl(userUrl: LinkModel) {
    return this.http.post('http://localhost:8000/links', userUrl);
  }

}
