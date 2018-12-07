import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailsComponent } from './product-details.component';
import { MatToolbarModule, MatBadgeModule, MatIconModule, MatListModule, MatCardModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';
import { ShopStoreMock } from '../../test/shop-store.mock';
import { ShopStore } from '../../store';
import { Observable, of } from 'rxjs';

class ActivatedRouteMock {

  public get params(): Observable<any> {
    return of({ ['category-product']: 'Shoes-Nike' });
  }
}

describe('ProductDetailsComponent', () => {
  let component: ProductDetailsComponent;
  let fixture: ComponentFixture<ProductDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductDetailsComponent ],
      imports: [
        MatCardModule,
        MatListModule,
        MatIconModule,
        MatBadgeModule,
        MatToolbarModule,
        RouterTestingModule,
      ],
      providers: [
        { provide: ActivatedRoute, useClass: ActivatedRouteMock },
        { provide: ShopStore, useClass: ShopStoreMock }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
