import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SamuelPage } from './samuel.page';

describe('SamuelPage', () => {
  let component: SamuelPage;
  let fixture: ComponentFixture<SamuelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SamuelPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SamuelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
