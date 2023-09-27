import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologyNewsComponent } from './technology-news.component';

describe('TechnologyNewsComponent', () => {
  let component: TechnologyNewsComponent;
  let fixture: ComponentFixture<TechnologyNewsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TechnologyNewsComponent]
    });
    fixture = TestBed.createComponent(TechnologyNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
