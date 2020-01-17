import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ArrestrecordDetailsPage } from './arrestrecord-details.page';

describe('ArrestrecordDetailsPage', () => {
  let component: ArrestrecordDetailsPage;
  let fixture: ComponentFixture<ArrestrecordDetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArrestrecordDetailsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ArrestrecordDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
