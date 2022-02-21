import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNotFoundComponent } from './page-not-found.component';

describe('PageNotFoundComponent', () => {
  let component: PageNotFoundComponent;
  let fixture: ComponentFixture<PageNotFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageNotFoundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    
  });

  it('should create Page Not Found Component', () => {
    expect(component).toBeTruthy();
  });
  it('should check the h1 tag ',()=>{
    let h1 = fixture.nativeElement.querySelector('h1');
    expect(h1.textContent).toBe('PAGE NOT FOUND!!')
  })
});
