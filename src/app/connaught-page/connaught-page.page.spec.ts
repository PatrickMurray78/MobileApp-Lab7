import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConnaughtPagePage } from './connaught-page.page';

describe('ConnaughtPagePage', () => {
  let component: ConnaughtPagePage;
  let fixture: ComponentFixture<ConnaughtPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConnaughtPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConnaughtPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
