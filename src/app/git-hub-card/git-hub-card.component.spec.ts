import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GitHubCardComponent } from './git-hub-card.component';

describe('GitHubCardComponent', () => {
  let component: GitHubCardComponent;
  let fixture: ComponentFixture<GitHubCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GitHubCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GitHubCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
