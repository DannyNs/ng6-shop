import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { MatListModule, MatToolbarModule, MatCardModule, MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule } from '@angular/material';

import { CategoryComponent } from './category.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ShopStore } from '../../store';
import { ShopStoreMock } from '../../test/shop-store.mock';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { FilterByNamePipe } from '../../pipes/filter-by-name.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

class ActivatedRouteMock {

  public get params(): Observable<any> {
    return of({ category: 'Shoes' });
  }
}

describe('CategoryComponent', () => {
  let component: CategoryComponent;
  let fixture: ComponentFixture<CategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        CategoryComponent,
        FilterByNamePipe,
      ],
      imports: [
        CommonModule,
        MatListModule,
        MatIconModule,
        MatCardModule,
        MatInputModule,
        MatButtonModule,
        MatToolbarModule,
        MatFormFieldModule,
        RouterTestingModule,
        BrowserAnimationsModule,
      ],
      providers: [
        { provide: ActivatedRoute, useClass: ActivatedRouteMock },
        { provide: ShopStore, useClass: ShopStoreMock }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
