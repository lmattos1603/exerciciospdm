import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MoacirPage } from './moacir.page';

describe('MoacirPage', () => {
  let component: MoacirPage;
  let fixture: ComponentFixture<MoacirPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoacirPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MoacirPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
