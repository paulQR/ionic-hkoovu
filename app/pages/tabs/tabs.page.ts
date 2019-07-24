import { Component } from '@angular/core';

import { Tab2Page } from '../tab2/tab2.page';
import { Tab1Page } from '../tab1/tab1.page';

@Component({
  templateUrl: 'tabs.page.html'
})
export class TabsPage {

  tab1Root = Tab1Page;
  tab2Root = Tab2Page;

  constructor() {

  }
}
