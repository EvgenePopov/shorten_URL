import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LinksService } from '../../services/links.service';
import { LinkModel } from '../../models/link.model';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass']
})
export class FormComponent {
  @ViewChild('form') form!: NgForm;
  shortenedUrl!: string;
  apiUrl = environment.apiUrl;

  constructor(private linksService: LinksService) { }

  onSend() {
    const link: LinkModel = this.form.value;
    this.linksService.postUrl(link).subscribe( (linkData:any) => {
      this.shortenedUrl = linkData.shortenedUrl;
    })
  }
}
