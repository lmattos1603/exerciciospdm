import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EduardoPage } from './eduardo.page';

describe('EduardoPage', () => {
  let component: EduardoPage;
  let fixture: ComponentFixture<EduardoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EduardoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EduardoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
