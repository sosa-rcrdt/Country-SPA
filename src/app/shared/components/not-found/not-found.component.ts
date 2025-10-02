import { Component, inject } from '@angular/core';
import { Location } from '@angular/common'

@Component({
  selector: 'app-not-found',
  imports: [],
  templateUrl: './not-found.component.html',
  styles: ``
})
export class NotFoundComponent {

  location = inject(Location);

  goBack(){
    this.location.back();
  }

}
