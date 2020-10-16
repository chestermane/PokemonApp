import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailSnapshotComponent } from './detail-snapshot.component';

describe('DetailSnapshotComponent', () => {
  let component: DetailSnapshotComponent;
  let fixture: ComponentFixture<DetailSnapshotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailSnapshotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailSnapshotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
