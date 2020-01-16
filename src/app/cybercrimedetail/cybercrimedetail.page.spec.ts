import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CybercrimedetailPage } from './cybercrimedetail.page';

describe('CybercrimedetailPage', () => {
  let component: CybercrimedetailPage;
  let fixture: ComponentFixture<CybercrimedetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CybercrimedetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CybercrimedetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
