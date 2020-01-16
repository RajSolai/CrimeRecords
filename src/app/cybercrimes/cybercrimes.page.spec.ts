import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CybercrimesPage } from './cybercrimes.page';

describe('CybercrimesPage', () => {
  let component: CybercrimesPage;
  let fixture: ComponentFixture<CybercrimesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CybercrimesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CybercrimesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
