import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RobsonPage } from './robson.page';

describe('RobsonPage', () => {
  let component: RobsonPage;
  let fixture: ComponentFixture<RobsonPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RobsonPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RobsonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
