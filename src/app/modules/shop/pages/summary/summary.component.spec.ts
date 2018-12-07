import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryComponent } from './summary.component';
import { MatToolbarModule, MatListModule, MatCardModule } from '@angular/material';
import { ShopStoreMock } from '../../test/shop-store.mock';
import { ShopStore } from '../../store';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('SummaryComponent', () => {
  let component: SummaryComponent;
  let fixture: ComponentFixture<SummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SummaryComponent ],
      imports: [
        MatCardModule,
        MatListModule,
        MatToolbarModule,
        RouterTestingModule,
        BrowserAnimationsModule,
      ],
      providers: [
        { provide: ShopStore, useClass: ShopStoreMock }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
