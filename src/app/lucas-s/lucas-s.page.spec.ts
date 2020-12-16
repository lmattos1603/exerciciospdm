import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LucasSPage } from './lucas-s.page';

describe('LucasSPage', () => {
  let component: LucasSPage;
  let fixture: ComponentFixture<LucasSPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LucasSPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LucasSPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
