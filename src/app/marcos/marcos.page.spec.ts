import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MarcosPage } from './marcos.page';

describe('MarcosPage', () => {
  let component: MarcosPage;
  let fixture: ComponentFixture<MarcosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarcosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MarcosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
