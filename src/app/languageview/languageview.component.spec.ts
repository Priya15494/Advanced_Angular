import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageviewComponent } from './languageview.component';

describe('LanguageviewComponent', () => {
  let component: LanguageviewComponent;
  let fixture: ComponentFixture<LanguageviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LanguageviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguageviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
