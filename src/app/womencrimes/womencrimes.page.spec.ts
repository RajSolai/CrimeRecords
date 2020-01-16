import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WomencrimesPage } from './womencrimes.page';

describe('WomencrimesPage', () => {
  let component: WomencrimesPage;
  let fixture: ComponentFixture<WomencrimesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WomencrimesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WomencrimesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
