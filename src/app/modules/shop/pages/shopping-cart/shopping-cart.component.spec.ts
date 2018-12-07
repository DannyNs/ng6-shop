import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingCartComponent } from './shopping-cart.component';
import { MatToolbarModule, MatListModule, MatIconModule, MatCardModule } from '@angular/material';
import { ShopStore } from '../../store';
import { ShopStoreMock } from '../../test/shop-store.mock';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('ShoppingCartComponent', () => {
  let component: ShoppingCartComponent;
  let fixture: ComponentFixture<ShoppingCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingCartComponent ],
      imports: [
        MatCardModule,
        MatToolbarModule,
        MatListModule,
        MatIconModule,
      ],
      providers: [
        { provide: ShopStore, useClass: ShopStoreMock }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
