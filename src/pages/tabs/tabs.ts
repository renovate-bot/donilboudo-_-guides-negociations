import { Component } from '@angular/core';

import { GuidesPage } from '../guides/guides';
import { ProgramPage } from '../program/program';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = GuidesPage;
  tab3Root = ProgramPage;

  constructor() {

  }
}
