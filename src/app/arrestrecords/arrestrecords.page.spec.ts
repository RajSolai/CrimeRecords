import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ArrestrecordsPage } from './arrestrecords.page';

describe('ArrestrecordsPage', () => {
  let component: ArrestrecordsPage;
  let fixture: ComponentFixture<ArrestrecordsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArrestrecordsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ArrestrecordsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
