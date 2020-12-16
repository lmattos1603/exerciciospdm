import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AnthonyPage } from './anthony.page';

describe('AnthonyPage', () => {
  let component: AnthonyPage;
  let fixture: ComponentFixture<AnthonyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnthonyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AnthonyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
