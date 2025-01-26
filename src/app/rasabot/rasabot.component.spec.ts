import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RasabotComponent } from './rasabot.component';

describe('RasabotComponent', () => {
  let component: RasabotComponent;
  let fixture: ComponentFixture<RasabotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RasabotComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RasabotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
