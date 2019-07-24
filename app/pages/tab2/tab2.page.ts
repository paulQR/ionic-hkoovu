import { Component } from '@angular/core';
import { DeseosService } from '../../services/deseos.service';

@Component({
  selector: 'page-tab2',
  templateUrl: 'tab2.page.html'
})
export class Tab2Page {

  constructor(public deseosService: DeseosService) {
  }

}
