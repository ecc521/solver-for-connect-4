import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

@Component({
  selector: 'app-analyze',
  templateUrl: 'analyze.page.html',
  styleUrls: ['analyze.page.scss'],
  standalone: true,
  imports: [IonicModule, ExploreContainerComponent],
})
export class AnalyzePage {
  constructor() {}
}
