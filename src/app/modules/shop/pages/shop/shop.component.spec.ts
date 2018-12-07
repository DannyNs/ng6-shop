import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopComponent } from './shop.component';
import { MatGridListModule, MatToolbarModule, MatIconModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';
import { ShopStore } from '../../store';
import { ShopStoreMock } from '../../test/shop-store.mock';
import { MobxAngularModule } from 'mobx-angular';
import { FilterByNamePipe } from '../../pipes/filter-by-name.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ShopComponent', () => {
  let component: ShopComponent;
  let fixture: ComponentFixture<ShopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        ShopComponent,
        FilterByNamePipe,
      ],
      imports: [
        MatIconModule,
        MatInputModule,
        MatToolbarModule,
        MatGridListModule,
        MobxAngularModule,
        MatFormFieldModule,
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
    fixture = TestBed.createComponent(ShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
