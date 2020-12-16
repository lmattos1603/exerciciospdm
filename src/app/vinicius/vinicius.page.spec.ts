import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViniciusPage } from './vinicius.page';

describe('ViniciusPage', () => {
  let component: ViniciusPage;
  let fixture: ComponentFixture<ViniciusPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViniciusPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViniciusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
