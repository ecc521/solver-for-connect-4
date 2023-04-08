import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

@Component({
  selector: 'app-store',
  templateUrl: 'store.page.html',
  styleUrls: ['store.page.scss'],
  standalone: true,
  imports: [IonicModule, ExploreContainerComponent]
})
export class StorePage {

  constructor() {}

}
