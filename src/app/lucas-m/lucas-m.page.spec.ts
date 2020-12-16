import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LucasMPage } from './lucas-m.page';

describe('LucasMPage', () => {
  let component: LucasMPage;
  let fixture: ComponentFixture<LucasMPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LucasMPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LucasMPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
