import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListingsPageComponent } from './listing-page.component';


describe('ListingPageComponent', () => {
  let component: ListingsPageComponent;
  let fixture: ComponentFixture<ListingsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListingsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListingsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
