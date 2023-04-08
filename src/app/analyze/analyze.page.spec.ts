import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

import { AnalyzePage } from './analyze.page';

describe('AnalyzePage', () => {
  let component: AnalyzePage;
  let fixture: ComponentFixture<AnalyzePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnalyzePage, IonicModule, ExploreContainerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AnalyzePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
